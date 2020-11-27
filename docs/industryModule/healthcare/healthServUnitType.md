---
id: healthServUnitType
title: Healthcare Service Unit Type
sidebar_label: Healthcare Service Unit Type
---

You can define the standard properties of Healthcare Service Unit using the Healthcare Service Unit Type. By configuring various types of service units in your facility with respective rates and other properties, you can easily create multiple Healthcare Service Units by merely selecting the type. Healthcare Service Unit Type is a generic type. For example, "Operation Theatre" can be a Healthcare Service Unit Type and Neurology-OT, Procedure-Room-1, etc. could be Healthcare Service Units.

## 1. How to Create a Healthcare Service Unit Type

To create a Healthcare Service Unit Type, go to:

:::note
Home > Healthcare > Masters > Healthcare Service Unit Type
:::

Service Unit Type: Enter a unique name for the Service Unit Type.
Now there are two options:

- Allow Appointments: Check this if the unit type is for Out Patient facility.
- Inpatient Occupancy: Check this if the unit type is for Inpatient facility.

But "Consulting Rooms" can only allow Appointments and
The following option shows up if you check "Allow Appointments":

- Allow Overlap: Check this if the unit type can be used by more than one patient or for more than one appointment at once.
  For example, Physical Activity Centres will allow Appointments with overlap:

~~CERP Healthcare~~

However, Consultation rooms will only allow Appointments without overlap:

~~CERP Healthcare~~

The following option shows up if you check "Inpatient Occupancy":

- Is Billable: Check this if the unit type for IPD is billable like Hospital Beds.
  For example, Operation Theatres will have Inpatient Occupancy which will be billed. If you check "Inpatient Occupancy" and "Is Billable" the system asks for Item Details to create an item for the Service Unit Type which will be used for billing:

~~CERP Healthcare~~

The item is automatically created and linked to the document on save.

If the Healthcare Service Unit Type is not being used, you can disable it. Disabling will not allow selecting the item created for it while billing.

If you want to change the Item Code of the item created for the billable Healthcare Service Unit Type, click on Change Item Code button.

~~CERP Healthcare~~

:::note
This Form has been Changed in Version 13
:::

## 2. Related Topics

1. Healthcare Service Unit
