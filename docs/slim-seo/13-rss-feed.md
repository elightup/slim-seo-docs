---
title: RSS Feed
---

If your RSS feed shows full content, then there are possibilities that your content are scraped and used in many other websites. That creates duplicated content and thus, decrease your website's trust.

In order to prevent that, Slim SEO shows a notification in the WordPress dashboard, telling you to switch your feed to show summary.

![Set up the RSS feed to show summary for articles](https://i.imgur.com/S5LojxE.png)

In addition, to prevent the copying content problem, it automatically adds a link back to your posts. So, even if someone scrape your content, you'll have a back link from them. Google and other search engines will know your content is original.

## How do I change the text of the anti-scrape link in the RSS feed?

Yes, you can. Please use this snippet to change the text:

```php
add_filter( 'slim_seo_feed_text', function( $text ) {
	return 'Read the post';
} );
```
