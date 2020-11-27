---
id: labT
title: Lab Test
sidebar_label: Lab Test
---

**Lab Test allows recording multiple laboratory test details including organism, sensitivity, etc.**

CERP Healthcare allows you to manage a clinical laboratory efficiently by allowing you to enter lab tests and print or email test results, manage samples collected, create invoices, etc. You can configure Lab Test Templates for each Test and its result format or create new ones as explained in Setting Up Laboratory

Once you have all the necessary Lab Test Templates configured, you can start creating Lab Tests by selecting a Test Template every time you create a Test.

## 1. How to create a Lab Test

To create a Lab Test, go to:
:::note
Home > Healthcare > Laboratory > Lab Test > New Lab Test
:::
Set the Naming Series.
Select the Lab Test Template. Medical Department will automatically be fetched from the template.
Select the Patient. The patient details will be auto-fetched.
You can optionally select the Requesting Practitioner and the Lab Technician.
Save.
After saving all the data configured in the template will be fetched and set in the lab test document.
You can change the pre-configured data according to your requirements. Add comments if any, in the Comments section.

~~Lab Test~~

As the results get ready, you can enter the details of the results in the Lab Test document. All presets, Normal Values etc. as configured in the Lab Test Template are made available Lab Test for easy data capture.

For example, Grouped Test: Lab Result

~~Descriptive Test: Lab Result~~

Components for which Allow Blank is not checked, will throw a validation if left blank on submit.

## 1. Features

### 2.1 Create multiple Lab Tests

It is also possible to use the "Create Multiple" option from the Lab Test list view to create all the lab tests ordered or billed for a patient. You can create multiple lab tests from a previously created Sales Invoice or Patient Encounter.

~~Lab Test Multiple~~

You can select the Patient and then the Encounter or Invoice from which you need to pull the tests without having to open the Encounter/Sales Invoice to look up the orders.

~~Lab Test~~

The tests prescribed in the Investigations section of that Patient Encounter would be pulled.

~~Lab Test~~

~~Lab Test~~

In the case of Sales Invoice, the items (Lab Test Template items) billed in the invoice will be pulled to create Lab Tests.

### 2.2 Automatic Sample Collection document creation

If the Lab Test Template has sample collection configured, then on creating the Lab Test, sample collection document(s) will be created automatically. To create Sample Collection documents for every Lab Test, enable Create Sample Collection document for Lab Test option in Healthcare Settings and configure samples in the Lab Test Template.

Lab Sample Collection

### 2.3 Automatic Lab Test creation on Sales Invoice submission

CERP Healthcare also allows creation of Lab Tests automatically when any lab tests are billed (via Sales Invoice). To configure this enable Create Lab Test(s) on Sales Invoice Submission option in Healthcare Settings.

### 2.4 Organism Test Results

Organisms are an optional entry for descriptive lab tests. You can select the organism, set the colony population and select the colony UOM.

### 2.5 Sensitivity Results

In the case of Descriptive lab tests, if Sensitivity option is enabled in the template you can enter the sensitivity results of the sample against various antibiotics in the Sensitivity child table. The Sensitivity and Antibiotic masters are pre-configured in CERP. You can extend or modify them as per your needs.

Sensitivity

### 2.6 Format Test Result

CERP also allows you to format test result for each test/event in your result.

~~Format Test Result~~

~~Formatted Result~~

### 2.7 Laboratory SMS Alerts

You can configure the messages for sending SMS alerts to patients whenever the lab test results are ready in the Healthcare Settings. For this, you must setup SMS Settings first.

## 3. Related Topics

1. Lab Test
1. Sample Collection
