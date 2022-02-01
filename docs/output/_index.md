---
title: "Moov"
weight: 10
---

## Class Moov

The Moov API client.

## new Moov(credentials, gotOptionsOrInstance)

Initializes a new instance of the Moov API client.

**Parameters**

| Name | Type | Description |
| ---- | ---- | ----------- |
| credentials | `object` | API key credentials |
| credentials.accountID | `string` | Facilitator account ID |
| credentials.publicKey | `string` | Public key value from API key |
| credentials.secretKey | `string` | Secret key value from API key |
| credentials.domain | `string` | One of the domains from API key |
| gotOptionsOrInstance | `object` | Customized Got options or instance. See [docs](https://github.com/sindresorhus/got). |


Get the information for the `credentials` parameter from the Moov
Dashboard.

Moov uses the [Got](https://github.com/sindresorhus/got) HTTP client
library. If you need to access or customize the request-response pipeline,
then provide customized options or an instance in the
`gotOptionsOrInstance` parameter.

**Examples**

```javascript
const moov = new Moov({
  accountID: "...",
  publicKey: "...",
  secretKey: "...",
  domain: "...",
});
```
## Moov.ping()
Pings the Moov servers to check for connectivity.
See https://docs.moov.io/api.





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
## Moov.accounts

Gets the Accounts API.

**Type**: `Accounts`

 

**Examples**

```javascript
const moov = new Moov(...);
try {
  await moov.accounts.create(...);
} catch (err) {
  // ...
}
```


