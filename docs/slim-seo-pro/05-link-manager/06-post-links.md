---
title: Post link reports
---

Besides the [global reports](/slim-seo-pro/link-manager/reports/), you can also see links from/to a specific post when editing it.

When editing a post, you'll see a meta box **Link Manager** below the post content as follows:

![Link manager meta box on the post edit screen](https://imgur.elightup.com/KRhtKna.png)

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

Please note that Slim SEO Pro uses the same filter as in [Slim SEO](/slim-seo/meta-title-tag/) to hide SEO settings. In this case, both link manager settings and SEO settings meta boxes are hidden.

:::