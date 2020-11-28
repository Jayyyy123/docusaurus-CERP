---
id: clinPro
title: Clinical Procedure
sidebar_label: Clinical Procedure
---

**CERP helps you create and map Clinical Procedures for patients like Wound Cleaning or a Cataract Surgery. The system allows you to preconfigure Clinical Procedure Templates, so that you do not have to set the default properties like the consumables, rates, items every time you conduct a Clinical Procedure.**

## 1. How to Create a Clinical Procedure

To create a Clinical Procedure go to:
:::note
Home > Healthcare > Consultation > Clinical Procedure
:::

### 1.1 Create a Clinical Procedure Manually

1. Select a Naming Series for the procedure.
1. Select a Procedure Template. The Warehouse, Medical Department and Consumables will be fetched automatically.
1. If you have created an appointment for the Clinical Procedure, you can select the Appointment. It will fetch the Procedure Template, Patient, Start Date and Time, etc. automatically.
1. Select a Service Unit if it is not set and the Procedure will be conducted in that unit.
1. Enter or edit details of consumables in the Consumables section.
1. If some Sample will be collected during or after the Clinical Procedure, create a Sample Collection document and link it.
1. Save.
1. Submit.

![image](images/image.jpg)

### 1.2 Create a Clinical Procedure from an Appointment

You can lookup and book Patient Appointment from the procedures that have been ordered for a patient in the previous Patient Encounter by using the Get Prescribed Procedures button available in Patient Appointment.

![image](images/image.jpg)

![image](images/image.jpg)

After the Appointment is booked, the performing practitioner can easily create a new procedure from a booked appointment using the Create > Clinical Procedure button.

## 2. Features

### 2.1 Procedure Actions

#### 2.1.1 Start Procedure

The Practitioner can update the procedure status to In Progress by clicking the Start button.

If the procedure has consumables, for the procedure to start, an adequate quantity of all consumables must be present in the Healthcare Service Unit's Warehouse. If this fails, the system will ask you to confirm Stock Transfer. After you confirm, a Stock Entry with Entry Type "Material Transfer" will be created and displayed. Validate the Stock Entry auto-created document, Save and Submit. Then you can start the Procedure.

![image](images/image.jpg)

#### 2.1.2 Complete Procedure

When the procedure is completed, the practitioner can update the Consumables table with the actual values of the stock quantity that are used. The Complete and Consume button will record consumption by booking a stock entry and update the status of the Clinical Procedure to Completed. If the Procedure does not have any stock items in the Consumables table, the Complete button will be displayed.

![image](images/image.jpg)

### 2.2 Billing

You can create Invoices for procedures performed on a patient by going to
:::note
Home > Selling > Sales > Sales Invoice > Get Items From > Healthcare Services.
:::
This way the billing user need not access the Healthcare module documents and the un-billed services for a Patient will be listed which the user can choose from.

If the Invoice Consumables Separately option is turned on, the charges for the consumable Items will be added to the Sales Invoice separately.

:::note
This Form has been Changed in Version 13
:::

## 3. Related Topics

1. Clinical Procedure Template
1. Sample Collection
