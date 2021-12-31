import got from "got";

import {
  check,
  checkArrayLength,
  checkString,
  checkUrl,
} from "./helpers/checks.js";
import { Err } from "./helpers/errors.js";
import { SCOPES } from "./helpers/scopes.js";

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
   */
  constructor(credentials, gotOptionsOrInstance) {
    check(credentials).or(Err.ApiKeyCredentials);
    checkString(credentials.accountID).or(Err.AccountID);
    checkString(credentials.publicKey).or(Err.PublicKey);
    checkString(credentials.secretKey).or(Err.SecretKey);
    checkUrl(credentials.domain).or(Err.DomainRequired);

    this.credentials = credentials;
    this.token = null;
    this.got = got.extend(
      {
        headers: {
          origin: this.credentials.domain,
        },
      },
      gotDefaults,
      gotOptionsOrInstance
    );
  }

  /**
   * @typedef Token
   * @property {string} token - String token required by Moov API requests
   * @property {Date} expiresOn - Date and time when the token expires
   * @property {string} refreshToken - String used to refresh this token
   */

  /**
   * Generates an OAuth token required by Moov API requests. You only need call
   * this function when generating tokens for Moov.js and Moov Drops. The other
   * methods in this library generate tokens automatically.
   *
   * @param {Scope} scopes - One or more permissions to request
   * @returns {Promise<Token>}
   *
   * @example
   * const moov = new Moov(...);
   * const token = await moov.generateToken(Scope.AccountsCreate, Scope.Ping);
   */
  async generateToken(...scopes) {
    checkArrayLength(scopes).or(Err.Scopes);

    const renderedScopes = [];
    for (let scope of scopes) {
      checkString(scope).or(Err.Scopes);
      renderedScopes.push(
        scope.replace("{accountID}", this.credentials.accountID)
      );
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
   * Gets the cached general-purpose token or creates a new one.
   * @returns {Token}
   * @private
   */
  async getToken() {
    const now = new Date();
    if (!this.token || this.token.expiresOn <= now) {
      this.token = await this.generateToken(
        SCOPES.ACCOUNTS_CREATE,
        SCOPES.CONNECTIONS_READ,
        SCOPES.CONNECTIONS_WRITE,
        SCOPES.PING
      );
    }

    return this.token;
  }
}
