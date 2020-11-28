---
id: twitterSett
title: Twitter Settings
sidebar_label: Twitter Settings
---

Twitter related settings like OAuth can be configured here. CERP needs access to the API through which the post is shared and achieved using OAuth 2.0 Authentication Protocol.

## 1. How to set up Twitter App

You must have Twitter App for your company. CERP interacts with this App for sharing Tweet.

### 1.1 Create Twitter Developer App

Create App by link https://developer.twitter.com/ and check that the App has Read and write Access permission. Twitter App Permission

### 1.2. Configure Callback URL

1. Select your App and go to App Details.
1. Then go to Edit and click Edit Details.
1. Add your website URL in Callback URLs like: https://{yoursite}/api/method/erpnext.crm.doctype.twitter_settings.twitter_settings.callback
1. Click Save to make changes.
   ![image](images/image.jpg)

## 2. How to set up Twitter Settings

To access Twitter Settings, go to:
:::note
Home > CRM > Settings > Twitter Settings
:::

![image](images/image.jpg)

### 2.1 API Key and API Key Secret

You get API Key and API Key Secret from your Twitter Developer account go to:

https://developer.twitter.com/ > My Apps > {Your App} > Keys and tokens

![image](images/image.jpg)

Once you save the doc by filling API Key and API Key Secret it will redirect to Twitter's sign-in page by providing valid Twitter credentials and clicking Authorize app, the member approves your application's request to access their member data and interact with Twitter. Twitter Authorize App
