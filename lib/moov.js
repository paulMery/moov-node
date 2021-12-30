import got from "got";

import { check, checkArrayLength, checkString } from "./helpers/checks";
import { Err } from "./helpers/errors";
import { Scope } from "./helpers/scopes";

const gotDefaults = {
  prefixUrl: "https://api.moov.io/api",
};

/**
 * The Moov API client.
 */
class Moov {
  /**
   * Initializes a new instance of `Moov`.
   *
   * Moov uses the [Got](https://github.com/sindresorhus/got) HTTP client
   * library. If you need to access or customize the request-response pipeline,
   * provide an instance of Got in the `gotInstance` parameter.
   *
   * @param {object} credentials - API key credentials
   * @param {string} credentials.accountID - Facilitator account ID
   * @param {string} credentials.publicKey - Public key value from API key
   * @param {string} credentials.secretKey - Secret key value from API key
   * @param {string} credentials.domain - One of the domains from API key
   * @param {object} [gotInstance] - Customized Got instance. See [docs](https://github.com/sindresorhus/got).
   */
  constructor(credentials, gotInstance) {
    check(credentials).or(Err.ApiKeyCredentials);
    checkString(credentials.accountID).or(Err.AccountID);
    checkString(credentials.publicKey).or(Err.PublicKey);
    checkString(credentials.secretKey).or(Err.SecretKey);
    checkUrl(credentials.domain).or(Err.DomainRequired);

    this.credentials = credentials;
    this.got = (gotInstance || got).extend({
      headers: {
        origin: this.credentials.domain,
      },
    });
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

    const { data } = await this.got({
      url: "/oauth/token",
      method: "POST",
      form: {
        grant_type: "client_credentials",
        client_id: this.credentials.publicKey,
        client_secret: this.credentials.secretKey,
        scope: renderedScopes.join(" "),
      },
    }).json();

    return data;
  }
}
