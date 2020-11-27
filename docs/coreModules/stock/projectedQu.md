---
id: projectedQu
title: Projected Quantity
sidebar_label: Projected Quantity
---

Projected Quantity is the level of stock that is predicted for a particular Item based on the current stock levels and other requirements.

It is the quantity of gross inventory that includes supply and demand in the past which is done as part of the planning process.

The projected inventory is used by the planning system to monitor the reorder point and to determine the reorder quantity. The projected Quantity is used by the planning engine to monitor the safety stock levels. These levels are maintained to serve unexpected demands.

Having tight control of the projected inventory is crucial to determine shortages and to calculate the right order quantity.

Projected Quantity

The formula to calculate projected quantity is as follows:

Projected Qty = Actual Qty + Planned Qty + Requested Qty + Ordered Qty - Reserved Qty - Reserved Qty for Production - Reserved Qty for Subcontracting

Actual Qty: Quantity available in the Warehouse. This is the actual physical stock you have.
Planned Qty: Quantity, for which, Work Order has been raised, but is pending to be manufactured.
Requested Qty: Quantity requested via a Material Request. It is added on submission of Material Request and subtracted when Purchase Order/Work Order/Stock Entry is created against it based on the Material Request type.
Ordered Qty: Quantity ordered for purchase (Purchase Order), but not received (via a Purchase Receipt or a Purchase Invoice.
Reserved Qty: Quantity ordered for sale by your Customer (Sales Order), but not delivered (via a Delivery Note). This quantity increases when a Sales Order is submitted and decreases when a Delivery Note or Sales Invoice is created against that Sales Order is submitted.
Reserved Qty for Production: Raw materials are reserved on submission of Work Order and is reduced when raw materials are transfered to Work in Progress warehouse via a Stock Entry.
Reserved Qty for Subcontracting: Raw materials reserved when a subcontracting Purchase Order is submitted. When raw materials are transfered to Supplier Warehouse via a Stock Entry, this quantity reduces. To know more about subcontracting click here.
Related Topics 
Warehouse
Material Request