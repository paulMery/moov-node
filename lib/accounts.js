/**
 * The Accounts API.
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
   * Lists the connected accounts associated with the facilitator account.
   */
  async list() {
    const token = await this.moov.getToken();

    const result = await this.moov
      .got({
        url: "accounts",
        method: "GET",
        headers: {
          "x-account-id": this.moov.credentials.accountID,
        },
      })
      .json();

    return result;
  }

  async get(connectedAccountID) {
    const token = await this.moov.getToken(connectedAccountID);

    const result = await this.moov
      .got({
        url: `accounts/${connectedAccountID}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token.token}`,
          "x-account-id": this.moov.credentials.accountID,
        },
      })
      .json();

    return result;
  }
}
