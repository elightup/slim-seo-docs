---
title: Facebook Open Graph Tags
---

Open Graph tags are essential when you want to boost your social SEO. Adding Open Graph meta tags to your web page HTML will provide the crawler structured info like a title, description, and thumbnail image for the content.

All Open Graph tags are generated automatically just like [meta title](https://wpslimseo.com/docs/meta-title-tag/) and [meta description](https://wpslimseo.com/docs/meta-description-tag/).

Actually, it inherits from these meta tags. The `og:title` is the meta title, `og:description` is the meta description.

Slim SEO supports the following Open Graph tags:

| Tag | Description |
| --- | --- |
| `og:title` | Title: inherits from meta title. |
| `og:type` | Type: `article` if on a singular pages/posts, `website` on other pages. |
| `og:image` | Image: URL of the featured image. Only available for singular pages/posts. |
| `og:image:width` | Image width: width of the featured image. |
| `og:image:height` | Image height: width of the featured image. |
| `og:image:alt` | Image alt text: alt text of the featured image. |
| `og:description` | Description: inherits from meta description. |
| `og:url` | URL: permalink of the singular posts/pages. |
| `og:locale` | Locale: get from WordPress's settings. |
| `og:site_name` | Site name: get from WordPress's settings. |
| `article:published_time` | Article published time: get from post's published time. Only available for singular pages/posts. |
| `article:modified_time` | Article modified time: get from post's modified time. Only available for singular pages/posts. |
| `og:updated_time` | Article updated time: same as article modified time. |
| `article:section` | Article section: post category (the first one). |
| `article:tag` | Article tags: post tags. |
| `article:author` | Article author name |

See [list of all available Open Graph tags supported by Facebook](https://developers.facebook.com/docs/sharing/webmasters).

## How to add/remove an Open Graph tag

If you want to remove an Open Graph tag from the list, please use the following snippet:

```
add_filter( 'slim_seo_open_graph_tags', function( $tags ) {
    return array_diff( $tags, ['article:published_time', 'article:modified_time'] );
} );
```

The snippet above removes the `article:publish_time` and `article:modified_time` tags. You can add it to your theme's `functions.php` or use the [Code Snippets](https://wordpress.org/plugins/code-snippets/) plugin to run it.

## How to change value of an Open Graph tag

To change the value of an open graph tag (for example `og:type`) for a specific post, use the following snippet:

```
add_filter( 'slim_seo_open_graph_type', function( $value, $tag ) {
    if ( is_post( 123 ) ) {
        $value = 'product';
    }
    return $value;
}, 10, 2 );
```

The filter name is `slim_seo_open_graph_{$tag_short_name}`, where the tag short name strips `og:` and replaces `:` with `_` in the tag. For example: `title` for `og:title` and `article_author` for `article:author`.

## How to add custom Open Graph tag

Please use the following snippet:

```
add_action( 'wp_head', function() {
    if ( is_post( 123 ) ) {
         echo '<meta property="tag_name" content="tag_value">';
    }
} );
```

## How to change the image when sharing on Facebook?

By default, Slim SEO uses the featured image as the thumbnail when sharing a single post/page/term on Facebook.

However, if the featured image is not optimized for Facebook (for example, the size is not correct), then you might want to use another image. To do that, simply select another image in tab **Social Settings** of the **Search Engine Optimization** meta box, below the content:

![](https://i.imgur.com/FvOjc2X.png)

Setting image when sharing on Facebook

The recommended size for image when sharing on Facebook is **1200x628** pixels (1.91:1 ratio).

_Please note that if you set your homepage as a static page, then the plugin treats it like a normal page._

## My image doesn't appear on Facebook

Please use the [Facebook Debugger](https://developers.facebook.com/tools/debug/) to check whether the image is set correctly.

Also please note that Facebook only supports images with format jpeg, gif, or png. If you're using a plugin to auto converts images to WebP, then this format will not work.

## Default social sharing image

When there's no image is specified in the **Search Engine Optimization** meta box above, and the post doesn't have a featured image, then the plugin will use the default sharing image, which is set in the **Settings > Slim SEO > Social**.

![](https://i.imgur.com/WFeoHyi.png)

Default social sharing image
