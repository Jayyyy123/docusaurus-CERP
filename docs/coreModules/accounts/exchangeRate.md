---
id: exchangeRate
title: Exchange Rate Revaluation
sidebar_label: Exchange Rate Revaluation
---

In CERP, you can make accounting entries in multiple currencies. For example, if you have a bank account in a foreign currency, you can make transactions in that currency and the system will show bank balance in that specific currency.

The purpose of Exchange Rate Revaluation master is to adjust the balance in General Ledger accounts according to any changes in the currency exchange rates. This is useful when you are closing your accounts books and want to update your Company's GL accounts by bringing in the money from other currency accounts.

To access the Exchange Rate Revaluation list, go to:

:::note
Home > Accounting > Multi Currency > Exchange Rate Revaluation
:::

## 1. How to set up currency in an account

1. To get started with multi currency accounting, you need to assign the accounting currency in an Account record.
1. You can define Currency from the Chart of Accounts while creating an account.

~~Set Currency from Chart of Accounts~~

3. You can also assign/modify the currency for existing accounts by opening the specific Account record.

4. Click on the Account and Click on Edit.

~~Modify Account Currency~~

## 2. How to enable Exchange Rate Revaluation

Exchange Rate Revaluation feature is for dealing with the situation when you have accounts with different currencies in one Company's Chart of Accounts.

1. Go to: Setup > Company > select the company.
1. Set the 'Unrealized Exchange Gain/Loss Account' field in Company DocType. This account is to balance the difference of total credit and total debit. Field Set for Company
1. Go to Accounting > Setup > Exchange Rate Revaluation > New.
1. Select the Company.
1. Click the 'Get Entries' button. It'll fetch the accounts which have currency different from the 'Default Currency' set in the Company.
1. This will fetch the new exchange rate automatically if not set in Currency Exchange DocType for that currency else it will fetch the 'Exchange Rate' set in the Currency Exchange DocType. Exchange Rate Revaluation

1. On Submitting, Create Journal Entry button will appear. Exchange Rate Revaluation Submitting

1. Clicking on this button will create a Journal Entry for the Exchange Rate Revaluation. Journal Entry

1. On submitting the Journal Entry, the general ledger is affected as follows: Journal Entry

## 3. Related Topics

1. Inter Company Journal Entry
1. Inter Company Invoices
