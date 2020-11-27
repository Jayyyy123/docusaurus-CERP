---
id: smsSettings
title: SMS Settings
sidebar_label: SMS Settings
---

**You can subscribe to an SMS provider to send SMS to mobile numbers.**

To integrate SMS in CERP, approach an SMS Gateway Provider who provides HTTP API. They will create an account for you and will provide a unique username and password.

To access SMS settings, go to:

:::note
Home > Settings > SMS Settings
:::

To configure SMS Settings in CERP, find out their HTTP API (a document which describes the method of accessing their SMS interface from 3rd party applications). In this document, you will get a URL which is used to send the SMS using HTTP request. Using this URL, you can configure SMS Settings in CERP.

Example SMS Gateway URL:

    http://instant.smses.com/web2sms.php?username=<USERNAME>&password;=<PASSWORD>&to;=<MOBILENUMBER>&sender;=<SENDERID>&message;=<MESSAGE>

~~SMS Setting 2~~

Note: For SMS Gateway URL, only include the string before the "?".

Example:

    http://instant.smses.com/web2sms.php?username=abcd&password;=abcd&to;=9900XXXXXX&sender;
    =DEMO&message;=THIS+IS+A+TEST+SMS

The above URL will send SMS from account abcd to mobile number 9900XXXXXX with sender ID as DEMO with a text message as "THIS IS A TEST SMS".

Note that some parameters in the URL are static. You will get static values from your SMS Provider like username, password, etc. These static values should be entered in the Static Parameters table.

~~SMS Setting~~

## Related Topics 
1. Email Account
1. Notifications
