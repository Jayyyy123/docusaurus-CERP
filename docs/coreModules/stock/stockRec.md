---
id: stockRec
title: Stock Reconciliation
sidebar_label: Stock Reconciliation
---

Stock Reconciliation is the process of counting and evaluating material/products, periodically at the year end.

This is done in order to:

Keep the actual physical stock count and book stock count in sync
Value the stock for preparation of the accounting statements
The Stock Reconciliation feature in CERP is used for:

Posting opening stock
Reconciling book and actual stock
To access the Stock Reconciliation list, go to:

:::note
Home > Stock > Tools > Stock Reconciliation
:::

## 1. How to Create a Stock Reconciliation to Post Opening Stock

Using stock reconciliation you can update the number of specific items in a warehouse as of specific time. You can also add Items in the stock which have Serial Numbers or the Batch Numbers.

1. 1o to the Stock Reconciliation list, click on New.
1. Select the Purpose as 'Opening Stock'. You can edit the posting Date and Time.
1. Select Item Code, Warehouse, Quantity, and Valuation Rate. If there is a Serial / Batch No involved, add it.
1. If you want to auto-generate Serial No / Batch No then keep those fields blank.
1. For auto-generation of Serial No, you need to set "Serial Number Series" in the Item master.
1. For auto-generation of Batch no, you need to enable "Automatically Create New Batch" checkbox in the item master.
1. The Difference Account will be set as 'Temporary Opening'.
1. Save and Submit.

![image](images/image.jpg)

Note: Maintain Stock option should be enabled in Item master for this to work.

## 2. How to Create a Stock Reconciliation to Reconcile Book and Physical Stock Count

Stock Reconciliation is the process of counting and evaluating stock-in-trade, periodically and at year-end in order to value the total stock for preparing accounting statements. In this process, the actual physical stocks are checked and recorded in the system. The actual stocks and the stock in the system should be in agreement and accurate. If they are not, you can use the Stock Reconciliation tool to reconcile stock balance and value with actuals.

To reconcile the stock:

Go to the Stock Reconciliation list, click on New
Select the Purpose as 'Stock Reconciliation'. You can edit the posting Date and Time.
Set Item Code, Warehouse.
The current Quantity and Valuation Rate will be fetched, change the quantity as required.
The expense account in Difference Account will be set to 'Stock Adjustment' by default.
The Cost Center default will be 'Main', change if needed.
Save and Submit.

![image](images/image.jpg)

## 3. Features

### 3.1 Upload Data Through Spreadsheet

If you have a lot of items, you can upload the details via a spreadsheet.

Download Template

Open new Stock Reconciliation and click on Download button to download the template in CSV format.

![image](images/image.jpg)

Enter Data in CSV Template.

The CSV format is case-sensitive. Do not edit the headers which are pre-set in the template. In the Item Code and Warehouse column, enter exact Item Code and Warehouse as created in your CERP account. For quantity, enter the stock level you wish to set for that item, in a specific warehouse.

![image](images/image.jpg)

Upload the CSV file with the data by clicking on 'Upload' button.

![image](images/image.jpg)

Review, Save and Submit.

![image](images/image.jpg)

Check Stock Ledger Report for updated stock balance.

![image](images/image.jpg)

### 3.2 Get Stock Balance and Valuation as of Specific Date and Time

You can import the stock balance and valuation as of specific date and time from a selected Warehouse by clicking on Items button. You can update the Quantity and Valuation Rate as needed.

Stock Reconciliation Items Button

## 4. How Stock Reconciliation Works

Once a stock reconciliation is posted to update the quantity on specific date and time for an item in a warehouse, it will not be modified by subsequent stock transactions even if such transactions have a posting date which is prior to the stock reconciliation date. In other words, backdated entries will not change the stock numbers after a Stock Reconciliation entry is posted.

Examples are as follows.

### 4.1 For non-serialized Items

Consider an item with code 'ABC001' in a 'Mumbai' warehouse. Let's assume that stock as on 10th January is 100 units. Stock Reconciliation is made on 12th January to set stock balance to 150 units.

Stock Ledger would look as shown below:
Posting Date Qty Balance Qty Voucher Type
10/01/2014 100 100 Purchase Receipt
12/01/2014 150 150 Stock Reconciliation
If a new Purchase Receipt entry is made on 5th January 2014, which is prior to the date of Stock Reconciliation entry, Stock Ledger would look as shown below.

Posting Date Qty Balance Qty Voucher Type
05/01/2014 20 20 Purchase Receipt
10/01/2014 100 120 Purchase Receipt
12/01/2014
150 Stock Reconciliation
As you can see, the Balance Qty as on 10th January got updated from 100 to 120. But the Balance Qty as on 12th January did not get updated from 150 to 170.

### 4.2 For Serialized Items

For an Item, ITEM-00225 that has has the 6 serial nos HJF00020, HJF00021, HJF00022, HJF00023, HJF00024, HJF00025 with valuation rate as 530 per serial no. At the end of the year, the user has come to know that they have only 3 Serial Nos against that item with Valuation Rate 620. So to remove the old serial nos HJF00020, HJF00021, HJF00022, HJF00023, HJF00024, HJF00025 and add the new serial nos with new Valuation Rate, Stock Reconciliation can be used as follows:

Select the item ITEM-00225 in the stock reconciliation, on the selection of the Item the system will auto pull the existing serials nos. Then set Qty as 3, Valuation Rate as 530 and serial no as HJF00026, HJF00027, HJF00028.

![image](images/image.jpg)

Before reconciliation, the valuation rate was 530 and the available qty was 6, so the total stock value was 3,180. After reconciliation, the valuation rate has changed to 620 and available qty changed to 3, so the new stock value becomes 1,860. To adjust the stock value in the accounting, the system has credited extra amount 3,180 - 1,860 = 1,320 to Warehouse's account and debited to stock adjustment account. The GL entries for the above entry is as follows:

To view GL entries, click on button View > Accounting Ledger

![image](images/image.jpg)

The stock balance after submission of the stock reconciliation: Stock Reconciliation

The general ledger for the warehouse account Nagpur after submission of the stock reconciliation: Stock Reconciliation

### 4.3 For Batch Items

Stock reconciliation for batch items will be used to add a new batch or to update the quantity of the existing batch. For example, the batch JHGJH00003 has the current quantity as 60 but if the user wants to make it 100 then by using stock reconciliation, user can update the batch quantity.

![image](images/image.jpg)

Batch-Wise Balance History report after submission of the stock reconciliation: Stock Reconciliation

## 5. Video

## 6. Related Topics

1. Stock Entry
1. Accounting Of Inventory Stock
