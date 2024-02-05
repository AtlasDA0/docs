---
sidebar_position: 2
description: A Dapp governed by Atlas NFT collection, built on Stargaze, for the Interchain.
---

# App Fees and Governance Set Params

All contract configurations will have a dao set as the admin able to change these configurations. **These include the values that determine how much from various contract calls require while using the app.** Below displays the values AtlasDAO intends to have set for production use on Stargaze.

### Contract Versions
**Stargaze Network:** \
`elgafar-1` test-net deployments: 
* Raffles:
* Loans: 

`stargaze-1` main-net deployments:
* Raffles:
* Loans:

### Fees
* a set fee of `100 STARS`, every time a raffle is created
* `10%` of total from raffle ticket sales
* a set fee of `10 STARS`, every time a nft is put up for loan *(collateral deposit)*
* `10%` of repayment from each loan

## Delegate Discounts 
A feature to reduce the required fees for app actions if connected account has staked tokens of various communities.

### [Proposals](https://daodao.zone/dao/juno1hcldlknu2mn3exckkg75tyzjnderl95zyjte2wl495z9jla0rmdqegxlxx/home)

### Tests & Audits
Altas-dao contracts have basic coverage tests, as well as a 3rd party peer review. A true audit is TBD.