## Class Transfers

The Transfers API.


## Transfers.create(transfer)

Creates a transfer to move money from a source to a destination.

**Parameters**

| Name | Type | Description |
| ---- | ---- | ----------- |
| transfer | `Transfer` | Subset of the Transfer object |

**Returns**

`Promise.<TransferResponse>`



**Examples**

```javascript
const moov = new Moov(...);
try {
  const transfer = {
    source: { paymentMethodID: "..." },
    destination: { paymentMethodID: "..." },
    amount: {
      value: 3215, // $32.15
      currency: "USD"
    },
    facilitatorFee: {
      value: 8, // $0.8
      currency: "USD"
    },
    description: "Yoga class"
  };
  const { transferID } = moov.transfers.create(transfer);
} catch (err) {
  // ...
}
```

## Transfers.list(criteria)

Lists transfers that match the given criteria.

**Parameters**

| Name | Type | Description |
| ---- | ---- | ----------- |
| criteria | `TransferListCriteria` |  |

**Returns**

`Promise.<Array.<Transfer>>`



**Examples**

```javascript
const moov = new Moov(...);
try {
  const criteria = {
    accountIDs: ["...", "...", ...],
    status: "pending",
    startDateTime: new Date("1/1/2022").toISOString(), // inclusive
    endDateTime: new Date("2/1/2022").toISOString(), // exclusive
    count: 15,
    skip: 15, // start on page 2
  };
  const results = await moov.transfers.list(criteria);
} catch (err) {
  // ...
}
```

## Transfers.get(transferID)

Gets the details of a transfer.

**Parameters**

| Name | Type | Description |
| ---- | ---- | ----------- |
| transferID | `string` |  |

**Returns**

`Promise.<Transfer>`



**Examples**

```javascript
const moov = new Moov(...);
try {
  const transfer = await moov.transfers.get("...");
} catch (err) {
  // ...
}
```

## Transfers.updateMetadata(transferID, metadata)

Update the metadata on a transfer.

**Parameters**

| Name | Type | Description |
| ---- | ---- | ----------- |
| transferID | `string` |  |
| metadata | `object` | Arbitrary key-value pairs |

**Returns**

`Promise.<Transfer>`



**Examples**

```javascript
const moov = new Moov(...);
try {
  const transfer = await moov.transfers.updateMetadata(
    "...",
    { key: "value" }
  );
} catch (err) {
  // ...
}
```

## Transfers.getTransferOptions(transferOptionsCriteria)

Gets the available payment options for a transfer.

**Parameters**

| Name | Type | Description |
| ---- | ---- | ----------- |
| transferOptionsCriteria | `TransferOptionsCriteria` | Criteria for available payment options |

**Returns**

`Promise.<AvailableTransferOptions>`



**Examples**

```javascript
const moov = new Moov(...);
try {
  const options = moov.transfers.getTransferOptions({
    source: {
      accountID: "...",
      paymentMethodID: "..."
    },
    destination: {
      accountID: "...",
      paymentMethodID: "..."
    },
    amount: {
      value: 43350, // $433.50
      currency: "USD"
    }
  });
} catch (err) {
  // ...
}
```

## Transfers.refund(transferID)

Initiate a refund for a card transfer.

**Parameters**

| Name | Type | Description |
| ---- | ---- | ----------- |
| transferID | `string` |  |

**Returns**

`Promise.<TransferResponse>`



**Examples**

```javascript
const moov = new Moov(...);
try {
  const { transferID } = moov.transfers.refund("...");
} catch (err) {
  // ...
}
```

## Transfers.listRefunds(transferID)

List refunds for a card transfer.

**Parameters**

| Name | Type | Description |
| ---- | ---- | ----------- |
| transferID | `string` |  |

**Returns**

`Promise.<Array.<Refund>>`



**Examples**

```javascript
const moov = new Moov(...);
try {
  const refunds = moov.transfers.listRefunds("...");
} catch (err) {
  // ...
}
```

## Transfers.getRefund(transferID, refundID)

Get details of a specific refund.

**Parameters**

| Name | Type | Description |
| ---- | ---- | ----------- |
| transferID | `string` |  |
| refundID | `string` |  |

**Returns**

`Promise.<Refund>`



**Examples**

```javascript
const moov = new Moov(...);
try {
  const refund = moov.transfers.getRefund("...");
} catch (err) {
  // ...
}
```




## Type: PaymentMethodAccount

High-level account information associated with a payment method.

**Properties**

| Property | Type | Description |
| ---- | ---- | ----------- |
| accountID | `string` |  |
| email | `string` |  |
| displayName | `string` |  |



## Type: BankAccount



**Properties**

| Property | Type | Description |
| ---- | ---- | ----------- |
| bankAccountID | `string` |  |
| fingerprint | `string` |  |
| status | `"new"\|"verified"\|"verificationFailed"\|"pending"\|"errored"` |  |
| holderName | `string` |  |
| holderType | `"individual"\|"business"` |  |
| bankName | `string` |  |
| bankAccountType | `"checking"\|"savings"\|"unknown"` |  |
| routingNumber | `string` |  |
| lastFourAccountNumber | `string` |  |



## Type: Wallet



**Properties**

| Property | Type | Description |
| ---- | ---- | ----------- |
| walletID | `string` |  |



## Type: CardExpiration



**Properties**

| Property | Type | Description |
| ---- | ---- | ----------- |
| month | `string` | Two-character month |
| year | `string` | Two-character year |



## Type: CardVerification

The results of submitting cardholder data to a card network for verification.

**Properties**

