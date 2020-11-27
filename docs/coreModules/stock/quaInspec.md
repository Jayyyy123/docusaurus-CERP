---
id: quaInspec
title: Quality Inspection
sidebar_label: Quality Inspection
---

In CERP, you can mark your incoming or outgoing products for Quality Inspection.

To access this feature go to:

:::note
Home > Stock > Tools > Quality Inspection
:::

## 1. Prerequisites 
Before creating and using a Quality Inspection, it is advised that you do the following first:

Create an Item.
Enable Quality Inspection Criteria in the Item master. On enabling either checkboxes, submission of a stock delivery/receipt document will be allowed only after a Quality Inspection is done against it: Enable Quality Inspection
(Optional) Create a Quality Inspection Template. You can add inspection parameters and acceptance criteria in the template, which can be easily fetched into any Quality Inspection. After saving the template, you can set this template in the Item Master (as shown above). Quality Inspection Template
## 2. How to create a new Quality Inspection 
From a Draft Purchase Receipt/Delivery Note, go to the Item table's Quality Inspection field and click on Create a New Quality Inspection. You can also create a Quality Inspection for Job Card in order to monitor the quality of in-process items. In this case, you can create a Quality Inspection for the Production Item in Job Card.
Select the inspection type whether Incoming (Purchase), Outgoing (Sales), or In Process (Manufacturing).
Select the Reference Document Type whether Purchase Receipt, Purchase Invoice, Delivery Note, Sales Invoice, Stock Entry, or Job Card.
Select the Item and set the sample size which will be inspected. Note that only Items having Inspection Criteria enabled in the Item master, will be fetched.
The Quality Inspection Template set in the Item master will be fetched.
You can change who it's inspected by and also add who it's verified by.
Any additional Remarks about the Inspection can be added.
Save. Set the Status. Submit.
Quality Inspection

## 3. Features 
### 3.1 Formula Based Quality Checks 
The acceptance of a parameter/check, in a Quality Inspection, can depend on a certain formula in many cases. The Readings table has a field called Acceptance Criteria Formula where you can specify a formula that determines whether a certain check is Accepted or Rejected.

Acceptance Criteria Formula

This formula depends on the many Reading fields in the Readings table. It can be set manually or via a template.

After setting it, update the readings and Save. The Status field in the Readings table rows is set automatically based on the formula for acceptance.

Acceptance Criteria Formula

The status for the entire Quality Inspection can then be decided by the user.

## 4. Video 

## 5. Related Topics 
1. Purchase Receipt
1. Delivery Note
1. Stock Entry
1. Sales Invoice
1. Purchase Invoice
1. Job Card