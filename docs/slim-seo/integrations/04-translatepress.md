---
title: Slim SEO - TranslatePress Integration
sidebar_label: TranslatePress
---

**TranslatePress** is a powerful and user-friendly WordPress translation plugin that allows you to translate your entire website directly from the front end. It works seamlessly with any theme or plugin, and supports both manual and automatic (AI-powered) translations. With its intuitive visual interface, you can easily create multilingual websites in just a few clicks.

If you're a Slim SEO user, you'll have a good integration with TranslatePress, that helps you improve your multilingual site's SEO performance.

## Hreflang tag and multilingual sitemap

An important aspect of multilingual SEO is the `hreflang` tag. By default, TranslatePress automatically outputs the `hreflang` in the HTML of the posts on the front end, like this, so Slim SEO has to do nothing:

```html
<link rel="alternate" hreflang="en-US" href="http://ss.test/hello-world/"/>
<link rel="alternate" hreflang="vi" href="http://ss.test/vi/hello-world/"/>
```

However, in the [XML sitemap](/slim-seo/xml-sitemap/) for posts, Slim SEO will automatically adds `hreflang` tags to the sitemap **for each post**. This is not visible to human, but when you view the source code of the sitemap, you will see it like this:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="http://ss.test/wp-content/plugins/slim-seo/src/Sitemaps/style.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
	<url>
		<loc>http://ss.test/hello-world/</loc>
		<lastmod>2025-10-20T06:56:36+00:00</lastmod>
		<news:news>
			<news:publication>
				<news:name>My Site</news:name>
				<news:language>en</news:language>
			</news:publication>
			<news:publication_date>2025-10-20T06:56:36+00:00</news:publication_date>
			<news:title>Hello world!</news:title>
		</news:news>
		<xhtml:link rel="alternate" hreflang="en-US" href="http://ss.test/hello-world/"/>
		<xhtml:link rel="alternate" hreflang="vi" href="http://ss.test/vi/hello-world/"/>
		<xhtml:link rel="alternate" hreflang="x-default" href="http://ss.test/hello-world/"/>
	</url>
	<url>
		<loc>http://ss.test/vi/hello-world/</loc>
		<lastmod>2025-10-20T06:56:36+00:00</lastmod>
		<xhtml:link rel="alternate" hreflang="en-US" href="http://ss.test/hello-world/"/>
		<xhtml:link rel="alternate" hreflang="vi" href="http://ss.test/vi/hello-world/"/>
		<xhtml:link rel="alternate" hreflang="x-default" href="http://ss.test/hello-world/"/>
	</url>
</urlset>
```

Both methods (outputting in HTML and in XML sitemap) are the [recommended ways](https://developers.google.com/search/docs/specialty/international/localized-versions#sitemap) to tell Google about translations of your pages.