| Property | Type | Description |
| ---- | ---- | ----------- |
| cvv | `"noMatch"\|"match"\|"notChecked"\|"unavailable"` |  |
| addressLine1 | `"noMatch"\|"match"\|"notChecked"\|"unavailable"` |  |
| postalCode | `"noMatch"\|"match"\|"notChecked"\|"unavailable"` |  |



## Type: Card



**Properties**

| Property | Type | Description |
| ---- | ---- | ----------- |
| cardID | `string` |  |
| fingerprint | `string` |  |
| brand | `"American Express"\|"Discover"\|"MasterCard"\|"Visa"` |  |
| cardType | `"debit"\|"credit"\|"prepaid"\|"unknown"` |  |
| lastFourCardNumber | `string` |  |
| bin | `string` |  |
| expiration | `CardExpiration` |  |
| holderName | `string` |  |
| billingAddress | `Address` |  |
| cardVerification | `CardVerification` |  |



## Type: ACHCode

Models the reason for an ACH return or correction.

**Properties**

| Property | Type | Description |
| ---- | ---- | ----------- |
| code | `string` |  |
| reason | `string` |  |
| description | `string` |  |



## Type: ACHDetails



**Properties**

| Property | Type | Description |
| ---- | ---- | ----------- |
|  | `"initiated"\|"originated"\|"corrected"\|"returned"\|"completed"` |  |
| traceNumber | `string` |  |
| return | `ACHCode` |  |
| correction | `ACHCode` |  |



## Type: PaymentMethod



**Properties**

| Property | Type | Description |
| ---- | ---- | ----------- |
| paymentMethodID | `string` |  |
| paymentMethodType | `"moov-wallet"\|"ach-debit-fund"\|"ach-debit-collect"\|"ach-credit-standard"\|"ach-credit-same-day"\|"rtp-credit"\|"card-payment"` |  |
| account | `PaymentMethodAccount` |  |
| bankAccount | `BankAccount` |  |
| wallet | `Wallet` |  |
| card | `Card` |  |
| achDetails | `ACHDetails` |  |
| cardDetails | `CardDetails` |  |



## Type: Amount



**Properties**

| Property | Type | Description |
| ---- | ---- | ----------- |
| value | `number` | Integer quantity in the smallest unit of the specified currency. In USD this is cents, so $12.04 is 1204 and $0.99 would be 99. |
| currency | `string` | Three-letter ISO 4217 currency code |



## Type: Refund



**Properties**

| Property | Type | Description |
| ---- | ---- | ----------- |
| refundID | `string` |  |
| createdOn | `string` |  |
| updatedOn | `string` |  |
| status | `"created"\|"pending"\|"completed"\|"failed"` |  |
| amount | `Amount` |  |



## Type: Transfer



**Properties**

| Property | Type | Description |
| ---- | ---- | ----------- |
| transferID | `string` |  |
| createdAt | `string` |  |
| status | `"created"\|"pending"\|"completed"\|"failed"\|"reversed"` |  |
| source | `PaymentMethod` |  |
| destination | `PaymentMethod` |  |
| amount | `Amount` |  |
| description | `string` |  |
| metadata | `object` | Arbitrary key-value pairs |
| refundedAmount | `Amount` |  |
| refunds | `Array.<Refund>` |  |
| facilitatorFee | `object` |  |
| moovFee | `number` | Integer quantity of Moov fee in USD, so $0.11 would be 11 |



## Type: TransferResponse



**Properties**

| Property | Type | Description |
| ---- | ---- | ----------- |
| transferID | `string` |  |



## Type: TransferListCriteria



**Properties**

| Property | Type | Description |
| ---- | ---- | ----------- |
| accountIDs | `Array.<string>` | Optional list of account IDs to filter sources and destinations |
| status | `string` | Optional transfer status by which to filter the transfers |
| startDateTime | `string` | Optional date-time which inclusively filters all transfers created after this starting date-time |
| endDateTime | `string` | Optional date-time which exclusively filters all transfers created before this date-time |
| count | `number` | Optional parameter to limit the number of results in the query |
| skip | `number` | Optional number of items to offset before starting to collect the result set |



## Type: TransferOptionsCriteria

Criteria for finding available payment types for a transfer.

**Properties**

| Property | Type | Description |
| ---- | ---- | ----------- |
| source | `object` |  |
| source.accountID | `string` |  |
| source.paymentMethodID | `string` |  |
| destination | `object` |  |
| destination.accountID | `string` |  |
| destination.paymentMethodID | `string` |  |
| amount | `Amount` |  |



## Type: TransferOptions



**Properties**

| Property | Type | Description |
| ---- | ---- | ----------- |
| paymentMethodID | `string` |  |
| paymentMethodType | `"moov-wallet"\|"ach-debit-fund"\|"ach-debit-collect"\|"ach-credit-standard"\|"ach-credit-same-day"\|"rtp-credit"\|"card-payment"` |  |
| wallet | `Wallet` | Populated when `paymentMethodType` is "moov-wallet" |
| bankAccount | `BankAccount` | Populated when `paymentMethodType` is one of the ACH or FTP variations |
| card | `Card` | Populated when `paymentMethodType` is "card-payment" |



## Type: AvailableTransferOptions



**Properties**

| Property | Type | Description |
| ---- | ---- | ----------- |
| sourceOptions | `Array.<TransferOptions>` |  |
| destinationOptions | `Array.<TransferOptions>` |  |



## Type: Refund



**Properties**

| Property | Type | Description |
| ---- | ---- | ----------- |
| refundID | `string` |  |
| createdOn | `string` |  |
| updatedOn | `string` |  |
| status | `"created"\|"pending"\|"completed"\|"failed"` |  |
| amount | `Amount` |  |




