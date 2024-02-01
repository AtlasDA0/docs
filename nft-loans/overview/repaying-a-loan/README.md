---
description: >-
  Repaying the loan with interest unlocks your NFT from escrow, returning it to
  your wallet.
---

# Repaying a Loan

Early repayment is allowed. When a loan is repaid:

* &#x20;the principle, & any expected interested is sent to the loaner
* the collateral is unlocked & sent back to the borrower

{% hint style="warning" %}
**WARNING:** _A LOAN WILL ONLY REGISTER AS REPAID IF THE INTERNAL CONTRACT FUNCTION IS CALLED! If repayment is sent to the loaner any other way than calling the available function, you will lose ownership of your deposited collateral!_
{% endhint %}

### To Repay A Loan:

1. navigate to **funded-by-me** page.
2. select the loan you want to repay
3. call the `repay_borrowed_funds` function



_TODO: tiered early repayment logic_
