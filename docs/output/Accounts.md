## Class Accounts

The Accounts API.


## Accounts.create(account)

Create a new connected account.

**Parameters**

| Name | Type | Description |
| ---- | ---- | ----------- |
| account | `Account` | New account details |

**Returns**

`Promise.<Account>`



## Accounts.get(connectedAccountID)

Retrieves details for the account with the specified ID.

**Parameters**

| Name | Type | Description |
| ---- | ---- | ----------- |
| connectedAccountID | `string` | Account to query |

**Returns**

`Promise.<Account>`



## Accounts.update(account)

Updates an existing account. Requires a complete Account object.

**Parameters**

| Name | Type | Description |
| ---- | ---- | ----------- |
| account | `Account` | Account to update |

**Returns**

`Promise.<Account>`



## Accounts.patch(account)

Updates an existing account. Does not require a complete Account object,
but the `accountID` property is required.

**Parameters**

| Name | Type | Description |
| ---- | ---- | ----------- |
| account | `Account` | Account to update |

**Returns**

`Promise.<Account>`






## Type: Phone



**Properties**

| Property | Type | Description |
| ---- | ---- | ----------- |
| number | `string` | Phone number |
| countryCode | `string` | 1 digit country code |



## Type: Address



**Properties**

| Property | Type | Description |
| ---- | ---- | ----------- |
| addressLine1 | `string` |  |
| addressLine2 | `string` |  |
| city | `string` |  |
| stateOrProvince | `string` | 2 characters |
| postalCode | `string` | 5 characters |
| country | `string` | 2 characters |



## Type: IndividualProfile

Describes the individual associated with a non-business account.

**Properties**

| Property | Type | Description |
| ---- | ---- | ----------- |
| name | `string` |  |
| phone | `Phone` |  |
| email | `string` |  |
| address | `Address` |  |
| birthDateProvided | `boolean` | True if individual's birthdate has been provided |
| governmentIDProvided | `boolean` | True if individual's government-issued ID has been provided |



## Type: Responsibility

Describes the responsibilities associated with a business representative.

**Properties**

| Property | Type | Description |
| ---- | ---- | ----------- |
| isController | `boolean` |  |
| isOwner | `boolean` |  |
| ownershipPercentage | `integer` | Required if `isOwner` is true |
| jobTitle | `string` |  |



## Type: Representative

Describes an individual who represents a business account.

**Properties**

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



## Type: IndustryCodes

Standard industry codes for businesses.

**Properties**

| Property | Type | Description |
| ---- | ---- | ----------- |
| naics | `string` |  |
| sic | `string` |  |
| mcc | `string` |  |



## Type: BusinessProfile

Describes a business account.

**Properties**

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



## Type: CustomerSupport

Describes customer support contact information for a business account.

**Properties**

| Property | Type | Description |
| ---- | ---- | ----------- |
| phone | `Phone` |  |
| email | `string` |  |
| address | `Address` |  |
| website | `string` |  |



## Type: CardPaymentSettings



**Properties**

| Property | Type | Description |
| ---- | ---- | ----------- |
| statementDescriptor | `string` | Description to display on credit card transactions |



## Type: AccountSettings



**Properties**

| Property | Type | Description |
| ---- | ---- | ----------- |
| cardPayment | `CardPaymentSettings` | Card payment settings (business only) |



## Type: Profile

Profile for a Moov acocunt. May be business or individual.

**Properties**

| Property | Type | Description |
| ---- | ---- | ----------- |
| business | `BusinessProfile` |  |
| individual | `IndividualProfile` |  |



## Type: Account

Describes a Moov account associated with an individual or a business.

**Properties**

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




