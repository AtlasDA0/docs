---
description: Put one or more multiple assets up as collateral.
---

# Listing collateral

A borrower may list various assets as collateral & signal their desired terms. This allows anyone to  either **fund a loan,** or **make an offer** on the new loan listing.

#### Supported Collateral Assets:

* Stargaze Sg721 Contracts
* CosmWasm Cw721 Contracts
* Native & IBC Tokens
* _coming soon:_ ?

#### Loan Terms

* **principle -** the initial assets being borrowed
* **interest  - %** interest from the principle&#x20;
* **duration -** blocks loan term is active&#x20;

### To List A Collateral & Define Desired Loan Terms:

1. Make sure you have the collateral you want to put up in the account connected to the UI
2. Once connected, navigate to the **create-new-raffle** page.
3. Decide which assets you are to put up as collateral, & then continue to the next page
4.  Select your desired Loan Terms:

    a.&#x20;

    b. \
    c. \
    d.&#x20;
5. Confirm the new `ListCollateral` msg

{% hint style="info" %}
GAS & FEE NOTICE: _**your tx will fail unless you provide ONLY the exact fee configured.** These values will be provided to the front end through the key-object storage of the AtlasDAO_
{% endhint %}

### _TODO: Request LoanTerms for NFT collection_
