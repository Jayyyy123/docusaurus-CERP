---
id: purcRet
title: Purchase Return
sidebar_label: Purchase Return
---

A purchased Item being returned is known as a Purchase Return.

With the Purchase Return feature, you can return products to the Supplier. This may be on account of a number of reasons like defects in goods, quality not matching, the buyer not needing the stock, etc.

## 1. Prerequisites

Before creating and using a Purchase Return, it is advised that you create the following first:

- Item
- Purchase Invoice

Or

- Purchase Receipt

## 2. How to create a Purchase Return

First open the original Purchase Receipt, against which supplier delivered the Items.

![image](images/image.jpg)

Click on 'Create > Return', it will open a new Purchase Receipt with 'Is Return' checked. Items, Rate, and taxes will negative numbers.

![image](images/image.jpg)

On submission of Return Purchase Return, the system will decrease item quantity from the mentioned Warehouse. To maintain correct stock valuation, stock balance will also go up according to the original purchase rate of the returned items.

![image](images/image.jpg)

In the Accounting Ledger, the Stock In Hand account will be credited and the Stock Received but Not Billed account will be debited.

![image](images/image.jpg)

If Perpetual Inventory enabled, the system will also post accounting entry against warehouse account to sync warehouse account balance with stock balance as per Stock Ledger.

## 3. Related Topics

1. Sales Return
1. Perpetual Inventory
