---
title: Indexing Status
---

## Viewing the indexing status

Go to the list of posts, pages, or terms (for example, **Posts > All Posts**). You will see the status icon in the **Index** column.

If you use **Slim SEO Free**, the status is shown in its **Index** column. If the post is set to *noindex* in Slim SEO, you will see a small red dot next to the icon, and the tooltip says so.

Hover over the icon to see the status and Google's explanation.

## Statuses

Status|Meaning
---|---
Not Queued|The URL is not in the queue yet.
Queued|The URL is waiting to be checked.
Checking|The plugin is checking the URL with Google.
Indexed|Google has indexed the URL.
Not Indexed|Google knows the URL but has not indexed it. For example, Google crawled the page but decided not to index it, or the URL redirects to another page.
No Index|Google does not index the URL because of a *noindex* tag or *robots.txt*.
Attention|The URL has a problem that you should check. For example, Google has not found the URL yet, the page returns a 404 error, or Google chose a different canonical URL.
N/A|The plugin could not get the status from Google, for example, when the daily quota runs out. The plugin tries again on the next run.

## When the plugin checks again

The plugin does not check the same URL every day. It checks again based on the last status:

Status|Checks again after
---|---
Indexed|30 days (you can change it in the [settings](/slim-seo-pro/url-indexing/settings/))
No Index|7 days (you can change it in the [settings](/slim-seo-pro/url-indexing/settings/))
Not Indexed, Attention|1 day
N/A|The next run

The plugin also checks a URL again when:

- You publish a new post or term.
- You change the URL (slug) of a post or term.
- You change the permalink structure in **Settings > Permalinks**. When you save this page, you will see a message that the change will affect Google indexing.

The plugin also scans all URLs every 3 days to find URLs that have changed.
