---
title: Slim SEO - WPML Integration
sidebar_label: WPML
---

**WPML** is the go-to solution for efficient, accurate, and hassle-free translation management in WordPress. With over 1 million active users worldwide and more than 15 years of industry expertise, WPML is a trusted market leader in WordPress multilingual solutions.

If you're a Slim SEO user, you'll have a full integration with WPML, that helps you improve your multilingual site's SEO performance.

## Translating meta title and description for posts

Slim SEO allows you to set specific [meta title](/slim-seo/meta-title-tag/) and [meta description](/slim-seo/meta-description-tag/) for posts. Now you can translate these meta tags with WPML easily. Follow these steps:

Assuming that you have a post with manual meta title and description as follows:

![Translate meta title and meta description](https://i0.wp.com/images.elightup.com/slim-seo/docs/slim-seo/wpml-translate-post.png)

On the right sidebar, in the **Translation** area, click the plus icon (or the settings icon if you already translated it) next to the language to add a new translation for the post. WPML will automatically loads the translation editor screen for you to translate the content like this:

![WPML translate editor screen](https://i0.wp.com/images.elightup.com/slim-seo/docs/slim-seo/wpml-translate-editor-screen.png)

You'll see Slim SEO's meta tags (title and description) available there, so you can translate them for the post.

## Translating meta tags settings

Slim SEO has a settings page, where you can set up the meta tags for post types and taxonomies with [dynamic variables](/slim-seo/dynamic-variables/):

![Dynamic variables in Slim SEO](https://i0.wp.com/images.elightup.com/slim-seo/docs/slim-seo/settings-meta-tags-tab.png)

You can translate these settings with WPML with the help of the [String Translation](https://wpml.org/documentation/getting-started-guide/string-translation/) module.

Simply go to **WPML → String Translation**, and enter **slim_seo** in the search box to find all settings by Slim SEO. Then in the table list below, you can click the plus icon next to the settings you want to translate:

![Translate Slim SEO settings with WPML](https://i0.wp.com/images.elightup.com/slim-seo/docs/slim-seo/wpml-translate-settings.png)

:::caution

If you don't see Slim SEO's settings here, that means that the settings is not modified and will use the default value. In this case, you need to modify the default settings value at **Slim SEO → Meta Tags**. Then go back to this screen and you'll see the settings.

:::

## Hreflang tag and multilingual sitemap

Another aspect of multilingual SEO is the `hreflang` tag. By default, WPML automatically outputs the `hreflang` in the HTML of the posts on the front end, like this, so Slim SEO has to do nothing:

```html
<link rel="alternate" hreflang="en" href="https://example.com/wordcamp-asia-2025/" />
<link rel="alternate" hreflang="vi" href="https://example.com/vi/wordcamp-asia-2025/" />
<link rel="alternate" hreflang="x-default" href="https://example.com/wordcamp-asia-2025/" />
```

However, in the [XML sitemap](/slim-seo/xml-sitemap/) for posts, Slim SEO will automatically adds `hreflang` tags to the sitemap **for each post**. This is not visible to human, but when you view the source code of the sitemap, you will see it like this:

![Multilingual sitemap with WPML](https://i0.wp.com/images.elightup.com/slim-seo/docs/slim-seo/wpml-multilingual-sitemap.png)

Both methods (outputting in HTML and in XML sitemap) are the [recommended ways](https://developers.google.com/search/docs/specialty/international/localized-versions#sitemap) to tell Google about translations of your pages.
