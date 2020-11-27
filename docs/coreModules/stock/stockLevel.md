---
id: stockLevel
title: Stock Level Report
sidebar_label: Stock Level Report
---


Stock Level report list stock item's quantity available in a particular warehouse.

There are multiple reports available you can check for item's stock level.

Stock Projected Quantity Report 
You can access this report from Stock > Main Report > Stock Projected Quantity

This report list item wise - warehouse wise stock level of an item considering all the stock transactions. With Actual Quantity of an item, it also provide other details like:

Actual Qty: Quantity available in the warehouse.
Planned Qty: Quantity, for which, Work Order has been raised, but is pending to be manufactured.
Requested Qty: Quantity requested for purchase, but not ordered.
Ordered Qty: Quantity ordered for purchase, but not received.
Reserved Qty: Quantity ordered for sale, but not delivered.
Project Qty: Project Quantity is calculated as
Projected Qty = Actual Qty + Planned Qty + Requested Qty + Ordered Qty - Reserved Qty
The projected inventory is used by the planning system to monitor the reorder point and to determine the reorder quantity. The projected Quantity is used by the planning engine to monitor the safety stock levels. These levels are maintained to serve unexpected demands.

Having a tight control of the projected inventory is crucial to determine shortages and to calculate the right order quantity.


