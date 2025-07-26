---
title: Post-Specific Schema
---

Besides setting up schemas in the Settings page, you can also set up schemas for individual posts and pages.

To set up a schema for a post or page, edit it and see the schema settings in the **Schema** meta box below the post editor.

![Post specific schema](https://i.imgur.com/XpPJw5a.png)

By default, the post will inherit the schema from the global settings. If you want to **override the global settings**, select a schema from the dropdown. All the properties in the schema will be displayed for the post.

![Select a different schema for a post](https://i.imgur.com/DLQo8vk.png)

The properties in the schema are the same as in the [global settings](/slim-seo-pro/schema/adding-schemas/#properties), including [dynamic variables](/slim-seo-pro/schema/dynamic-variables/).

When you finish editing the schema for the post, click **Save** or **Update** to save the changes. This schema will be used for the post and will override the global settings.

## How to hide schema settings meta box for non-admin users?

In some cases, where you want only admins can change the schema settings for specific posts, then use this snippet to hide the schema settings meta box from other user roles:

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

Please note that Slim SEO Pro uses the same filter as in [Slim SEO](/slim-seo/meta-title-tag/) to hide SEO settings. In this case, both schema settings and SEO settings meta boxes are hidden.

:::