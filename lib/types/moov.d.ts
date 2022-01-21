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
    constructor(credentials: {
        accountID: string;
        publicKey: string;
        secretKey: string;
        domain: string;
    }, gotOptionsOrInstance?: object);
    credentials: {
        accountID: string;
        publicKey: string;
        secretKey: string;
        domain: string;
    };
    tokenCache: {};
    got: any;
    _accounts: any;
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
    generateToken(scopes: SCOPES[], accountID?: string): Promise<Token>;
    /**
     * Pings the Moov servers to check for connectivity.
     * See https://docs.moov.io/api.
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
    ping(): Promise<void>;
    /**
     * Gets the Accounts API.
     * @returns {Accounts}
     */
    get accounts(): Accounts;
    /**
     * Gets a cached token or creates a new one.
     * @param {string} accountID - Account identifier
     * @returns {Token}
     * @private
     */
    private getToken;
}
import { SCOPES } from "./helpers/scopes.js";
import { Accounts } from "./accounts.js";
//# sourceMappingURL=moov.d.ts.map