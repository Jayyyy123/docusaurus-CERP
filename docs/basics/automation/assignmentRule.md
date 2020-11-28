---
id: assigmentRule
title: Assignment Rule
sidebar_label: Assignment Rule
---

:::note
Introduced in Version 12
:::

**An Assignment Rule lets you set up automatic assignment of documents to Users.**

Assignment Rule will be useful in a scenario wherein you have a support team and incoming support tickets. To assign the support tickets automatically amongst the employees who work on support, an Assignment Rule can be used.

To access Assignment Rule, go to:

:::note
Home > Settings > Assignment Rule
:::

## 1. How to create an Assignment Rule

To set up an automatic assignment:

1. Go to the Assignment Rule list, click on New.
1. Select the Document Type you want to assign automatically (for example Issue).
1. Write the "Description" that will be added to the To Do.
1. Select the condition for the assignment. You can write simple Python expressions for automatic assignment in the Assign Rule, Close Rule and Unassign Rule. You will have access to all the properties of the document and can use operators like >, <, ==, etc and also multiple conditions like and and or.

    Examples:

    - status == "Open"
    - issue_type == "Technical" and priority=="High" and status == "Open"

5. Select the assignment rule (Round Robin or Load Balancing).

    - Round Robin: Assign each document to a User in sequence.
    - Load Balancing: Assign new documents to the User who has the least number of assignments.

    ![image](images/image.jpg)

6. Select the list of Users to whom this Assignment Rule will apply.

    ![image](images/image.jpg)

7. Save.

You can use properties of the document in the Description field that will be part of the assignment. Higher 'Priority' Assignment Rules will be applied first.

Example:

High Priority Issue _File Upload_ not working has been assigned to you.

### 1.1 Multiple Assignment Rules

You can also set up multiple auto assignments for each Document Type, the one with the highest Priority will be applied first:

Here is an example of an Assignment Rule.

Set Document Type, Descriptions and Conditions.

![image](images/image.jpg)

## 2. Related Topics

1. Workflows
1. Workflow Actions
