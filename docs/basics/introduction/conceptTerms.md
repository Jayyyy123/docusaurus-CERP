---
id: conceptTerms
title: Concepts and Terms
sidebar_label: Concepts and Terms
---

Before you start implementation, lets get familiar with the terminology that is used and some basic concepts in CERP.

## Basic Concepts

## Company

This represents the Company records for which CERP is setup. With this same setup, you can create multiple Company records, each representing a different legal entity. The accounting for each Company will be different, but they will share the Customer, Supplier and Item records.

:::note

Setup > Company

:::

## Customer

Represents a customer. A Customer can be an individual or an organization. You can create multiple Contacts and Addresses for each Customer.

:::note

Selling > Customer

:::

## Supplier

Represents a supplier of goods or services. Your telephone company is a Supplier, so is your raw materials Supplier. Again, a Supplier can be an individual or an organization and has multiple Contacts and Addresses.

:::note

Buying > Supplier

:::

## Item

A Product, sub-product or Service that is either bought, sold or manufactured and is uniquely identified.

:::note

Stock > Item

:::

## Account

An Account is a heading under which financial and business transactions are carried on. For example, “Travel Expense” is an account, “Customer Zoe”, “Supplier Mae” are accounts. CERP creates accounts for Customers and Suppliers automatically.

:::note

Accounting > Chart of Accounts

:::

## Address

An address represents location details of a Customer or Supplier. These can be of different locations such as Head Office, Factory, Warehouse, Shop etc.

:::note

Selling > Address

:::

## Contact

An individual Contact belongs to a Customer or Supplier or is just an independent. A Contact has a name and contact details like email and phone number.

:::note

Selling > Contact

:::

## Communication

A list of all Communication with a Contact or Lead. All emails sent from the system are added to the Communication table.

:::note

Support > Communication

:::

## Price List

A Price List is a place where different rate plans can be stored. It’s a name you give to a set of Item Prices stored under a particular List.

:::note

Selling > Price List
Buying > Price List

:::

## Accounting

## Fiscal Year

Represents a Financial Year or Accounting Year. You can operate multiple Fiscal Years at the same time. Each Fiscal Year has a start date and an end date and transactions can only be recorded in this period. When you “close” a fiscal year, it's balances are transferred as “opening” balances for the next fiscal year.

:::note

Setup > Company > Fiscal Year

:::

## Cost Center

A Cost Center is like an Account, but the only difference is that its structure represents your business more closely than Accounts. For example, in your Chart of Accounts, you can separate your expenses by its type (i.e., travel, marketing, etc.). In your Chart of Cost Centers, you can separate them by product line or business group (e.g., online sales, retail sales, etc.).

:::note

Accounting > Chart of Cost Centers

:::

## Journal Entry

A document that contains General Ledger (GL) entries and the sum of Debits and Credits of those entries is the same. In CERP you can update Payments, Returns, etc., using Journal Entries.

:::note

Accounting > Journal Entry

:::

## Sales Invoice

A bill sent to Customers for delivery of Items (goods or services).

:::note

Accounting > Sales Invoice

:::

## Purchase Invoice

A bill sent by a Supplier for delivery of Items (goods or services).

:::note

Accounting > Purchase Invoice

:::

## Currency

CERP allows you to book transactions in multiple currencies. There is only one currency for your book of accounts though. While posting your Invoices with payments in different currencies, the amount is converted to the default currency by the specified conversion rate.

:::note

Setup > Currency

:::

## Selling

Customer Group
A classification of Customers, usually based on market segment.

:::note

Selling > Setup > Customer Group

:::

## Lead

A person who could be a future source of business. A Lead may generate Opportunities. (from: “may lead to a sale”).

:::note

CRM > Lead

:::

## Opportunity

A potential sale. (from: “opportunity for a business”).

:::note

CRM > Opportunity

:::

## Quotation

Customer's request to price an item or service.

:::note

Selling > Quotation

:::

## Sales Order

A note confirming the terms of delivery and price of an Item (product or service) by the Customer. Deliveries, Work Orders and Invoices are made on basis of Sales Orders.

:::note

Selling > Sales Order

:::

## Territory

A geographical area classification for sales management. You can set targets for Territories and each sale is linked to a Territory.

:::note

Selling > Setup > Territory

:::

## Sales Partner

A third party distributer / dealer / affiliate / commission agent who sells the company’s products usually for a commission.

:::note

Selling > Setup > Sales Partner

:::

## Sales Person

Someone who pitches to the Customer and closes deals. You can set targets for Sales Persons and tag them in transactions.

:::note

Selling > Setup > Sales Person

:::

## Buying

## Purchase Order

A contract given to a Supplier to deliver the specified Items at the specified cost, quantity, dates and other terms.

:::note

Buying > Purchase Order

:::

## Material Request

