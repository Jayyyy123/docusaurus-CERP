---
id: billMate
title: Bill Of Materials
sidebar_label: Bill Of Materials
---

**A Bill of Materials is a list of items and sub-assemblies with quantities required to manufacture an Item.**

A BOM may also contain the manufacturing operations required to manufacture the Item.

A Bill of Materials (BOM) is at the heart of the Manufacturing system and the most important document that will help to create other document types like Work Orders and Job Cards. CERP supports multi-level BOM. To know more, visit this page.

The BOM is a list of all materials (either bought or made) and operations that go into manufacturing a finished product or sub-assembly. In CERP, each item (sub-assembly) could have its own BOM hence forming a tree of Items with multiple levels.

~~Work Order~~

To make accurate Purchase Requests, you must always maintain correct BOMs.

To access the BOM list, go to:
:::note
Home > Manufacturing > Bill of Materials > Bill of Materials
:::
Note that once a BOM is submitted, it cannot be edited. You can only cancel the existing, duplicate it and submit another one. A BOM is also linked to multiple places in the Manufacturing module, so making changes to it can be time-consuming and tedious. Hence it is a good practice to carefully think and fill out the BOMs before submitting.

## 1. Prerequisites

Before creating and using a BOM, it is advised that you create the following first:

- Item
- Operation
- Workstation
- Routing

## 2. How to create a Bill of Materials

1. Go to the Bill of Materials list, click on New.
1. Select the Item to be manufactured. The Item name, UoM, company, and currency will be fetched automatically.
1. Enter the quantity of the Item that will be manufactured from this Bill of Materials.
   Under the Items table, select the raw materials (Items) required to manufacture the Item. Then proceed to:

1. Select the quantity of Raw Material used.
1. Set an Item operation here to be fetched in Work Orders later.
1. If this Item is a sub-assembly, the default BOM for it will be fetched.
1. Select the Source Warehouse to track inventory.
1. Enter the scrap percentage that will remain after this raw material is used. BOM Materials
1. Under the Scrap section, select the scrap Item that will be created when manufacturing and its quantity. The scrap Item can also have a Rate if it is a by-product and not waste. 1. Skip this section if 100% of raw materials are completely utilized. BOM Scrap

1. Save and Submit.

In the Items table, you'll see an option 'Include Item in Manufacturing'. Raw Materials need to have this checkbox ticked. In case there are Operations or services you need to include in the BOM that are not necessarily an Item used for manufacturing, uncheck this checkbox. For example, treating the plastic with a chemical involves some cost but it is not an Item and the cost needs to be tracked.

~~Task~~

### 2.1 Bill of Materials with Operations

To add Operations tick the 'With Operations' checkbox. Now, an Operations table can be seen. This option is useful for tracking the costing of various Operations performed to manufacture the Item. Operations can be added easily by setting a template with the Routing master.

~~Task~~

In the “Operations” table, add the operations that need to be performed to manufacture this particular Item.
For each operation, you will be asked to enter a Workstation where the Operation will be performed. A default Workstation can be set from the Operation document.
Enter the Operating Hourly Rate, Operation Time in minutes, and the Batch Size created with the Operation. The Operating Cost will be calculated based on these values.
Note: Workstations are defined only for product costing and Work Order Operations scheduling purposes not tracking inventory. Inventory is tracked in Warehouses set in the Items table of the BOM.

Transfer Material Against needs to be set for a BOM With Operations. Materials can be transferred against a Work Order in bulk or individual Job Cards. Changing this affects whether the 'Material Transfer for Manufacture' is done against the Work Order at once or multiple times against the individual Job Cards. Setting this option depends on factors like time taken to manufacture the item, value of the items manufactured, number of parts used in manufacturing, the skill of your labor involved, etc.

~~BOM transfer materials against~~

### 2.2 Additional options when creating a Bill of Materials

- Is Active: An Item could also be manufactured using an alternate set of materials/operations. In that case, uncheck this checkbox to disable this BOM and use another one.
- Is Default: This BOM will be selected by default in Work Orders etc. when the Item selected.
- Inspection Required: This will make 'Quality Inspection' mandatory for raw materials and the finished goods. Select the Quality Inspection Template after ticking this checkbox.
- Allow Alternative Item: Sometimes when manufacturing a finished good, specific materials may not be available. If you tick this, you can create and select an alternative item from the Item Alternative list. For example, using plastic beads instead of plastic crystals. For more details visit this page.
- Allow Same Item Multiple Times: In some manufacturing cases, the same item needs to be added twice. For example, two metal pipes of length 0.5m each to form another shape. Here the quantity cannot be simply set to 2 and be done since the UoM will show 1m as total but we need 0.5m + 0.5m in the form of two pipes for production. Ticking this checkbox allows you to select the same item multiple times.
  Set rate of sub-assembly item based on BOM: Enabling this checkbox will set the rate of sub-assembly items based on their BOMs. If unchecked, the rate will be fetched from the Valuation Rate of the sub-assembly Item.

Rate Of Materials Based On: The Rate of raw materials used can be calculated based on different parameters.

- Valuation Rate: The Valuation Rate set in the Item master.
- Last Purchase Rate: The Rate is fetched from the last Sales Order/Invoice.
- Price List: The Rate will be fetched from the Item Price. For more details, visit this page.

## 3. Features

### 3.1 BOM Costing

The Costing section in a BOM gives an approximate cost of manufacturing the Item.

The costing is calculated from the Valuation Rate of the raw materials/sub-assemblies involved and the Operation costs.

~~Costing~~

In case the BOM was submitted when the costs for Items/Operations were not updated, you can update the costs using the Update Cost button. This will fetch the latest price/costs.

~~Update Cost~~

The BOM cost can also be set to be updated automatically via Manufacturing Settings, 'Update BOM Cost Automatically' option.

### 3.2 Materials Required (Exploded)

This table lists down all the raw materials required to manufacture an Item. It also fetches raw materials for the sub-assemblies along with the quantities. The non-exploded table will not list the raw materials required for producing the sub-assemblies.

For example, to manufacture a plastic shaving brush you need some raw materials and the bristles as a sub-assembly. For the handle, you manufacture your own plastic, but for the bristles, you use raw plastic crystals.

~~Exploded Section~~

### 3.3 Project and Website

The BOM can be linked to a Project to track progress, Project costing, etc. In case of engineer to order, every order could be a Project and the sub-assemblies would be Tasks. The completion can be tracked by linking to a Project in that case.

The BOM can also be shown in the Website for Open-source hardware products. Open-source hardware is similar to open-source where the product specifications are listed publicly.

### 3.4 BOM Template

~~BOM Template~~

With BOM template you can create BOMs for template items (against which you create variant items). These BOMs can be used as the default BOM while making Work Orders against the template Item's variants. You can also add the template items as raw materials in the template BOM. While making Work Order from the BOM Template, CERP gives provision to select the Item Variant against the template Item, for more details check following screenshot.

~~Variant Selection~~

The user can also make the BOM for the variant item using the template BOM. To make the variant BOM: 1. Go to the BOM Template. 2. Click on Create button. 3. Click on Variant BOM. 4. Select the Variant Item for which you want to make the BOM. 5. If the raw materials in the BOM is a template Item, then system gives provision to select the Item Variant.

~~Variant BOM~~

### 3.5 After Submitting

Once the BOM is submitted, the following document types can be created against the BOM from the Dashboard:

~~BOM submit~~

## 4. Video

## 5. Related Topics

1. Scrap Management
1. Material Consumption
1. Nested BOM Structure
