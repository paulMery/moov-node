---
title: "Authentication"
weight: 20
---


## Functions
### GenerateToken


Generates an OAuth token required by Moov API requests.

```javascript
moov.generateToken(scopes, accountID)
```

**Parameters**

| Name | Type | Description |
| ---- | ---- | ----------- |
| scopes | `Array.<SCOPES>` | One or more permissions to request |
| accountID | `string` | Account on which to request permissions, default is faciliator account ID |



**Returns**

`Promise.<Token>`

You only need call this function when generating tokens for Moov.js and
Moov Drops. The other functions in this library generate tokens for you
automatically.

**Examples**

```javascript
const moov = new Moov(...);
const token = await moov.generateToken([
  SCOPES.ACCOUNTS_CREATE,
  SCOPES.PING
]);
```
### Ping


Pings the Moov servers to check for connectivity.
See https://docs.moov.io/api.

```javascript
moov.ping()
```





**Examples**

```javascript
const moov = new Moov(...);
try {
  await moov.ping();
  // Ping succeeded
} catch (err) {
  // Ping failed
}
```

## Types
#### Token

OAuth2 token returned by `Moov.generateToken()`. Use `Token.token` in Moov.js
and client-side code to make calls to the Moov API.

**Properties**

{{< tabs >}}
  {{< tab title="Details">}}
| Property | Type | Description |
| ---- | ---- | ----------- |
| token | `string` | String token required by Moov API requests |
| expiresOn | `Date` | Date and time when the token expires |
| refreshToken | `string` | String used to refresh this token |
  {{< /tab >}}
  {{< tab title="JSON">}}
```json
{ 
  "token": "string",
  "expiresOn": "Date",
  "refreshToken": "string"
}
```
  {{</ tab>}}
{{</ tabs>}}






## Enums
#### SCOPES

Available scopes to request on OAuth tokens.

**Members**

| Value | Description |
| ----- | ----------- |
| ACCOUNTS_CREATE | Create new accounts |
| PROFILE_READ | Read account information |
| PROFILE_WRITE | Write account information |
| PING | Ping Moov servers to test for connectivity |

