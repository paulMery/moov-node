---
title: "Bank accounts"
weight: 60
---


## Link


Link a bank account to a Moov account

```javascript
bankaccounts.link(accountID, bankAccount, plaidToken, mxAuthorizationCode)
```

**Parameters**
{{< table >}}
| Name | Type | Description |
| ---- | ---- | ----------- |
| accountID |  `string` | Account on which to add the bank account |
| bankAccount |  [BankAccountAdd](#bankaccountadd) | Optional bank account details |
| plaidToken |  `string` | Optional Plaid processor token |
| mxAuthorizationCode |  `string` | Optional Plaid processor authorization code |
{{</ table >}}



**Returns**

`Promise.<BankAccount>`



## Get


Retrieve bank account details (i.e. routing number or account type) associated with a specific Moov account.

```javascript
bankaccounts.get(accountID, bankAccountID)
```

**Parameters**
{{< table >}}
| Name | Type | Description |
| ---- | ---- | ----------- |
| accountID |  `string` | Account on which to request bank account |
| bankAccountID |  `string` | ID of the bank account to retrieve |
{{</ table >}}



**Returns**

`Promise.<BankAccount>`



## List


List all the bank accounts associated with a particular Moov account.

```javascript
bankaccounts.list(accountID)
```

**Parameters**
{{< table >}}
| Name | Type | Description |
| ---- | ---- | ----------- |
| accountID |  `string` | Account on which to request bank account |
{{</ table >}}



**Returns**

`Promise.<Array.<BankAccount>>`



## Disable


Discontinue using a specified bank account linked to a Moov account.

```javascript
bankaccounts.disable(accountID, bankAccountID)
```

**Parameters**
{{< table >}}
| Name | Type | Description |
| ---- | ---- | ----------- |
| accountID |  `string` | Account on which to request bank account |
| bankAccountID |  `string` | ID of the bank account to disable |
{{</ table >}}



**Returns**

`Promise.<void>`



## InitMicroDeposits


Initiate a micro deposit for a bank account linked to a Moov account.

```javascript
bankaccounts.initMicroDeposits(accountID, bankAccountID)
```

**Parameters**
{{< table >}}
| Name | Type | Description |
| ---- | ---- | ----------- |
| accountID |  `string` | Account on which to request bank account |
| bankAccountID |  `string` | ID of the bank account to disable |
{{</ table >}}



**Returns**

`Promise.<void>`



## CompleteMicroDeposits


Complete the micro-deposit validation process by passing the amounts of the two transfers.

```javascript
bankaccounts.completeMicroDeposits(accountID, bankAccountID)
```

**Parameters**
{{< table >}}
| Name | Type | Description |
| ---- | ---- | ----------- |
| accountID |  `string` | Account on which to request bank account |
| bankAccountID |  `string` | ID of the bank account to disable |
{{</ table >}}



**Returns**

`Promise.<void>`









