---
title: URL Indexing Overview
sidebar_label: Overview
---

**URL Indexing** shows you whether Google has indexed your posts, pages, and terms. You see the status right in the list of posts and terms in WordPress, so you do not need to open Google Search Console and check each URL one by one.

The plugin uses the [URL Inspection API](https://developers.google.com/webmaster-tools/v1/urlInspection.index/inspect) of Google Search Console to get the status. This is the same data you see when you inspect a URL in Google Search Console.

:::info

URL Indexing only **checks** the indexing status. It does not submit URLs to Google.

:::

## Getting started

URL Indexing needs its own connection to Google Search Console. Follow the guide to [connect to Google Search Console](/slim-seo-pro/url-indexing/connecting-to-gsc/).

After you connect, the plugin starts working in the background:

1. It finds all public posts, pages, and terms on your site and adds them to a queue.
2. It checks the queued URLs with Google several times a day.
3. It saves the results, so your admin pages stay fast.

You do not need to do anything else. On a big site, it can take a few days to check all URLs.

Then, learn how to [view the indexing status](/slim-seo-pro/url-indexing/indexing-status/) and [change the settings](/slim-seo-pro/url-indexing/settings/).

## Turning off URL Indexing

URL Indexing is on by default. To turn it off, go to **Settings > Slim SEO > Features tab** and turn off **URL Indexing (Pro)**.
