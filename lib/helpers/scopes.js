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
  CONNECTIONS_READ: "/accounts/{accountID}/connections.read",
  CONNECTIONS_WRITE: "/account/{accountID}/connections.write",
  PING: "/ping.read",
};
