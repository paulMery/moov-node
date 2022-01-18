<a name="Moov+Moov"></a>

## Moov.Moov
<a name="new_Moov+Moov_new"></a>

### new Moov(credentials, [gotOptionsOrInstance])
<p>The Moov API client.</p>
<p>Get the information for the <code>credentials</code> parameter from the Moov
Dashboard.</p>
<p>Moov uses the <a href="https://github.com/sindresorhus/got">Got</a> HTTP client
library. If you need to access or customize the request-response pipeline,
then provide customized options or an instance in the
<code>gotOptionsOrInstance</code> parameter.</p>


| Param | Type | Description |
| --- | --- | --- |
| credentials | <code>object</code> | <p>API key credentials</p> |
| credentials.accountID | <code>string</code> | <p>Facilitator account ID</p> |
| credentials.publicKey | <code>string</code> | <p>Public key value from API key</p> |
| credentials.secretKey | <code>string</code> | <p>Secret key value from API key</p> |
| credentials.domain | <code>string</code> | <p>One of the domains from API key</p> |
| [gotOptionsOrInstance] | <code>object</code> | <p>Customized Got options or instance. See <a href="https://github.com/sindresorhus/got">docs</a>.</p> |

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

## Moov.accounts ⇒ <code>Accounts</code>
<p>Gets the Accounts API.</p>


<a name="Moov+generateToken"></a>

## Moov.generateToken(scopes, [accountID]) ⇒ [<code>Promise.&lt;Token&gt;</code>](#Token)
<p>Generates an OAuth token required by Moov API requests. You only need call
this function when generating tokens for Moov.js and Moov Drops. The other
functions in this library generate tokens for you automatically.</p>


| Param | Type | Description |
| --- | --- | --- |
| scopes | [<code>Array.&lt;SCOPES&gt;</code>](#SCOPES) | <p>One or more permissions to request</p> |
| [accountID] | <code>string</code> | <p>Account on which to request permissions, default is faciliator account ID</p> |

**Example**  
```js
const moov = new Moov(...);
const token = await moov.generateToken([
  SCOPES.ACCOUNTS_CREATE,
  SCOPES.PING
]);
```
<a name="Moov+ping"></a>

## Moov.ping()
<p>Pings the Moov servers to check for connectivity.
See https://docs.moov.io/api.</p>

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

<a name="SCOPES"></a>

## SCOPES
<p>Available scopes to request on OAuth tokens.</p>

**Read only**: true  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| ACCOUNTS_CREATE | <code>string</code> | <p>Create new accounts</p> |
| CONNECTIONS_READ | <code>string</code> | <p>Query connected accounts</p> |
| CONNECTIONS_WRITE | <code>string</code> | <p>Create and modify connected accounts</p> |
| PING | <code>string</code> | <p>Ping Moov servers</p> |

<a name="Token"></a>

## Token
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| token | <code>string</code> | <p>String token required by Moov API requests</p> |
| expiresOn | <code>Date</code> | <p>Date and time when the token expires</p> |
| refreshToken | <code>string</code> | <p>String used to refresh this token</p> |

