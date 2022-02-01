---
title: "Accounts"
weight: 30
---


### Create


Create a new connected account.

```javascript
accounts.create(account)
```

**Parameters**

| Name | Type | Description |
| ---- | ---- | ----------- |
| account | `Account` | New account details |



**Returns**

`Promise.<Account>`



### Get


Retrieves details for the account with the specified ID.

```javascript
accounts.get(connectedAccountID)
```

**Parameters**

| Name | Type | Description |
| ---- | ---- | ----------- |
| connectedAccountID | `string` | Account to query |



**Returns**

`Promise.<Account>`



### Update


Updates an existing account. Requires a complete Account object.

```javascript
accounts.update(account)
```

**Parameters**

| Name | Type | Description |
| ---- | ---- | ----------- |
| account | `Account` | Account to update |



**Returns**

`Promise.<Account>`



### Patch


Updates an existing account. Does not require a complete Account object,
but the `accountID` property is required.

```javascript
accounts.patch(account)
```

**Parameters**

| Name | Type | Description |
| ---- | ---- | ----------- |
| account | `Account` | Account to update |



**Returns**

`Promise.<Account>`







## Types
#### Phone



**Properties**

{{< tabs >}}
  {{< tab title="Details">}}
| Property | Type | Description |
| ---- | ---- | ----------- |
| number | `string` | Phone number |
| countryCode | `string` | 1 digit country code |
  {{< /tab >}}
  {{< tab title="JSON">}}
```json
{ 
  "number": "string",
  "countryCode": "string"
}
```
  {{</ tab>}}
{{</ tabs>}}




#### Address



**Properties**

{{< tabs >}}
  {{< tab title="Details">}}
| Property | Type | Description |
| ---- | ---- | ----------- |
| addressLine1 | `string` |  |
| addressLine2 | `string` |  |
| city | `string` |  |
| stateOrProvince | `string` | 2 characters |
| postalCode | `string` | 5 characters |
| country | `string` | 2 characters |
  {{< /tab >}}
  {{< tab title="JSON">}}
```json
{ 
  "addressLine1": "string",
  "addressLine2": "string",
  "city": "string",
  "stateOrProvince": "string",
  "postalCode": "string",
  "country": "string"
}
```
  {{</ tab>}}
{{</ tabs>}}




#### IndividualProfile

Describes the individual associated with a non-business account.

**Properties**

{{< tabs >}}
  {{< tab title="Details">}}
| Property | Type | Description |
| ---- | ---- | ----------- |
| name | `string` |  |
| phone | `Phone` |  |
| email | `string` |  |
| address | `Address` |  |
| birthDateProvided | `boolean` | True if individual's birthdate has been provided |
| governmentIDProvided | `boolean` | True if individual's government-issued ID has been provided |
  {{< /tab >}}
  {{< tab title="JSON">}}
```json
{ 
  "name": "string",
  "phone": "Phone",
  "email": "string",
  "address": "Address",
  "birthDateProvided": "boolean",
  "governmentIDProvided": "boolean"
}
```
  {{</ tab>}}
{{</ tabs>}}




#### Responsibility

Describes the responsibilities associated with a business representative.

**Properties**

{{< tabs >}}
  {{< tab title="Details">}}
| Property | Type | Description |
| ---- | ---- | ----------- |
| isController | `boolean` |  |
| isOwner | `boolean` |  |
| ownershipPercentage | `integer` | Required if `isOwner` is true |
| jobTitle | `string` |  |
  {{< /tab >}}
  {{< tab title="JSON">}}
```json
{ 
  "isController": "boolean",
  "isOwner": "boolean",
  "ownershipPercentage": "integer",
  "jobTitle": "string"
}
```
  {{</ tab>}}
{{</ tabs>}}




#### Representative

Describes an individual who represents a business account.

**Properties**

{{< tabs >}}
  {{< tab title="Details">}}
| Property | Type | Description |
| ---- | ---- | ----------- |
| name | `string` |  |
| phone | `Phone` |  |
| email | `string` |  |
| address | `Address` |  |
| birthDateProvided | `boolean` | True if individual's birthdate has been provided |
| governmentIDProvided | `boolean` | True if individual's government-issued ID has been provided |
| responsibilities | `Array.<Responsibility>` |  |
| createdOn | `string` | Date representative was recorded |
| updatedOn | `string` | Date representative was last updated |
| disabledOn | `string` | Date representative was removed from business |
  {{< /tab >}}
  {{< tab title="JSON">}}
```json
{ 
  "name": "string",
  "phone": "Phone",
  "email": "string",
  "address": "Address",
  "birthDateProvided": "boolean",
  "governmentIDProvided": "boolean",
  "responsibilities": "Array.<Responsibility>",
  "createdOn": "string",
  "updatedOn": "string",
  "disabledOn": "string"
}
```
  {{</ tab>}}
{{</ tabs>}}




#### IndustryCodes

Standard industry codes for businesses.

**Properties**

{{< tabs >}}
  {{< tab title="Details">}}
| Property | Type | Description |
| ---- | ---- | ----------- |
| naics | `string` |  |
| sic | `string` |  |
| mcc | `string` |  |
  {{< /tab >}}
  {{< tab title="JSON">}}
