---
title: "Moov"
weight: 10
---

### Moov


Initializes a new instance of the Moov API client.

```javascript
new Moov(credentials, )
```

**Parameters**

| Name | Type | Description |
| ---- | ---- | ----------- |
| credentials |   | API key credentials |
| credentials.accountID |   | Facilitator account ID |
| credentials.publicKey |   | Public key value from API key |
| credentials.secretKey |   | Secret key value from API key |
| credentials.domain |   | One of the domains from API key |




Get the information for the `credentials` parameter from the Moov
Dashboard.

Moov uses the [Got](https://github.com/sindresorhus/got) HTTP client
library. If you need to access or customize the request-response pipeline,
then provide customized options or an instance in the
as an optional second parameter.

**Examples**

```javascript
const moov = new Moov({
  accountID: "...",
  publicKey: "...",
  secretKey: "...",
  domain: "...",
});
```


### Accounts

```javascript
moov.accounts
```

More on [accounts](accounts).

Gets the Accounts API.

 

**Examples**

```javascript
const moov = new Moov(...);
try {
  await moov.accounts.create(...);
} catch (err) {
  // ...
}
```






