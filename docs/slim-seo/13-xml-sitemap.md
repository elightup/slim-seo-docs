---
title: Sitemap
---

Sitemap is a **collection of URLs** of your sites that you provide to search engines to crawl. With it, search engines know which URLs to crawl, so your website is indexed faster and no URLs are missed.

When using Slim SEO, the sitemap is automatically created at `domain.com/sitemap.xml`, and you need to **submit this sitemap URL to search engines** (in Google Search Console and Bing Webmaster Tools).

:::caution No sitemap?

If you don't see the sitemap when visiting the URL, please go to **Settings > Permalinks** and re-save the settings. Then check the sitemap URL again.

:::

Although the sitemap is mostly used by search engines and is a technical page, Slim SEO also styles it for human reading:

![Slim SEO sitemap](https://i.imgur.com/BerokZG.png)

To optimize the performance when generating sitemaps, the plugin splits the main sitemap into a list of smaller sitemaps:

- Post types: each post type has a sitemap.
- Taxonomies: each taxonomy has a sitemap.

The maximum number of links in a sitemap is 2000. You can use filters to change this number (see below).

Posts and terms which are [manually set as "noindexed"](/slim-seo/meta-robots-tag/) are excluded in the sitemap.

## Image sitemap

Slim SEO also includes the image sitemap by default to make sure your images are discoverable by search engines.

All the images that you insert in the post content are added to the sitemap. So, when someone searches for your images, they'll go to your posts to see the images.

The sitemap includes both self-hosted images and external images. Images in galleries or shortcodes are also parsed and included, too. For that reason, Slim SEO works with the default WordPress gallery shortcode and other WordPress gallery plugins.

:::caution

Image URLs are not visible to humans when you view the sitemap link. But they're there if you view the sitemap source code as they're made for search engines only.

:::

## Sitemap and robots.txt

The sitemap URL is automatically included in the `robots.txt` on your website if your website doesn't have a physical `robots.txt` file. WordPress automatically creates a virtual `robots.txt` for your website at `domain.com/robots.txt`. If you have a physical `robots.txt`, you need to add the sitemap URL by yourself.

## Multilingual sitemap

Slim SEO integrates well with multilingual plugins like **WPML** and **Polylang**.

Instead of providing separated sitemaps for different languages, the plugin adds `rel="alternate"` for each post or term in the sitemap. So, the sitemap becomes a **global sitemap for all languages**. When the search engines view the sitemap, they see multiple links for all languages for each post. These links are not visible to humans, but you can see them when viewing the sitemap source.

## Excluding post types

To exclude post types from the sitemap, use the following code:

```
add_filter( 'slim_seo_sitemap_post_types', function( $post_types ) {
    $post_types = array_diff( $post_types, ['post_type_1', 'post_type_2'] );
    return $post_types;
} );
```

:::info

Excluding post types does **not** tell search engines to **not index** them. It simply doesn't send the post types' URLs to search engines. If search engines can discover posts in another way (by crawling your site), then they still can index them.

To tell search engines to not index these posts, it’s better to use [the robots tag](/slim-seo/meta-robots-tag/).
:::


## Excluding taxonomies

Similar to the above, please use the following code:

```
add_filter( 'slim_seo_sitemap_taxonomies', function( $taxonomies ) {
    $taxonomies = array_diff( $taxonomies, ['tax_1', 'tax_2'] );
    return $taxonomies;
} );
```

If you want to remove all taxonomies from the sitemap, use the following code:

```
add_filter( 'slim_seo_sitemap_taxonomies', '__return_empty_array' );
```

## Post query

To get posts for the sitemap, Slim SEO makes a [query](https://developer.wordpress.org/reference/classes/wp_query/) to the database. If you want to change the query (for example, changing the number of posts per page or excluding some posts), then use the following snippet:

```
add_filter( 'slim_seo_sitemap_post_type_query_args', function( $query_args ) {
    // Change the number of URLs
    $query_args['posts_per_page'] = 5000;
    return $query_args;
} );
```

The parameters are the same as in the [WP_Query](https://developer.wordpress.org/reference/classes/wp_query/) class.

## Taxonomy query

Similar to the above, if you want to change the query to get taxonomy terms, please use this snippet:

```
add_filter( 'slim_seo_taxonomy_query_args', function( $query_args ) {
    // Change the number of URLs
    $query_args['number'] = 5000;
    return $query_args;
} );
```

The query parameters are the same as in the [get_terms()](https://developer.wordpress.org/reference/functions/get_terms/) function.

## Core sitemaps

Since version 5.5, WordPress includes sitemap functionality in the core. However, the core sitemaps lack some features that Slim SEO provides:

- **Last modified date**: it's important to let search engines know whether to crawl your pages. It helps reduce the crawl rate, which then reduces the server load.
- **Image sitemap**: Slim SEO's sitemap includes images, which makes your site appears when people search for images.
- **Multilingual sitemap**: each entry in the sitemap has its versions in other languages, which lets search engines know to index multilingual URLs, and your site might appear when people search in another language.

Because of these reasons, we disable the core sitemaps to avoid any conflict.