A request made by a system User, or automatically generated by CERP based on reorder level or projected quantity in Production Plan for purchasing a set of Items.

:::note

Buying > Material Request

:::

## Stock (Inventory)

## Warehouse

A logical Warehouse against which stock entries are made.

:::note

Stock > Warehouse

:::

## Stock Entry

Material transfer from a Warehouse, to a Warehouse or from one Warehouse to another.

:::note

Stock > Stock Entry

:::

## Delivery Note

A list of Items with quantities for shipment. A Delivery Note will reduce the stock of Items for the Warehouse from where you ship. A Delivery Note is usually made against a Sales Order.

:::note

Stock > Delivery Note

:::

## Purchase Receipt

A note stating that a particular set of Items were received from the Supplier, most likely against a Purchase Order.

:::note

Stock > Purchase Receipt

:::

## Serial Number

A unique number given to a particular unit of an Item.

:::note

Stock > Serial Number

:::

## Batch

A number given to a group of units of a particular Item that may be purchased or manufactured in a group.

:::note

Stock > Batch

:::

## Stock Ledger Entry

A unified table for all material movement from one warehouse to another. This is the table that is updated when a Stock Entry, Delivery Note, Purchase Receipt, and Sales Invoice (POS) is made.

## Stock Reconciliation

Update Stock of multiple Items from a spreadsheet (CSV) file.

:::note

Stock > Stock Reconciliation

:::

## Quality Inspection

A note prepared to record certain parameters of an Item at the time of Receipt from Supplier, or Delivery to Customer.

:::note

Stock > Quality Inspection

:::

## Item Group

A classification of Item.

:::note

Stock > Setup > Item Group

:::

## Human Resource Management

## Employee

Record of a person who has been in present or past, in the employment of the company.

:::note

Human Resources > Employee

:::

## Leave Application

A record of an approved or rejected request for leave.

:::note

Human Resource > Leave Application

:::

## Leave Type

A type of leave (e.g., Sick Leave, Maternity Leave, etc.).

:::note

Human Resource > Leave and Attendance > Leave Type

:::

## Payroll Entry

A tool that helps in creation of multiple Salary Slips for Employees.

:::note

Human Resource > Payroll Entry

:::

## Salary Slip

A record of the monthly salary given to an Employee.

:::note

Human Resource > Salary Slip

:::

## Salary Structure

A template identifying all the components of an Employees' salary (earnings), tax and other social security deductions.

:::note

Human Resource > Salary and Payroll > Salary Structure

:::

## Appraisal

A record of the performance of an Employee over a specified period based on certain parameters.

:::note

Human Resources > Appraisal

:::

## Appraisal Template

A template recording the different parameters of an Employees' performance and their weightage for a particular role.

:::note

Human Resources > Employee Setup > Appraisal Template

:::

## Attendance

A record indicating presence or absence of an Employee on a particular day.

:::note

Human Resources > Attendance

:::

## Manufacturing

## Bill of Materials (BOM)

A list of Operations and Items with their quantities, that are required to produce another Item. A Bill of Materials (BOM) is used to plan purchases and do product costing.

:::note

Manufacturing > BOM

:::

## Workstation

A place where a BOM operation takes place. It is useful to calculate the direct cost of the product.

:::note

Manufacturing > Workstation

:::

## Work Order

A document signaling production (manufacture) of a particular Item with specified quantities.

:::note

Manufacturing > Work Order

:::

## Production Planning Tool

A tool for automatic creation of Work Orders and Purchase Requests based on Open Sales Orders in a given period.

:::note

Manufacturing > Production Planning Tool

:::

## Website

## Blog Post

A short article that appears in the “Blog” section of the website generated from the CERP website module. Blog is a short form of “Web Log”.

:::note

Website > Blog Post

:::

## Web Page

A web page with a unique URL (web address) on the website generated from CERP.

:::note

Website > Web Page

:::

## Setup / Customization

## Custom Field

A user defined field on a form / table.

:::note

Setup > Customize CERP > Custom Field

:::

## Global Defaults

This is the section where you set default values for various parameters of the system.

:::note

Setup > Data > Global Defaults

:::

## Print Heading

A title that can be set on a transaction just for printing. For example, you want to print a Quotation with a title “Proposal” or “Pro forma Invoice”.

:::note

Setup > Branding and Printing > Print Headings

:::

## Terms and Conditions

Text of your terms of contract. In Sales/Purchase transactions there might be certain Terms and Conditions based on which the Supplier provides goods or services to the Customer. You can apply the Terms and Conditions to transactions and they will appear when printing the document. To know about Terms and Conditions, click here

:::note

Selling > Setup > Terms and Conditions

:::

## Unit of Measure (UOM)

How quantity is measured for an Item. E.g., Kg, No., Pair, Packet, etc.

:::note

Stock > Setup > UOM

:::
