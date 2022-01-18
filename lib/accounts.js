/**
 * @typedef Account
 * @category Accounts
 */

/**
 * The Accounts API.
 *
 * @category Accounts
 */
export class Accounts {
  /**
   * Initializes a new instance of the Accounts API.
   * @param {Moov} moov - Moov client
   * @private
   */
  constructor(moov) {
    this.moov = moov;
  }

  /**
   * Gets information about an account.``
   * @param {string} connectedAccountID - Account to query
   * @returns {Account}
   * @category Accounts
   */
  async get(connectedAccountID) {
    const token = await this.moov.getToken(connectedAccountID);

    const result = await this.moov
      .got({
        url: `accounts/${connectedAccountID}`,
        method: "GET",
        headers: {
          authorization: `Bearer ${token.token}`,
          "x-account-id": this.moov.credentials.accountID,
        },
      })
      .json();

    return result;
  }
}
