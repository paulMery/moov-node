
            <a name="Moov"></a>

## Moov
The Moov API client.

**Kind**: global class  

* [Moov](#Moov)
    * [new Moov(credentials, [gotOptionsOrInstance])](#new_Moov_new)
    * [.accounts](#Moov+accounts) ⇒ <code>Accounts</code>
    * [.generateToken(scopes, [accountID])](#Moov+generateToken) ⇒ <code>Promise.&lt;Token&gt;</code>
    * [.ping()](#Moov+ping)

<a name="new_Moov_new"></a>

### new Moov(credentials, [gotOptionsOrInstance])
Initializes a new instance of `Moov`.

Get the information for the `credentials` parameter from the Moov
Dashboard.

Moov uses the [Got](https://github.com/sindresorhus/got) HTTP client
library. If you need to access or customize the request-response pipeline,
then provide customized options or an instance in the
`gotOptionsOrInstance` parameter.


| Param | Type | Description |
| --- | --- | --- |
| credentials | <code>object</code> | API key credentials |
| credentials.accountID | <code>string</code> | Facilitator account ID |
| credentials.publicKey | <code>string</code> | Public key value from API key |
| credentials.secretKey | <code>string</code> | Secret key value from API key |
| credentials.domain | <code>string</code> | One of the domains from API key |
| [gotOptionsOrInstance] | <code>object</code> | Customized Got options or instance. See [docs](https://github.com/sindresorhus/got). |

**Example**  
```js
const moov = new Moov({
  accountID: "...",
  publicKey: "...",
  secretKey: "...",
  domain: "...",
});
```
<a name="Moov+accounts"></a>

### moov.accounts ⇒ <code>Accounts</code>
Gets the Accounts API.

**Kind**: instance property of [<code>Moov</code>](#Moov)  
<a name="Moov+generateToken"></a>

### moov.generateToken(scopes, [accountID]) ⇒ <code>Promise.&lt;Token&gt;</code>
Generates an OAuth token required by Moov API requests. You only need call
this function when generating tokens for Moov.js and Moov Drops. The other
functions in this library generate tokens for you automatically.

**Kind**: instance method of [<code>Moov</code>](#Moov)  

| Param | Type | Description |
| --- | --- | --- |
| scopes | <code>Array.&lt;SCOPES&gt;</code> | One or more permissions to request |
| [accountID] | <code>string</code> | Account on which to request permissions, default is faciliator account ID |

**Example**  
```js
const moov = new Moov(...);
const token = await moov.generateToken([
  SCOPES.ACCOUNTS_CREATE,
  SCOPES.PING
]);
```
<a name="Moov+ping"></a>

### moov.ping()
Pings the Moov servers to check for connectivity.
See https://docs.moov.io/api.

**Kind**: instance method of [<code>Moov</code>](#Moov)  
**Example**  
```js
const moov = new Moov(...);
try {
  await moov.ping();
  // Ping succeeded
} catch (err) {
  // Ping failed
}
```
        