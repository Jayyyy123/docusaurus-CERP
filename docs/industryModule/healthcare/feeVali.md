---
id: feeVali
title: Fee Validity
sidebar_label: Fee Validity
---

**Many healthcare facilities do not charge for follow up consultations within a time period after the first visit. You can configure the number of free follow-ups allowed as well as the time period for free consultations in Healthcare Settings. This will create a Fee Validity document.**

## 1. How to Enable Free Follow Up:

To enable free follow-ups go to:
:::note
Home > Healthcare > Settings > Healthcare Settings
:::

1. Check "Enable Free Follow Ups".
1. Enter the "Number of Patient Encounters in Valid Days".
1. Enter "Valid number of days"
1. For example, as shown below, a patient can have 3 free follow-ups within 30 days:

![image](images/image.jpg)

1. After this is configured, as soon as you create an Appointment for a new patient, a Fee Validity document will be created.

![image](images/image.jpg)

This Fee Validity document will be updated with every appointment:

- Status: Status is set as Pending till the number of free appointments is completed and the appointment dates are within the "Valid Till" deadline. Once all free appointments have been created the status is updated to Completed
- Max number of visits: The maximum number of free visits allowed.
- Visited: The number of free visits completed.
- Start Date: The first free appointment's date.
- Valid Till: The last date of Fee Validity. This is calculated as Start Date + Valid Number of Days (from Healthcare Settings).
- Reference Appointments: Links to all the appointments covered under the Fee Validity document.

![image](images/image.jpg)
:::note
This Form has been Changed in Version 13
:::

## 2. Related Topics

1. Patient Appointment
1. Patient
1. Healthcare Settings
