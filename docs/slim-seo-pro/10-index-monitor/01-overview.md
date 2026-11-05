---
title: Index Monitor Overview
sidebar_label: Overview
---

**Index Monitor** shows whether Google has indexed your posts, pages, and terms. The status appears in the list of posts and terms in WordPress. You do not need to open Google Search Console and check each URL.

Index Monitor only checks the status. It does not send URLs to Google.

The plugin gets the status from the [URL Inspection API](https://developers.google.com/webmaster-tools/v1/urlInspection.index/inspect) of Google Search Console. You see the same data as when you inspect a URL in Google Search Console.

## Getting started

First, connect Index Monitor to Google Search Console. Follow the [connection guide](/slim-seo-pro/index-monitor/connecting-to-gsc/).

After you connect, the plugin works in the background:

1. It finds all public posts, pages, and terms. It adds them to a queue.
2. It checks the queued URLs with Google several times a day.
3. It saves the results. Your admin pages stay fast.

You do not need to do anything else. On a large site, the first full check can take a few days.

Next, learn how to [view the indexing status](/slim-seo-pro/index-monitor/indexing-status/) and [change the settings](/slim-seo-pro/index-monitor/settings/).

## Turn off Index Monitor

Index Monitor is on by default. To turn it off, go to **Settings > Slim SEO > Features tab**. Turn off **Index Monitor (Pro)**.
