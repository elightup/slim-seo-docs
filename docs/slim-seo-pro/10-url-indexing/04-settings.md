---
title: URL Indexing Settings
sidebar_label: Settings
---

Go to **Settings > Slim SEO > URL Indexing tab > Settings**:

Setting|Description
---|---
Client ID, Client Secret|The credentials of your Google Cloud app. See [how to get them](/slim-seo-pro/url-indexing/connecting-to-gsc/).
Re-check interval for indexed URLs|How many days to wait before checking indexed URLs again. Default: 30.
Re-check interval for noindex URLs|How many days to wait before checking noindex URLs again. Default: 7.
Cron interval|How often (in hours) the plugin checks URLs. Default: 12 (twice a day).
URLs per run|How many URLs the plugin checks each time. Default: 500.
Delete indexing data|Delete all indexing data when you turn off the URL Indexing feature or deactivate Slim SEO Pro.

:::caution Google quota

Google allows about **2,000 checks per day** for each site. Keep *URLs per run × runs per day* under 2,000.

For example, with the default settings, the plugin runs 2 times a day and checks 500 URLs each time. That is 1,000 checks per day.

:::
