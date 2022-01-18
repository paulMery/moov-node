/** @external Promise */

/**
 * @typedef Phone
 * @property {string} number - Phone number
 * @property {string} [countryCode] - 1 digit country code
 */

/**
 * @typedef Address
 * @property {string} addressLine1
 * @property {string} addressLine2
 * @property {string} city
 * @property {string} stateOrProvince - 2 characters
 * @property {string} postalCode - 5 characters
 * @property {string} country - 2 characters
 */

/**
 * @typedef IndividualProfile
 * @property {string} name
 * @property {Phone} phone
 * @property {string} email
 * @property {Address} address
 * @property {boolean} birthDateProvided - True if individual's birthdate has been provided
 * @property {boolean} governmentIDProvided - True if individual's government-issued ID has been provided
 */

/**
 * @typedef Responsibility
 * @property {boolean} isController
 * @property {boolean} isOwner
 * @property {integer} ownershipPercentage - Required if `isOwner` is true
 * @property {string} jobTitle
 */

/**
 * @typedef Representative
 * @property {string} name
 * @property {Phone} phone
 * @property {string} email
 * @property {Address} address
 * @property {boolean} birthDateProvided - True if individual's birthdate has been provided
 * @property {boolean} governmentIDProvided - True if individual's government-issued ID has been provided
 * @property {Responsibility[]} responsibilities
 * @property {string} createdOn - Date representative was recorded
 * @property {string} updatedOn - Date representative was last updated
 * @property {string} disabledOn - Date representative was removed from business
 */

/**
 * @typedef IndustryCodes
 * @property {string} naics
 * @property {string} sic
 * @property {string} mcc
 */

/**
 * @typedef BusinessProfile
 * @property {string} legalBusinessName}
 * @property {string} doingBusinessAs
 * @property {"soleProprietorship"|"unincorporatedAssociation"|"trust"|"publicCorporation"|"privateCorporation"|"privateCorporation"|"llc"|"partnership"|"unincorporatedNonProfit"|"incorporatedNonProfit"} businessType
 * @property {Address} address
 * @property {Phone} phone
 * @property {string} email
 * @property {string} website
 * @property {string} description
 * @property {boolean} taxIDProvided - True if business's tax ID has been provided
 * @property {Representative[]} representatives
 * @property {boolean} ownersProvided - True if business owner(s) have been provided
 * @property {IndustryCodes} industryCodes
 */

/**
 * @typedef CustomerSupport
 * @property {Phone} phone
 * @property {string} email
 * @property {Address} address
 * @property {string} website
 */

/**
 * @typedef CardPaymentSettings
 * @property {string} statementDescriptor - Description to display on credit card transactions
 */

/**
 * @typedef AccountSettings
 * @property {CardPaymentSettings} cardPayment - Card payment settings (business only)
 */

/**
 * @typedef Account
 * @property {"sandbox"|"production"} mode - Mode this account is allowed to be used within
 * @property {string} accountID - Account identifier
 * @property {"individual"|"business"} accountType - Type of entity represented by this account
 * @property {string} displayName - Name of individual or business
 * @property {IndividualProfile|BusinessProfile} profile - Details for individual or business
 * @property {object} metadata - Arbitrary key-value pairs
 * @property {string} foreignID - Optional identification or alias
 * @property {CustomerSupport|null} customerSupport - Displayed on credit card transactions (business only)
 * @property {AccountSettings} settings - Account settings
 * @property {string} createdOn - Date account was created
 * @property {string} updatedOn - Date account was last updated
 */

export class Accounts {
  /**
   * Initializes a new instance of the Accounts API.
   *
   * @param {Moov} moov - Moov client
   * @private
   */
  constructor(moov) {
    this.moov = moov;
  }

  /**
   * Create a new connected account.
   *
   * @param {Account} account - New account details
   * @returns {Promise<Account>}
   */
  async create(account) {
    const token = await this.moov.getToken();

    const result = await this.moov
      .got({
        url: `accounts`,
        method: "POST",
        headers: {
          authorization: `Bearer ${token.token}`,
          "x-account-id": this.moov.credentials.accountID,
        },
        json: account,
      })
      .json();

    return result;
  }

  /**
   * Retrieves details for the account with the specified ID.
   *
   * @param {string} connectedAccountID - Account to query
   * @returns {Promise<Account>}
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

  /**
   * Updates an existing account. Requires a complete Account object.
   *
   * @param {Account} account - Account to update
   * @returns {Promise<Account>}
   */
  async update(account) {
    const token = await this.moov.getToken(account.accountID);

    const result = await this.moov
      .got({
        url: `accounts/${account.accountID}`,
        method: "PUT",
        headers: {
          authorization: `Bearer ${token.token}`,
          "x-account-id": this.moov.credentials.accountID,
        },
        json: account,
      })
      .json();

    return result;
  }

  /**
   * Updates an existing account. Does not require a complete Account object.
   *
   * @param {Account} account - Account to update
   * @returns {Promise<Account>}
   */
  async patch(account) {
    const token = await this.moov.getToken(account.accountID);

    const result = await this.moov
      .got({
        url: `accounts/${account.accountID}`,
        method: "PATCH",
        headers: {
          authorization: `Bearer ${token.token}`,
          "x-account-id": this.moov.credentials.accountID,
        },
        json: account,
      })
      .json();

    return result;
  }
}
