---
id: healthPrac
title: Healthcare Practitioner
sidebar_label: Healthcare Practitioner
---

Healthcare Practitioners are the doctors, nurses, ward boys, lab technicians, etc. who are serving the hospital unit in one way or another. CERP Healthcare allows you to create multiple practitioners and link to a User with appropriate Roles. You can also link a Healthcare Practitioner to an Employee to track Payroll, Attendance or other Human Resource Management activities.

![image](images/image.jpg)
To create a Practitioner, go to,
:::note
Home > Healthcare > Masters > Healthcare Practitioner
:::

## 1. How to Create a Healthcare Practitioner

1. Go to the Healthcare Practitioner list and click on New.
1. Select the Naming Series.
1. Enter basic details like First Name, Last Name, Gender, Mobile number.
1. Optionally, select a Medical Department.
1. Save.
   ![image](images/image.jpg)
## 2. Features

### 2.1 Track Payroll, Attendance, Roles and Permissions

In order to track all Human Resource Management activities for the Practitioner, you need to create and select the Employee in the "Employee" field in practitioner. This will help run Payroll and also track availability and attendance for booking appointments by setting appropriate Holiday List and Practitioner Schedule. You can then create an CERP User linked to the Employee document. This will help track permissions for the Practitioner.

![image](images/image.jpg)
:::note
Note: Selecting the Employee field will fetch in all relevant fields as configured in the Employee document to help you easily set up the Practitioner
:::

If the Healthcare Practitioners are not employees in your Healthcare Units you can link User to the Practitioner and assign them the required roles.

### 2.2 Practitioner Availability

You can select multiple Practitioner Schedule for each practitioner and optionally set a service unit at which the practitioner will be available.

![image](images/image.jpg)
### 2.3 Healthcare Practitioner Charges

You can select or create the service items for consulting charges and set them in "Out-Patient Consulting Charge Item" and "In-Patient Consulting Charge Item". These will be fetched in Sales Invoices. You can set the consultation charges which are applicable to the practitioner. If required, you can also select an Income Account for a Physician to book all Consultation charges into separate accounts.

![image](images/image.jpg)
:::note
Note: Make sure that the Items you create for services have "Maintain Stock" and "Include Items in Manufacturing" unchecked since they are service items.
:::

### 2.4 Referring Physicians

You may also want to manage a list of Doctors who refers Patients to your facility. You can manage such data in the Healthcare Practitioner document itself by leaving out the Employee and User links.

### 2.5 Link Multiple Addresses and Contacts

Suppose the Practitioner works at various hospitals, you can link multiple contacts and addresses for that Practitioner.

:::note
This Form has been Changed in Version 13
:::

## 3. Related Topics

1. Users and Permissions
1. Employee
1. Practitioner Schedule
