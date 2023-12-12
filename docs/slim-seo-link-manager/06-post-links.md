---
title: Post links
---

Besides the [reports](/slim-seo-link-manager/reports/), you can also see links from/to a specific post when editing it.

When editing a post, you'll see a meta box **Link Manager** below the post content as follows:

![Link manager meta box on the post edit screen](https://i.imgur.com/KRhtKna.png)

## Link reports

The **Link Manager** meta box shows 3 types of links in your post content (organized in the corresponding tabs):

- **Internal Outbound**: Links from the current post to other posts on your website
- **External Outbound**: Links from the current post to other websites
- **Internal Inbound**: Links from other posts on your website to the current post

Each link has the following details:

Name|Description
---|---
Source|The source post/page that has the link
Target|The target post/page. When hovering the row, you'll see the **Edit** and **View** links for the post/page.
Anchor text|The anchor text of the link. If it's an image, the image alt will be used.
Follow|Whether the link is dofollow or nofollow.
Status|The link HTTP status code.

**All links in these reports are updated in real-time**. When you edit the post content, the content will be analyzed and parsed automatically to generate the links. The plugin also will check the HTTP status of links and show it in the reports immediately.

## Link suggestions

Besides the reports, the plugin also **suggests other posts on your website for you to link to**. This feature is very useful to **build internal links**.

To get link suggestions, click the **Link Suggestions** tab in the **Link Manager** meta box:

![Link suggestions](https://i.imgur.com/VoTDofB.png)

The plugin has 2 modes for link suggestions:

- **Automatic**: automatically suggests other posts to link to **based on the keywords in the post content**. The plugin will find all posts that have the keywords in the post content and show them to you so you can link to them.
- **Manual**: allows you to search for posts by keywords to link to. The plugin shows **most used words from the post content** that you can search faster by clicking on them.

:::caution How do link suggestion work?

It's important to understand that the automatic link suggestion works by analyzing the posts to see if they contains common words with the current post content. If a post doesn't have or have only few common words with the current post, it won't be suggested.

:::

Slim SEO Link Manager also allows you to find posts that in the same category or tag with the current post by enabling the **Same taxonomies** switch. In this case, you will get only related posts in the same category/tag.

For each found post, the plugin will **suggest the paragraph that has the related content to the post, where you should put the link**. To save you time, a **Copy link** button is also available for you to copy the post URL.

With this feature, you can **find related posts and link to them quickly**. When you add a link to another post, the link will be updated in the reports immediately (see the **Link reports** section above). It's a great way to build internal links and improve your website SEO!

## How to hide link manager settings meta box for non-admin users?

In some cases, where you want only admins can change the link manager settings for specific posts, then use this snippet to hide the schema settings meta box from other user roles:

```php
// Hide SEO settings meta box for posts.
add_filter( 'slim_seo_meta_box_post_types', function ( $post_types ) {
	return current_user_can( 'manage_options' ) ? $post_types : [];
} );

// Hide SEO settings meta box for terms.
add_filter( 'slim_seo_meta_box_taxonomies', function ( $taxonomies ) {
	return current_user_can( 'manage_options' ) ? $taxonomies : [];
} );
```
:::caution

Please note that Slim SEO Link Manager uses the same filter as in [Slim SEO](/slim-seo/meta-title-tag/) to hide SEO settings. In this case, both link manager settings and SEO settings meta boxes are hidden.

:::