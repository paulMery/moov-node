/**
 * Available scopes to request on OAuth tokens.
 * @readonly
 * @enum
 * @property {string} ACCOUNTS_CREATE - Create new accounts
 * @property {string} CONNECTIONS_READ - Query connected accounts
 * @property {string} CONNECTIONS_WRITE - Create and modify connected accounts
 * @property {string} PING - Ping Moov servers
 *
 * @see {@link Moov#generateToken}
 */
export const SCOPES = {
  ACCOUNTS_CREATE: "/accounts.write",
  PROFILE_READ: "/accounts/{accountID}/profile.read",
  PROFILE_WRITE: "/account/{accountID}/profile.write",
  CONNECTIONS_READ: "/accounts/{accountID}/connections.read",
  CONNECTIONS_WRITE: "/account/{accountID}/connections.write",
  PING: "/ping.read",
};

/**
 * For internal use only. Do not generate OAuth tokens for Moov.js and Moov
 * Drops that contain more permissions than are necessary.
 * @private
 */
export const ALL_SCOPES = [
  SCOPES.ACCOUNTS_CREATE,
  SCOPES.PROFILE_READ,
  SCOPES.PROFILE_WRITE,
  SCOPES.CONNECTIONS_READ,
  SCOPES.CONNECTIONS_WRITE,
  SCOPES.PING,
];
