---
id: salesRet
title: Sales Return
sidebar_label: Sales Return
---

A sold Item being returned is known as a Sales Return.

Goods sold being returned happens commonly in business. They could be returned by the customer due to quality issues, non-delivery on the agreed date, or any other reason.

## 1. Prerequisites

Before creating and using a Sales Return, it is advised that you create the following first:

Item
Sales Invoice

Or

Delivery Note

## 2. How to create a Sales Return

First open the original Delivery Note / Sales Invoice, against which Customer returned the Items.

Original Delivery Note

Then click on 'Create > Sales Return', it will open a new Delivery Note with 'Is Return' checked, Items, Rate, and taxes will negative numbers.

Return Against Delivery Note

You can also create the return entry against the original Sales Invoice, to return stock along with credit note, check "Update Stock" option in Return Sales Invoice.

Return Against Sales Invoice

On submission of Return Delivery Note / Sales Invoice, the system will increase stock balance in the mentioned Warehouse. To maintain correct stock valuation, stock balance will go up according to the original purchase rate of the returned items.

Return Stock Ledger

In case of Return Sales Invoice, Customer account will be credited and associated income and tax account will be debited as shown in the Accounting Ledger.

Return Stock Ledger

If Perpetual Inventory is enabled, the system will also post accounting entry against warehouse account to sync warehouse account balance with stock balance as per Stock Ledger.

## 3. Related Topics

1. Purchase Return
1. Perpetual Inventory