```json
{ 
  "naics": "string",
  "sic": "string",
  "mcc": "string"
}
```
  {{</ tab>}}
{{</ tabs>}}




#### BusinessProfile

Describes a business account.

**Properties**

{{< tabs >}}
  {{< tab title="Details">}}
| Property | Type | Description |
| ---- | ---- | ----------- |
| legalBusinessName} | `string` |  |
| doingBusinessAs | `string` |  |
| businessType | `"soleProprietorship"\|"unincorporatedAssociation"\|"trust"\|"publicCorporation"\|"privateCorporation"\|"privateCorporation"\|"llc"\|"partnership"\|"unincorporatedNonProfit"\|"incorporatedNonProfit"` |  |
| address | `Address` |  |
| phone | `Phone` |  |
| email | `string` |  |
| website | `string` |  |
| description | `string` |  |
| taxIDProvided | `boolean` | True if business's tax ID has been provided |
| representatives | `Array.<Representative>` |  |
| ownersProvided | `boolean` | True if business owner(s) have been provided |
| industryCodes | `IndustryCodes` |  |
  {{< /tab >}}
  {{< tab title="JSON">}}
```json
{ 
  "legalBusinessName}": "string",
  "doingBusinessAs": "string",
  "businessType": ""soleProprietorship"\|"unincorporatedAssociation"\|"trust"\|"publicCorporation"\|"privateCorporation"\|"privateCorporation"\|"llc"\|"partnership"\|"unincorporatedNonProfit"\|"incorporatedNonProfit"",
  "address": "Address",
  "phone": "Phone",
  "email": "string",
  "website": "string",
  "description": "string",
  "taxIDProvided": "boolean",
  "representatives": "Array.<Representative>",
  "ownersProvided": "boolean",
  "industryCodes": "IndustryCodes"
}
```
  {{</ tab>}}
{{</ tabs>}}




#### CustomerSupport

Describes customer support contact information for a business account.

**Properties**

{{< tabs >}}
  {{< tab title="Details">}}
| Property | Type | Description |
| ---- | ---- | ----------- |
| phone | `Phone` |  |
| email | `string` |  |
| address | `Address` |  |
| website | `string` |  |
  {{< /tab >}}
  {{< tab title="JSON">}}
```json
{ 
  "phone": "Phone",
  "email": "string",
  "address": "Address",
  "website": "string"
}
```
  {{</ tab>}}
{{</ tabs>}}




#### CardPaymentSettings



**Properties**

{{< tabs >}}
  {{< tab title="Details">}}
| Property | Type | Description |
| ---- | ---- | ----------- |
| statementDescriptor | `string` | Description to display on credit card transactions |
  {{< /tab >}}
  {{< tab title="JSON">}}
```json
{ 
  "statementDescriptor": "string"
}
```
  {{</ tab>}}
{{</ tabs>}}




#### AccountSettings



**Properties**

{{< tabs >}}
  {{< tab title="Details">}}
| Property | Type | Description |
| ---- | ---- | ----------- |
| cardPayment | `CardPaymentSettings` | Card payment settings (business only) |
  {{< /tab >}}
  {{< tab title="JSON">}}
```json
{ 
  "cardPayment": "CardPaymentSettings"
}
```
  {{</ tab>}}
{{</ tabs>}}




#### Profile

Profile for a Moov acocunt. May be business or individual.

**Properties**

{{< tabs >}}
  {{< tab title="Details">}}
| Property | Type | Description |
| ---- | ---- | ----------- |
| business | `BusinessProfile` |  |
| individual | `IndividualProfile` |  |
  {{< /tab >}}
  {{< tab title="JSON">}}
```json
{ 
  "business": "BusinessProfile",
  "individual": "IndividualProfile"
}
```
  {{</ tab>}}
{{</ tabs>}}




#### Account

Describes a Moov account associated with an individual or a business.

**Properties**

{{< tabs >}}
  {{< tab title="Details">}}
| Property | Type | Description |
| ---- | ---- | ----------- |
| mode | `"sandbox"\|"production"` | Mode this account is allowed to be used within |
| accountID | `string` | Account identifier |
| accountType | `"individual"\|"business"` | Type of entity represented by this account |
| displayName | `string` | Name of individual or business |
| profile | `Profile` | Details for individual or business |
| metadata | `object` | Arbitrary key-value pairs |
| foreignID | `string` | Optional identification or alias |
| customerSupport | `CustomerSupport\|null` | Displayed on credit card transactions (business only) |
| settings | `AccountSettings` | Account settings |
| createdOn | `string` | Date account was created |
| updatedOn | `string` | Date account was last updated |
  {{< /tab >}}
  {{< tab title="JSON">}}
```json
{ 
  "mode": ""sandbox"\|"production"",
  "accountID": "string",
  "accountType": ""individual"\|"business"",
  "displayName": "string",
  "profile": "Profile",
  "metadata": "object",
  "foreignID": "string",
  "customerSupport": "CustomerSupport\|null",
  "settings": "AccountSettings",
  "createdOn": "string",
  "updatedOn": "string"
}
```
  {{</ tab>}}
{{</ tabs>}}






