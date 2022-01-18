## Typedefs

<dl>
<dt><a href="#Phone">Phone</a></dt>
<dd></dd>
<dt><a href="#Address">Address</a></dt>
<dd></dd>
<dt><a href="#IndividualProfile">IndividualProfile</a></dt>
<dd></dd>
<dt><a href="#Responsibility">Responsibility</a></dt>
<dd></dd>
<dt><a href="#Representative">Representative</a></dt>
<dd></dd>
<dt><a href="#IndustryCodes">IndustryCodes</a></dt>
<dd></dd>
<dt><a href="#BusinessProfile">BusinessProfile</a></dt>
<dd></dd>
<dt><a href="#CustomerSupport">CustomerSupport</a></dt>
<dd></dd>
<dt><a href="#CardPaymentSettings">CardPaymentSettings</a></dt>
<dd></dd>
<dt><a href="#AccountSettings">AccountSettings</a></dt>
<dd></dd>
<dt><a href="#Account">Account</a></dt>
<dd></dd>
</dl>

<a name="Phone"></a>

## Phone
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| number | <code>string</code> | <p>Phone number</p> |
| [countryCode] | <code>string</code> | <p>1 digit country code</p> |

<a name="Address"></a>

## Address
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| addressLine1 | <code>string</code> |  |
| addressLine2 | <code>string</code> |  |
| city | <code>string</code> |  |
| stateOrProvince | <code>string</code> | <p>2 characters</p> |
| postalCode | <code>string</code> | <p>5 characters</p> |
| country | <code>string</code> | <p>2 characters</p> |

<a name="IndividualProfile"></a>

## IndividualProfile
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| name | <code>string</code> |  |
| phone | [<code>Phone</code>](#Phone) |  |
| email | <code>string</code> |  |
| address | [<code>Address</code>](#Address) |  |
| birthDateProvided | <code>boolean</code> | <p>True if individual's birthdate has been provided</p> |
| governmentIDProvided | <code>boolean</code> | <p>True if individual's government-issued ID has been provided</p> |

<a name="Responsibility"></a>

## Responsibility
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| isController | <code>boolean</code> |  |
| isOwner | <code>boolean</code> |  |
| ownershipPercentage | <code>integer</code> | <p>Required if <code>isOwner</code> is true</p> |
| jobTitle | <code>string</code> |  |

<a name="Representative"></a>

## Representative
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| name | <code>string</code> |  |
| phone | [<code>Phone</code>](#Phone) |  |
| email | <code>string</code> |  |
| address | [<code>Address</code>](#Address) |  |
| birthDateProvided | <code>boolean</code> | <p>True if individual's birthdate has been provided</p> |
| governmentIDProvided | <code>boolean</code> | <p>True if individual's government-issued ID has been provided</p> |
| responsibilities | [<code>Array.&lt;Responsibility&gt;</code>](#Responsibility) |  |
| createdOn | <code>string</code> | <p>Date representative was recorded</p> |
| updatedOn | <code>string</code> | <p>Date representative was last updated</p> |
| disabledOn | <code>string</code> | <p>Date representative was removed from business</p> |

<a name="IndustryCodes"></a>

## IndustryCodes
**Properties**

| Name | Type |
| --- | --- |
| naics | <code>string</code> | 
| sic | <code>string</code> | 
| mcc | <code>string</code> | 

<a name="BusinessProfile"></a>

## BusinessProfile
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| legalBusinessName} | <code>string</code> |  |
| doingBusinessAs | <code>string</code> |  |
| businessType | <code>&quot;soleProprietorship&quot;</code> \| <code>&quot;unincorporatedAssociation&quot;</code> \| <code>&quot;trust&quot;</code> \| <code>&quot;publicCorporation&quot;</code> \| <code>&quot;privateCorporation&quot;</code> \| <code>&quot;privateCorporation&quot;</code> \| <code>&quot;llc&quot;</code> \| <code>&quot;partnership&quot;</code> \| <code>&quot;unincorporatedNonProfit&quot;</code> \| <code>&quot;incorporatedNonProfit&quot;</code> | <ul> <li></li> </ul> |
| address | [<code>Address</code>](#Address) |  |
| phone | [<code>Phone</code>](#Phone) |  |
| email | <code>string</code> |  |
| website | <code>string</code> |  |
| description | <code>string</code> |  |
| taxIDProvided | <code>boolean</code> | <p>True if business's tax ID has been provided</p> |
| representatives | [<code>Array.&lt;Representative&gt;</code>](#Representative) |  |
| ownersProvided | <code>boolean</code> | <p>True if business owner(s) have been provided</p> |
| industryCodes | [<code>IndustryCodes</code>](#IndustryCodes) |  |

<a name="CustomerSupport"></a>

## CustomerSupport
**Properties**

| Name | Type |
| --- | --- |
| phone | [<code>Phone</code>](#Phone) | 
| email | <code>string</code> | 
| address | [<code>Address</code>](#Address) | 
| website | <code>string</code> | 

<a name="CardPaymentSettings"></a>

## CardPaymentSettings
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| statementDescriptor | <code>string</code> | <p>Description to display on credit card transactions</p> |

<a name="AccountSettings"></a>

## AccountSettings
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| cardPayment | [<code>CardPaymentSettings</code>](#CardPaymentSettings) | <p>Card payment settings (business only)</p> |

<a name="Account"></a>

## Account
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| mode | <code>&quot;sandbox&quot;</code> \| <code>&quot;production&quot;</code> | <p>Mode this account is allowed to be used within</p> |
| accountID | <code>string</code> | <p>Account identifier</p> |
| accountType | <code>&quot;individual&quot;</code> \| <code>&quot;business&quot;</code> | <p>Type of entity represented by this account</p> |
| displayName | <code>string</code> | <p>Name of individual or business</p> |
| profile | [<code>IndividualProfile</code>](#IndividualProfile) \| [<code>BusinessProfile</code>](#BusinessProfile) | <p>Details for individual or business</p> |
| metadata | <code>object</code> | <p>Arbitrary key-value pairs</p> |
| foreignID | <code>string</code> | <p>Optional identification or alias</p> |
| customerSupport | [<code>CustomerSupport</code>](#CustomerSupport) \| <code>null</code> | <p>Displayed on credit card transactions (business only)</p> |
| settings | [<code>AccountSettings</code>](#AccountSettings) | <p>Account settings</p> |
| createdOn | <code>string</code> | <p>Date account was created</p> |
| updatedOn | <code>string</code> | <p>Date account was last updated</p> |

