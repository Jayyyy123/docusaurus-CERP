---
id: leaveApp
title: Leave Application
sidebar_label: Leave Application
---

**Leave Application is a formal document created by an Employee to apply for Leaves for a particular time period.**

CERP allows your employees to apply for leaves via Leave Applications and get them approved by the Leave Approvers.

To access Leave Application, go to:
:::note
Home > Human Resources > Leaves > Leave Application
:::

## 1. Prerequisites

Before you create a Leave Application, it is advisable you have the following documents:

- Department
- Leave Period
- Holiday List
- Leave Type
- Leave Policy
- Leave Allocation

## 2. How to create a Leave Application

Go to Leave Application list, click on New.
A table of Allocated Leaves will be shown. Based on the Leaves taken, the available leaves are displayed for each Leave Type.

~~Leave Application~~

Select the Employee Name and Leave Type.

Set the Leave duration using From Date and To Date. Based on the dates selected, the 'Total Leave Days' and the 'Leave Balance Before Application' fields will be displayed.
If the Leave applied is for a half-day, select the 'Half Day' checkbox.
Enter the Reason for Leave.

~~Leave Application~~

Select Leave Approver.

1. Select the Posting Date of the Leave Application.
1. Check the 'Follow via Email' checkbox to send notification of the Leave Application to the Leave Approver.
   You can also link the Salary Slip of the Employee in the Leave Application for the record.

~~Leave Application~~

1. Click on Save. Once the Employee saves the Leave Application, the status of the Leave Application changes to 'Open', and an email is sent to the Leave Approver for approval. The Leave Approval Notification Template can be configured in HR Settings under the Leave Settings section.

Once the Leave Approver receives the email, they can Approve, Reject, or Cancel the Leave Application. Once this is done, the Leave Approver can submit the Leave Application. On submission, the status of the document changes accordingly, and an email is sent to the Employee notifying them the same.
:::note
Note: Leave Application cannot be submitted if the Salary is already processed for the leave period.
:::
The Leave Application process flow is summarized below:

- The employee applies for leave through Leave Application.
- Approver gets notification via email. For this, the "Follow via Email" checkbox should be checked.
- Approver reviews Leave Application.
- Approver approves/rejects/cancels Leave Application
- The employee gets the notification on the status of his/her Leave Application

## 3. Features

### 3.1 Setting Leave Approver

A leave approver is a user who can approve a Leave Application of an Employee. In CERP version 12, Leave Approvers can be set at two levels:

Department Level: Leave Approvers for each department can be configured in the Department master. Multiple Leave Approvers can be set in a Department. The first Leave Approver in the list will be considered as the default Leave Approver.

- Leave Application - Leave Approvers

- When an Employee belonging to a particular department applies for leave, the Leave Approvers set in that Employee's department master will be considered as his Leave Approvers.

- Employee Level: Leave Approvers can also be set Employee-wise in the employee master.

- Leave Application - Leave Approvers

If Leave Approvers are set at both Employee-level and Department-level, the Employee-level Leave Approver will be considered as the default Leave Approver in this case.

:::tip
Tip: If you want all users to create their own Leave Applications, you can set their “Employee ID” as a match rule in the Leave Application Permission settings. Check Setting Up Permissions for more information.
:::
Additional Notes:

Leave Application period must be within a single Leave Allocation period. In case, you are applying for leave across the leave allocation period, you have to create two Leave Application records.
Leave Application period must be in the latest Leave Allocation period.
Employee cannot apply for leave on the dates which are added in the Leave Block List.
To understand how CERP allows you configure leaves for employees, check Leaves.

## 4. Related Topics

1. Leave Type
1. Leave Period
1. Leave Policy
1. Leave Allocation
1. Leave Block List
