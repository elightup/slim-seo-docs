---
title: XML Sitemap
---

The sitemap is always should be enabled. Slim SEO automatically generates an XML sitemap (at `domain.com/sitemap.xml`) to submit to search engines. With XML sitemaps, your website is indexed fast and completely.

Slim SEO provides a styling for sitemap, which makes it look beautiful. See [demo here](https://wpslimseo.com/sitemap.xml).

To optimize the performance when generating sitemaps, the plugin splits the main sitemap (sitemap index) into a list of smaller sitemaps:

- Post types: each post type has a sitemap.
- Taxonomies: each taxonomy has a sitemap.

The maximum number of links in a sitemap is 2000. You can use filters to change this number (see below).

The posts and terms which are [manually set as `noindexed`](/slim-seo/meta-robots-tag/) will be excluded in the sitemap.

## Image Sitemap

Slim SEO also includes the image sitemap by default to make sure your images are discoverable by search engines.

All the images that you insert in the post content are added in the image sitemap. So, when someone searches for your images, they'll go to your posts to see the images.

The sitemap includes both self-hosted images and external images. Images in galleries or shortcodes are also parsed and included, too. For that reason, Slim SEO works with the default WordPress gallery shortcode and other WordPress gallery plugins.

Please note that the image URLs are not visible to humans when you view the sitemap link. But they're there if you view the sitemap source code as they're made for search engines only.

## Sitemap and robots.txt

The sitemap URL is automatically included in the `robots.txt` on your website if your website doesn't have a physical `robots.txt` file. WordPress automatically creates a virtual `robots.txt` for your website at `domain.com/robots.txt`. If you have a physical `robots.txt`, you need to add the sitemap URL by yourself.

## Multilingual sitemap

Slim SEO integrates well with multilingual plugins like **WPML** and **Polylang**.

Instead of providing separated sitemaps for different languages, the plugin adds `rel="alternate"` for each post or term in the sitemap. So, the sitemap becomes a **global sitemap for all languages**. When the search engines view the sitemap, they see multiple links for all languages for each post. These links are not visible to humans, but you can see them when viewing the sitemap source.

## How to exclude a post type from the sitemap?

To remove a post type from the sitemap, use the following code:

```
add_filter( 'slim_seo_sitemap_post_types', function( $post_types ) {
    $post_types = array_diff( $post_types, ['your_post_type'] );
    return $post_types;
} );
```

Excluding CPT from sitemap does **not** tell search engines to not index them. It simply doesn't send the post type's URLs to search engines. If search engines can discover posts in another way (by crawling your site), then they still can index them.

To tell search engines to not index these posts, it’s better to use [the robots tag](/slim-seo/meta-robots-tag/).

## How to exclude a taxonomy from the sitemap?

Similar to the above, please use the following code:

```
add_filter( 'slim_seo_sitemap_taxonomies', function( $taxonomies ) {
    $taxonomies = array_diff( $taxonomies, ['your_taxonomy'] );
    return $taxonomies;
} );
```

If you want to remove all taxonomies from the sitemap, use the following code:

```
add_filter( 'slim_seo_sitemap_taxonomies', '__return_empty_array' );
```

## How to change the query for posts in the sitemap?

Please use the following snippet:

```
add_filter( 'slim_seo_sitemap_post_type_query_args', function( $query_args ) {
    // Change number of URLs
    $query_args['posts_per_page'] = 5000;
    return $query_args;
} );
```

The parameters are the same as in the `[WP_Query](https://developer.wordpress.org/reference/classes/wp_query/)` class.

## How to change the query for taxonomies in the sitemap?

Similar to the above, please use this snippet:

```
add_filter( 'slim_seo_taxonomy_query_args', function( $query_args ) {
    // Change number of URLs
    $query_args['number'] = 5000;
    return $query_args;
} );
```

The query parameters are the same as in the `[get_terms()](https://developer.wordpress.org/reference/functions/get_terms/)` function.

## No sitemaps being generated?

The problem is that WordPress hasn't updated the permalink structure to recognize the sitemap URL. Please go to **Settings > Permalinks** and re-save the settings. Then check the sitemap URL again.

## Core sitemaps in WordPress

Since version 5.5, WordPress includes sitemap functionality in the Core. However, the core sitemaps lack some features that Slim SEO provides:

- Last modified date: it's very important to let search engines know whether to crawl your sites. It helps reduce the crawl rate, which then improves the server performance.
- Image sitemap: if you want your site appears when people search for images. Images are included in the XML sitemap.
- Multilingual sitemap: each entry in the sitemap has its versions in other languages, which lets search engines know to index multilingual URLs, and your site might appear when people search in another language.

Because of these reasons, we disable the core sitemaps to avoid any conflict.
