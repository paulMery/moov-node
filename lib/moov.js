import got from "got";

import { Err } from "./helpers/errors";
import { requiresString } from "./helpers/requires";

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
   * @param {string} accountID - Facilitator account ID
   * @param {string} publicKey - Public key value from API key
   * @param {string} secretKey - Secret key value from API key
   * @param {object} [gotInstance] - Customized Got instance. See [docs](https://github.com/sindresorhus/got).
   */
  constructor(accountID, publicKey, secretKey, gotInstance) {
    requiresString(accountID).or(Err.AccountIDRequired);
    requiresString(publicKey).or(Err.PublicKeyRequired);
    requiresString(secretKey).or(Err.SecretKeyRequired);

    this.accountID = accountID;
    this.publicKey = publicKey;
    this.secretKey = secretKey;
    this.got = gotInstance || got;
  }
}
