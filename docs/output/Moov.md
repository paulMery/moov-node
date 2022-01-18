## Classes

<dl>
<dt><a href="#Moov">Moov</a></dt>
<dd><p>The Moov API client.</p></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#Token">Token</a></dt>
<dd></dd>
</dl>

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

