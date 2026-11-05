---
title: Index Monitor Settings
sidebar_label: Settings
---

Go to **Settings > Slim SEO > Index Monitor tab**.

Setting|What it does
---|---
Client ID, Client Secret|The Client ID and Client Secret from your Google app. See [how to get them](/slim-seo-pro/index-monitor/connecting-to-gsc/). When you change them and save, the plugin connects to Google. The connection status appears below **Client Secret**.
Re-check interval for indexed URLs|How many days the plugin waits before it checks an indexed URL again. Default: 30.
Re-check interval for noindex URLs|How many days the plugin waits before it checks a noindex URL again. Default: 7.
Cron interval|How often the plugin runs its checks, in hours. Default: 12 (twice a day).
URLs per run|How many URLs the plugin checks each time it runs. Default: 500.
Delete indexing data|Deletes all indexing data when you turn off Index Monitor or deactivate Slim SEO Pro.

:::caution Google's daily limit

Google allows about **2,000 checks per day** for each site. Keep this rule: **URLs per run** × runs per day must stay under 2,000.

For example, the default settings run the plugin 2 times a day and check 500 URLs each time. That is 1,000 checks per day.

:::
