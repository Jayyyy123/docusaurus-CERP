---
id: printFormat
title: Print Format
sidebar_label: Print Format
---

**With Print Format, you can set how document types look when printing.**

Every transaction has a default Print Format called 'Standard'. You can change Print Formats by:

- Using the Print Format form
- Using Jinja/JS scripting under Print Format
- Using the Print Format Builder to create print formats with UI
- Using Customize Form to hide/unhide fields
  To access Print Format, go to:

:::note
Home > Settings > Print Format
:::

## 1. How to create a Print Format

1. Go to the Print Format List, click on New.
1. Enter a name and select a DocType for which the Print Format is to be used.
1. The module for which it should apply will be selected automatically.

~~Print Format menu~~

4. Save.

Under Style Settings, there are options to change the styling options. With those options, you can change the font, align the labels together on the left or right, add headings for sections, etc.

To style the Print Format using custom Jinja/JS, click on Custom Format. If you select this option, there'll be a checkbox for raw printing. To know more about raw printing, click here.

If developer mode is enabled, you can select Standard as yes to contribute a print format as a standard (preset) print format in the system.

### 1.1 Using Customize form to change the Print Format items

Fields in the transactions and their child tables can be hidden/shown using Customize Form. For example, if you want to hide the 'Item Code' when printing a Quotation, click on the print icon to enter the print screen.

Go to Menu > Customize, select Quotation Item in the 'Enter Form Type' field.
~~Print Format Customize~~

To know more, visit the Customize Print Format page.

In the fields table, expand the 'Item Code' row, scroll down and tick the 'Print Hide' checkbox. ~~Print Format Print Hide~~

A newly created Print Format can be selected on the print screen of a transaction. From there you can see how it looks and proceed to print.
~~Selecting a Print Format~~

## 2. Video

## 3. Related Topics

1. Print Style
1. Print Headings
1. Letter Head
1. Cheque Print Template
1. Disabling Line Breaks in Print Format Sections
