import got from "got";

import {
  check,
  checkArrayLength,
  checkString,
  checkUrl,
} from "./helpers/checks.js";
import { Err } from "./helpers/errors.js";
import { ALL_SCOPES, SCOPES } from "./helpers/scopes.js";

import { Accounts } from "./accounts.js";

const gotDefaults = {
  prefixUrl: "https://api.moov.io",
};

/**
 * The Moov API client.
 */
export class Moov {
  /**
   * Initializes a new instance of `Moov`.
   *
   * Get the information for the `credentials` parameter from the Moov
   * Dashboard.
   *
   * Moov uses the [Got](https://github.com/sindresorhus/got) HTTP client
   * library. If you need to access or customize the request-response pipeline,
   * then provide customized options or an instance in the
   * `gotOptionsOrInstance` parameter.
   *
   * @param {object} credentials - API key credentials
   * @param {string} credentials.accountID - Facilitator account ID
   * @param {string} credentials.publicKey - Public key value from API key
   * @param {string} credentials.secretKey - Secret key value from API key
   * @param {string} credentials.domain - One of the domains from API key
   * @param {object} [gotOptionsOrInstance] - Customized Got options or instance. See [docs](https://github.com/sindresorhus/got).
   *
   * @example
   * const moov = new Moov({
   *   accountID: "...",
   *   publicKey: "...",
   *   secretKey: "...",
   *   domain: "...",
   * });
   */
  constructor(credentials, gotOptionsOrInstance) {
    check(credentials).or(Err.ApiKeyCredentials);
    checkString(credentials.accountID).or(Err.AccountID);
    checkString(credentials.publicKey).or(Err.PublicKey);
    checkString(credentials.secretKey).or(Err.SecretKey);
    checkUrl(credentials.domain).or(Err.DomainRequired);

    this.credentials = credentials;
    this.tokenCache = {};
    this.got = got.extend(
      {
        headers: {
          origin: this.credentials.domain,
        },
      },
      gotDefaults,
      gotOptionsOrInstance
    );

    this._accounts = null;
  }

  /**
   * Generates an OAuth token required by Moov API requests. You only need call
   * this function when generating tokens for Moov.js and Moov Drops. The other
   * functions in this library generate tokens for you automatically.
   *
   * @param {SCOPES[]} scopes - One or more permissions to request
   * @param {string} [accountID] - Account on which to request permissions, default is faciliator account ID
   * @returns {Promise<Token>}
   *
   * @example
   * const moov = new Moov(...);
   * const token = await moov.generateToken([
   *   SCOPES.ACCOUNTS_CREATE,
   *   SCOPES.PING
   * ]);
   */
  async generateToken(scopes, accountID) {
    checkArrayLength(scopes).or(Err.Scopes);

    if (!accountID) {
      accountID = this.credentials.accountID;
    }

    const renderedScopes = [];
    for (let scope of scopes) {
      checkString(scope).or(Err.Scopes);
      renderedScopes.push(scope.replace("{accountID}", accountID));
    }

    const result = await this.got({
      url: "oauth2/token",
      method: "POST",
      form: {
        grant_type: "client_credentials",
        client_id: this.credentials.publicKey,
        client_secret: this.credentials.secretKey,
        scope: renderedScopes.join(" "),
      },
    }).json();

    const expiresOn = new Date(new Date().getTime() + result.expires_in * 1000);

    return {
      token: result.access_token,
      expiresOn,
      refreshToken: result.refresh_token,
    };
  }

  /**
   * Pings the Moov servers to check for connectivity.
   * See [docs.moov.io]().
   *
   * @example
   * const moov = new Moov(...);
   * try {
   *   await moov.ping();
   *   // Ping succeeded
   * } catch (err) {
   *   // Ping failed
   * }
   */
  async ping() {
    const token = await this.getToken();

    await this.got({
      url: "ping",
      method: "GET",
      headers: {
        Authorization: `Bearer ${token.token}`,
      },
    });
  }

  /**
   * Gets the Accounts API.
   * @returns {Accounts}
   */
  get accounts() {
    if (!this._accounts) {
      this._accounts = new Accounts(this);
    }
    return this._accounts;
  }

  /**
   * Gets a cached token or creates a new one.
   * @param {string} accountID - Account identifier
   * @returns {Token}
   * @private
   */
  async getToken(accountID) {
    if (!accountID) {
      accountID = this.credentials.accountID;
    }
    const now = new Date();
    if (
      !this.tokenCache[accountID] ||
      this.tokenCache[accountID].expiresOn <= now
    ) {
      this.tokenCache[accountID] = await this.generateToken(
        ALL_SCOPES,
        accountID
      );
    }

    return this.tokenCache[accountID];
  }
}
