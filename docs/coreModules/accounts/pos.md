---
id: pos
title: Point of Sale
sidebar_label: Point of Sale
---

**A Point of Sale refers to the time and place where a retail transaction takes place.**

For retail operations, the delivery of goods, accrual of sale and payment all happens in one event, that is usually called the 'Point of Sale' (POS).

In CERP Sales Invoices can be generated from the POS. There are two steps to set up POS:

To access POS, go to:

:::note
Home > Retail > Retail Operations > POS
:::

## 1. Prerequisites

Before creating and using Point of Sale, it is advisable to create the following first:

1. POS Profile

## 2. How to create a POS Invoice

Once you set up a POS profile, you can start billing on POS.

1. Go to POS and select a Customer.
1. Add Items from the list displayed on the right by clicking on them.
1. Ensure that the Item has a Selling Price set in the Item Price list.
1. Edit the quantities as needed.
1. In order to edit Rate and Discount, you need to enable them in the POS Profile.
1. A default Warehouse needs to be set to complete the transaction. If Warehouse is set in both Item and POS profile, the one in POS Profile will be given preference.
1. Do note that you need to have Items in your Warehouse before you can sell. If Items are not available, a red dot will be shown next to the Item when selected.
  ![image](images/image.jpg)
1. When all Items are added, click on Pay. You'll be asked to submit the Sales Invoice.
1. Select the payment mode, Submit
1. You can then print the POS invoice.
   ![image](images/image.jpg)
   After the Sales Invoice is submitted, you can either print or email it directly to the customer.

### 2.2 Adding an Item

At the billing counter, the retailer needs to select Items which the Customer buys. In the POS interface you can select an Item by two methods. One, is by clicking on the Item image and the other, is through the Barcode / Serial No.

- Select Item: To select a product click on the Item image and add it into the cart. A cart is an area that prepares a customer for checkout by allowing to edit product information, adjust taxes and add discounts.

- Barcode / Serial No: A Barcode / Serial No is an optical machine-readable representation of data relating to the object to which it is attached. Enter Barcode / Serial No in the box as shown in the image below and pause for a second, the item will be automatically added to the cart.

![image](images/image.jpg)

:::tip
Tip: To change the quantity of an Item, enter your desired quantity in the quantity box. These are mostly used if the same Item is purchased in bulk.
:::

If your product list is very long use the Search field, type the product name in Search box.

### 2.3 Removing an Item from the Cart

Select row in the cart and click on Delete button in the numeric keypad

![image](images/image.jpg)

Set Qty as zero to remove Item from the POS invoice. There are two ways to remove an Item.

- If Item's Qty is 1, click on a minus sign to make it zero.
- Manually enter 0 (zero) quantity.

### 2.4 Change Amount

POS calculates the extra amount paid by the customer, which user can return from the cash account. User has to set the account for the change amount on the POS profile.

![image](images/image.jpg)

### 2.5 Write off Amount

If you are writing off certain amount. For example when you receive extra cash as a result of not having exact denomination of change, check on ‘Write off Outstanding Amount’ and set the Account.

Outstanding amount can be write off from the POS, user has to enter the amount under Write Off field on the payment screen.

For example, here bill amount is 2,310, but the Customer paid 2,300, then the amount written off will be 10. POS Payment

System books the Write Off amount into the General Ledger account which has selected on the POS Profile.

### 2.6 Change POS profile

Change the POS Profile via:

:::note
Menu > Change POS Profile
:::

Select the Company and then choose the POS Profile from the list. You can also set the newly selected POS profile as the default for the Company.

![image](images/image.jpg)
## 3. Features

### 3.1 Adding a new Customer

In POS, user can select the existing Customer during making an order or create a new customer. This feature works in the offline mode also. User can also add the customer details like contact number, address details, etc on the form. The Customer which has been created from the POS will be synced when the internet connection is active.

![image](images/image.jpg)

### 3.2 Offline POS

In CERP, you can create POS Invoices, even when not connected to the internet. POS Invoices created in the offline mode will be saved locally in the browser (cached). If internet connection is lost which creating POS Invoice, you will still be able can proceed forward. Once internet connection is available again, offline invoices will be synced, and pushed onto your CERP account.

To learn more on how POS Invoices can be created when offline, check here.

### 3.3 Offline Records

All the records from the POS stores into the browser's and syncs submitted records after every minute of the interval if system is connected to internet. User can view the offline records by clicking on Menu > View Offline Records.

![image](images/image.jpg)

### 3.4 Accounting entries (GL Entry) for a Point of Sale:

Debits:

- Customer (grand total)
- Bank/Cash (payment)
  Credits:

- Income (net total, minus taxes for each Item)
- Taxes (liabilities to be paid to the government)
- Customer (payment)
- Write Off (optional)
- Account for Change Amount (optional)
  To see entries after submitting the Sales Invoice, click on View Ledger.

### 3.5 Email

Users can send email from the POS, after submitting an order, user has to click on Menu > Email: POS Payment After sync of a POS order, email is sent to the Customer with the print of the bill in the attachment.

### 3.6 POS Closing Voucher

At the end of the day, the cashier can close his/her PoS by creating a POS Closing Voucher. Click on the Menu and select 'Close the POS'. Select the period, your POS Profile and your user to retrieve all sales registered.

For closing shift wise or cashier wise, use the POS Cashier Closing.

![image](images/image.jpg)

Enter the collected amount for each mode of payment. If you notice any difference between the system amount and the actual physical cash collected, create a Difference Posting.

## 4. Related Topics

1. Sales Invoice
1. Purchase Order
1. Payment Entry
1. Payment Request
