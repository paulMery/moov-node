/**
 * The Accounts API.
 */
export class Accounts {
    /**
     * Initializes a new instance of the Accounts API.
     * @param {Moov} moov - Moov client
     * @private
     */
    private constructor();
    moov: Moov;
    /**
     * Gets information about an account.``
     * @param {string} connectedAccountID - Account to query
     * @returns {Account}
     */
    get(connectedAccountID: string): Account;
}
//# sourceMappingURL=accounts.d.ts.map