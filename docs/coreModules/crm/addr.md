---
id: addr
title: Address
sidebar_label: Address
---

**You can record the addresses associated with a Lead, Customer, Supplier, Shareholder, Sales Partner or a Warehouse.**

You can also add an Address as a standalone record without linking it to any of the entities listed above.

To access the Address list, go to:
:::note
Home > CRM > Address
:::

## 1. How to create an Address

Go to the Address list and click on New.
Select Address Type.
Enter details in Address Line 1, Address Line 2, City/Town, County, State, Country.
Enter Email Address, Phone and Fax.
Enter Link DocType and Link Name to link this address to customer, supplier etc.
Save. Contact
You can also add an Address from the Customer or Supplier record by clicking on “New Address" button as shown below.

~~Contact~~

To Import multiple addresses from a spreadsheet, use the Data Import Tool.

## 2. Features

### 2.1 Link an Address to Multiple Entities

An address may be linked to multiple customers or multiple suppliers.

An address can also be linked to customers and suppliers at the same time.

~~Contact~~

### 2.2 Address Title

If the address is not linked to any entity you need to manually add a title.

If the address is linked to an entity like a customer or supplier, the title is generated automatically in 'Entity Name-Address Type' format.

~~Contact~~

### 2.3 Preferred Billing Address and Shipping Address

If you check 'Preferred Shipping Address', the address would be automatically added in the Shipping Address in Sales Order, Sales Invoice and Delivery Note transactions.

Similarly, if you check 'Preferred Billing Address', the address would be automatically added in the Billing Address in Sales Order, Sales Invoice and Delivery Note transactions.

### 2.4 GST Localization for India

If the customer/supplier has registered for GST, enter Party GSTIN and GST State.Make sure GSTIN entered is in valid format.

In sales transactions along with address, GSTIN is also fetched.

~~Contact~~

You can also add addresses of your own company's facilities. Check 'Is Your Company Address', select Company in Link DocType, and Company Name in Link Name for such addresses and you can select them in GST Sales Invoice to print your own address.

~~Contact~~

GSTIN is to be added in Address and not in Customer/Supplier, as one Customer/Supplier may have multiple GSTIN (one for each state where he conducts his business).

## 3. Related Topics

1. Customer
1. Supplier
1. Sales Partner
