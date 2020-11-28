---
id: inpaMedEnt
title: Inpatient Medication Entry
sidebar_label: Inpatient Medication Entry
---

**An Inpatient Medication Entry (IPME) is created to process Inpatient Medication Orders in bulk based on some filters and to optionally update stock on dispensing the drugs.**

To access the Inpatient Medication Entry list, go to:
:::note
Home > Healthcare > Inpatient > Inpatient Medication Entry
:::

## 1. Prerequisites

Before creating an Inpatient Medication Entry, you need to create the following records first:

- Patient
- Inpatient Record
- Inpatient Medication Order

## 2. How to Create an Inpatient Medication Entry

1. Go to the Inpatient Medication Entry list and click on New.
1. Select the Company.
1. Set the Posting Date.

There are various filters available to fetch the pending Inpatient Medication Orders:

- Item Code (Drug)
- Assigned To: You can select the user who is assigned for the Inpatient Medication Order completion.
- Patient
- Healthcare Practitioner who has prescribed the drugs.
- Healthcare Service Unit where you want to dispense the drugs. You can use these filters whenever you are dispensing drugs in a particular HSU like an Isolation Ward, etc.
- Date and Time filters
- IPMO-PE

After setting the filters, click on the Get Pending Medication Orders button to fetch the pending orders which fall under the selected filters.

Optionally, check/uncheck Update Stock. If checked, specify the Warehouse from where drugs should be consumed.

![image](images/image.jpg)

### 2.2 On Submission of Inpatient Medication Entry

The corresponding Inpatient Medication Order Entries are marked as completed.

![image](images/image.jpg)

If Update Stock is checked, then stock validations are made and orders are processed to make Stock Entry with references updated against each entry. You can check the references for Inpatient Medication Entry in the Stock Entry, and in Stock Entry Detail table for the Patient and corresponding Entry.

![image](images/image.jpg)

![image](images/image.jpg)

### 2.3 On Cancellation of Inpatient Medication Entry

The corresponding Stock Entry is cancelled and the linked Inpatient Medication Order Entry is marked as incomplete again.

## 3. Related Topics

1. Inpatient Medication Order
