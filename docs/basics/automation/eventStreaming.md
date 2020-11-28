---
id: eventStreaming
title: Event Streaming
sidebar_label: Event Streaming
---

:::note
Introduced in Version 13
:::

Event Streaming enables inter site communications between two or more sites. You can subscribe to Document Types and stream Documents between different sites.

For Example: Consider you have more than one Company hosted on different sites, one among them is the main site where you want to do ledger posting and on other sites, the Sales Invoices are generated. You can use Event Streaming in this case. For this, your child company sites can subscribe to the main company site for Item, Customer, and Supplier Document Types. The main Company in turn can subscribe to the child companies for Sales Invoices.

To access Event Streaming, go to:

:::note
Home > Automation > Event Streaming
:::

## 1. Prerequisites

Before creating an Event Producer, a common user needs to be created on both the sites which will be used to access the site and will act as an Event Subscriber. Make sure the user is a System Manager and has the necessary permissions for creation, updation, and deletion of the subscribed DocTypes.

## 2. How to set up Event Streaming

Let's take two sites for explaining the process. http://testsite:8000 (Consumer site) and http://testsite_producer:8000 (Producer site)

### 2.1 Obtain the Event Subscriber's keys from the Producer Site

1. On http://testsiteproducer:8000 (producer site), go to the User list.
1. Open the user document you are going to use as an Event Subscriber. Scroll down to the section labelled "API Access". In that section, generate keys for the user by clicking on Generate Keys button. You will get a prompt with the user secret, copy the user secret and save it with you. It will also generate an API key.

### 2.2 Generate Keys for the Event Subscriber on the Consumer Site

1. On http://test_site:8000 (consumer site), go to the User list and follow the same process specified in the previous step.

### 2.3 Create an Event Producer on the Consumer Site

1. The site which you want to subscribe to, is called as the Event Producer. Create an Event Producer document for the site you wish to get the updates from.
1. On http://test_site:8000 (consumer site), go to Home > Automation > Event Streaming > Event Producer.
1. Enter the URL of the site you want to subscribe to (in this case http://testsiteproducer:8000), in the Producer URL field.
1. Add all the Document Types you want to subscribe to, in the Event Producer Document Types table.
1. If you want to have the created documents with the same name as it is on the remote Event Producer site, check the 'Use Same Name' checkbox in the table against the required Document Type.
1. Set the Event Subscriber field to the user that will be used to create the documents fetched from the Event Producer. You need to create the same user both ways, i.e. on the Event Consumer as well as the Event Producer site before creating the Event Producer.
1. Paste the API key and API Secret you generated in the first step (2.1) in the API key and API secret fields respectively.
1. Save.
1. After saving, an Event Consumer is created on the producer site (http://testsiteproducer:8000). The keys of the user on the consumer site are automatically copied to the Event Consumer document on the producer site in this process.

![image](images/image.jpg)

:::note
Note: If at all the API Secret is changed for the users on any of these sites, you will have to manually update the keys in the Event Producer as well as the Event Consumer on both the sites.
:::

### 2.4 Approve Event Consumer on the Event Producer site

1. After the Event Producer has been created, an Event Consumer automatically gets created on the producer site. By default, all the Subscribed Document Types have the status as 'Pending'. In order to enable the Event Consumer to consume the documents of these Document Types, their Status needs to be updated to 'Approved'.
1. Go to: Home > Automation > Event Streaming > Event Consumer.
1. Once you open the Event Consumer document you will see all the Document Types that the consumer has subscribed to. Change the status from 'Pending' to 'Approved' for all the Document Types that you want to approve to be consumed. You can change the status to 'Rejected' if you do not want the documents of that Document Type to be consumed.
1. Save.

![image](images/image.jpg)

:::note
Note: Document updates for Subscribed Document Types won't be synced unless they are Approved.
:::

### 2.5 Offline access with single site

If you have some places where internet connectivity is low, for example, a store in a remote area where sales invoices are generated and you want to sync these invoices from the store to the hosted account, you could setup offline syncing using the following steps:

1. Set up an CERP local instance. You can refer this guide for local setup.
1. You need to have hosted account with your company set up.
1. Now create an Event Producer on the hosted account and set the producer URL to the URL of your local account.
1. Add whatever doctypes you want to sync in the Event Producer Document Types child table.
1. Approve the doctypes.
