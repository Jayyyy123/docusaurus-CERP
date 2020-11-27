---
id: inpaMedOrder
title: Inpatient Medication Order
sidebar_label: Inpatient Medication Order
---

An Inpatient Medication Order (IPMO) is created to make the nursing process easier. When patients are admitted to the hospital, there are medications that need to be provided to them according to the prescribed schedule. An Inpatient Medication Order is created to prescribe the medications to the admitted patient with the service unit information, the drug, dosage, dosage form, and the date and time when the drug has to be consumed.

To access the Inpatient Medication Order list, go to:

:::note
Home > Healthcare > Inpatient > Inpatient Medication Order
:::

## 1. Prerequisites

Before creating an Inpatient Medication Order, you need to create the following records first:

- Patient
- Inpatient Record

## 2. How to Create an Inpatient Medication Order

You can create an Inpatient Medication Order in two ways.

### 2.1 Manual creation

1. Go to Inpatient Medication Order list view and click on New.
1. Select the Patient. The patient list is filtered to only have inpatients as options here.
1. Optionally select the Healthcare Practitioner.
1. Set the Start Date for the order. The schedule for the prescribed drugs will be created starting from this date.
1. In the Medication Orders table, there is an Add Medication Orders button. Click on the button. A dialog box will be shown to fill up the prescription details.
1. Select the drug (item), dosage, period, and dosage form. Then click on Add.
1. Detailed schedule entries for the order beginning from the Start Date are added to the table. Close the dialog.
1. Save and Submit. The End Date will be set automatically based on the prescription duration.
   You can see the Total Orders and Completed Orders in the Other Details section.
   ~~IPMO-PE~~

### 2.2 IPMO from Patient Encounter

After creating a Patient Encounter for an inpatient, with drugs prescribed in the Drug Prescription table, you can see an option for creating Inpatient Medication Order under Create > Inpatient Medication Order.
You can use this button to create the IPMO. IPMO with an expanded view of the schedule will be created. Save and Submit.
~~IPMO-PE~~

### 2.3 Statuses

The statuses for IPMO are governed by the total completed order entries. The order entries are marked as completed when an Inpatient Medication Entry is created against that order entry.

- Draft: A draft is saved but yet to be submitted to the system.
- Pending: No order entry in the Medication Orders table has been completed.
- In Progress: Some order entries in the Medication Orders table have been completed.
- Completed: All order entries in the Medication Orders table have been completed.
- Cancelled: The Inpatient Medication Order has been cancelled.
  ~~IPMO-PE~~

## 3. Related Topics

1. Inpatient Medication Entry
1. Patient Encounter
