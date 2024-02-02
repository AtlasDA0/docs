---
description: >-
  Put NFT's up as collateral to borrow assets. Fund a Loan to passively collect
  more tokens. Collect NFT's from defaulted loans.
---

# Overview

**Loan Borrower's Overview**

The lifecycle begins by broadcasting a `list_collateral` to the contract. Whether you want your loan request visible to all or exclusively to specified addresses, the choice is yours.

**To secure the loan,** you must provide collateral. In your listing, state the desired principle capital and the loan duration. Peer lenders can then make offers or propose modifications to your preferred terms.

**Upon accepting an offer** in the form of cosmos native assets (STARS), the coins will go in your wallet. Simultaneously, **your collateral is moved into escrow** via smart contract, **for an agreed upon loan period.**

**Successfully repaying the loan** before its expiration results in the retrieval of your collateral;

**Defaulting on the repayment of an accepted loan** results in the lender **taking ownership of your collateral!**


**Lender's Overview**

**Lenders can loan assets** in pursue of guaranteed return, whether it be:\
\- principle + agreed upon interest\
\- assets in collateral escrow

_When the borrower repays the loan, the capital, plus the agreed fee, is returned to the lender._

In cases of default, the NFT collateral is now in ownership of the lender, akin to acquiring the NFTs at a substantial discount.

This unlocks more on-chain methods for token-economy implementations.