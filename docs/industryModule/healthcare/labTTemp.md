---
id: labTTemp
title: Lab Test Template
sidebar_label: Lab Test Template
---

**Lab Test Template in CERP allows you to create all types of Lab Tests rapidly.**

You can pre-configure the events and result components for Single, Compound, Descriptive, or Grouped tests, so that, you don't have to fill in redundant data every single time.

## 1. How to create a Lab Test Template

To create a Lab Test Template, go to:
:::note
Home > Healthcare > Laboratory > Lab Test Template > New Lab Test Template
:::
The following are the common fields in the Template of every result format.

- Test Name: Specify the name of the Lab Test.
- Item Code: For managing the billing workflow of lab tests, items are created automatically on template creation. Provide the Item Code for the test in this field.
- Item Group: You can group the lab tests based on different criteria using this field. Create an Item Group or choose from the existing ones.
- Department: Medical department for which this lab test is conducted.
- Result Format: Specify the result format for the lab test:
- Single: In this type of lab test only one result value is interpreted.
- Compound: In compound lab tests, the sample is tested for multiple events.
- Descriptive: These types of tests are used for testing multiple result components and you can also configure checking the sensitivity of the sample for various antibiotics here.
- Grouped: These are a group of other test templates.
- No Result: These are the tests that have no result values.
- Description: You can provide a detailed description of the test here.
- Is Billable: Check this if the test is billable.
- Rate: If Is Billable is checked, then you have to specify the rate for the lab test in this field. In this case, Item Price will be configured automatically upon saving the template.

### 1.1 Single Result Format

In this result format, only one result value is interpreted. After filling up the details specified in the first step, the UOM, Secondary UOM, and Normal Range need to be set. For example, the Haemoglobin test is often used to check for anemia, usually along with a hematocrit or as part of a complete blood count (CBC).

![image](images/image.jpg)

### 1.2 Compound Result Format

In this result format, the sample is tested for multiple events. These events need to be configured in the "Compound" table. You can set the Events and specify the UOM, Secondary UOM, Conversion Factor, and Normal Range for each event. If at all some event's result need not be specified in the Lab Test, you can check "Allow Blank" for that event. If this is not checked, the system will not let you submit the Lab Test unless all the result values are set.

![image](images/image.jpg)

### 1.3 Descriptive Result Format

These types of tests are used for testing multiple result components. You can also configure testing the sensitivity of the sample for various antibiotics by enabling the "Sensitivity" option in the template. You can use the "Allow Blank" option to allow keeping result entries blank for certain components.

Descriptive Result Format

### 1.4 Grouped Result Format

A grouped result format is used to create a Lab Test result as a group of other tests or events eg: Complete Haemogram. The Complete haemogram test is a group of tests performed on a sample of blood. Haemogram serves as a broad screening panel that checks for the presence of any diseases and infections in the body. Haemogram tests mainly the three components of blood:

The hemoglobin test is often used to check for anemia, usually along with a hematocrit or as part of a complete blood count (CBC).
A DLC blood test is one that measures the percentage of every single type of WBCs in the body.
TLC is a test that determines the number of WBCs in our bodies.
Neutrophils (Event)
You can configure the UOM, Secondary UOM and, Normal Range in case of events. On selecting other tests in the table, the system automatically fetches the description and rate of those single/compound tests

![image](images/image.jpg)

## 2. Features

### 2.1 Automatic Item Creation for Templates

Templates allow you to manage the billable item, rate, etc. for a particular lab test. The system automatically creates an Item linked to the template when it is saved. If the template is billable, then item price is also created for it.

![image](images/image.jpg)

You can change the Item Code linked to the Lab Template if needed, using the Change Template Code button.

### 2.2 Disable Templates

You can disable the templates when they are not being used by checking the "Disabled" checkbox. The linked item is also disabled on disabling a Lab Test Template.

### 2.3 Medical Coding

You can also configure the Medical Code Standard and Medical Code for your templates in the Medical Coding section.

![image](images/image.jpg)

### 2.4 Configure Sample Collection

You can configure the Sample that has to be collected while creating the Lab Test. Select the Lab Test Sample, set the UOM and quantity required.

![image](images/image.jpg)

### 2.5 Worksheet Print

You can configure the instructions for Lab Technicians here. These instructions will be visible in the "Lab Test Print" format for Lab Test doctype only when it is not submitted.

![image](images/image.jpg)

### 2.6 Result Legend Print

This Form has been Changed in Version 13

You can configure the sample that has to be collected while creating the Lab Test. Select the Lab Test Sample, set the UOM and quantity required. Select the position where you want to print this legend and configure the legend in the "Result Legend" field.

![image](images/image.jpg)

Lab Test Print format:

![image](images/image.jpg)

## 3. Related Topics

1. Lab Test
1. Sample Collection
