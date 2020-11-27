---
id: productPlan
title: Production Plan
sidebar_label: Production Plan
---

**A Production Plan helps in production and material planning for the Items planned for manufacturing. These production items can be committed via Sales Order (to Customers) or Material Requests (internally).**

Production Plan helps the user to plan production against multiple Sales Orders or the Material Requests. Also, it helps in Material Procurement planning for the raw material item, based on the quantity of finished products to be manufactured.

To access the Production Plan list, go to:
:::note
Home > Manufacturing > Production > Production Plan
:::

## 1. Prerequisites

Before creating and using a Production Plan, it is advised that you create the following first:

- Item
- Material Request
- Sales Order
- Bill Of Materials
- Routing

## 2. How to Create a Production Plan

As mentioned earlier, a Production Plan can be used for planning the manufacture of Items against Sales Orders or Material Requests.

The common steps are:

1. Go to the Production Plan list, click on New.
1. Select whether to get items from a Sales Order or a Material Request.
1. A Production Plan can also be created manually where you can select the Items to manufacture.

### 2.1 Production Against Sales Orders

Select option as Sales Order from the 'Get Items From' drop-down list. The system will show the filters, using that you can pull the Sales Orders for the production. You don't need to use all these filters if you have only a few Sales Orders in a particular time frame.

~~Production Plan fetch items~~

Click on Get Sales Orders to fetch sales orders based on the above filters.

~~Sales Order Filters~~

Click on 'Get Items for Work Order' to fetch the items from the above Sales Orders. Items only for which a BOM is present will be fetched. Get items for Production Plan

On expanding a row in the Items to Manufacture table, you'll see an option to 'Include Exploded Items'. Ticking this includes raw materials of the sub-assembly items in the production process.

### 2.2 Production Against Material Requests

Select option as Material Request from the Get Items From drop-down list. The system will show the filters, using that we can pull the Material Requests for the production.

~~Material Request Filters~~

Click on 'Get Material Request' to fetch material requests based on the above filters.

~~Material Requests~~

Click on Get Items for Work Order to fetch the items from the above material requests.

~~Material Request Item~~

### 2.3 Planning for Material Requests

Clicking on the 'Get Raw Materials for Production' button will fetch the required raw material Items in the Material Request Plan table. For example, to manufacture 200 plastic canes, you need 100 raw plastic Nos but have only 20 in your Warehouse, then clicking this button will add a row with 80 in the Required Quantity column.

~~Material Request Plan~~

Use the following checkboxes to perform certain actions:

- Include Non Stock Items: To include non-stock items in the material request planning. i.e. Items for which 'Maintain Stock' checkbox is unticked. Refer the Item page for more details.
- Include Subcontracted Items: To add subcontracted Item's raw materials if include exploded items is disabled.
- Ignore Existing Projected Quantity: If enabled then the system will create the Material Request even if the user has already ordered or requested the respective items. For example if you need 100 quantity of raw material A and even if you already have 150, enabling this checkbox will add a request for 100 quantity of that raw material.
- For Warehouse: User can set the Warehouse for which they want to create the material request. When creating Stock Entries during the production process, the system will look for raw material stock in this Warehouse.
- Download Materials Required:- When this checkbox is ticked, the User will get the Excel sheet with the raw materials that are needed to complete this Production Plan. User can select the Warehouse to check the available quantity in the respective Warehouse. If the User has kept the 'For Warehouse' field as blank then the system will give the Excel sheet with raw materials and Warehouse-wise available quantity of the respective raw materials. Excel sheet will look similar to:

~~Material Request Plan~~

### 2.4 After Submitting

Once the Production Plan is submitted, the User gets an option to make Work Orders for the production items and Material Requests for the raw materials. Users can also set the Status as Closed in the Production Plan.

~~Make PO or MR~~

#### 2.4.1 Closing a Production Plan

There could be occurrences where a Production Plan is partially complete and is going to be discontinued. This could happen due to reasons such as:

1. One of the items was independently produced outside the Production Plan.
1. A change in plans occurred and pending items will not be produced.
1. In cases like these, Users can set the Production Plan status to Closed, so that no new Work Orders or Material Requests are created against it.

~~Closing a Production Plan~~

The same can be Re-opened.

### 2.5 Making work order for the sub-assembly items

~~Make PO or MR~~

In the above screenshot, the User creates the Nokia Headphone first and then creates the Nokia Charger and then creates final finished goods.

Here, the User wants to make the work order for the Nokia Headphone and Nokia Charger, to do this, the user has to enable the field "Make Work Order for Sub Assembly Items" in the Production Plan against the item Nokia Lumia.

~~Make PO or MR~~

On clicking make Work Order, the system will generate the Work Order for the sub-assembly items and the finished good items:

~~Make PO or MR~~

## 3. Related Topics

Work Order
Job Card
