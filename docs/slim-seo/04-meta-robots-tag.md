---
title: Meta Robots Tag
---

Meta robots are usually used to exclude pages from search results (via `noindex` value). Slim SEO automatically checks if a page needs to be indexed and auto exclude it from the search results if necessary.

The following pages are excluded from search results:

- 404 page: because it doesn't provide any content.
- Search results pages: internal search results page should not be indexed for two reasons. First, the content are duplicated as the posts are already indexed. Second, there are unlimited search results pages (for unlimited search queries) and that leads to low-quality and duplicated content.
- Private singular pages/posts: no one can see it but admins, including bots. So no need to index them.
- Empty content page: such as categories/tags that don't have any posts, or an author which don't have any posts.
- Feed: they're for feed readers, not for search results.

## How to disable a post from being indexed?

If you don't want a post or a term to be shown on search results page, simply select **Hide from search results** in the **Search Engine Optimization** meta box below the content area:

![Don't show a page from search results](https://i.imgur.com/D0DdbxS.png)

## How to disable a post type from being indexed?

If you want to block all posts of a post type from being indexed, use the following snippet:

```php
add_filter( 'slim_seo_robots_index', function( $value, $object_id ) {
    if ( get_post_type( $object_id ) === 'my-template' ) {
        return false;
    }
    return $value;
}, 10, 2 );
```

## How to disable archive pages from being indexed?

To disable some archive pages from being indexed, please use the following snippet (remember to update the conditions to match your need):

```php
add_filter( 'slim_seo_robots_index', function( $value, $object_id ) {
    // Disable for author archive page.
    if ( is_author() ) {
        return false;
    }

    // Disable for date archive.
    if ( is_date() ) {
        return false;
    }

    // Disable for other archive.
    if ( is_archive() ) {
        return false;
    }

    return $value;
}, 10, 2 );
```

## How to modify content of the robots meta tag

If you're using WordPress 5.7 or below, use the following snippet to modify the content of the robots meta tag:

```php
add_filter( 'wp_robots', function( $robots ) {
    $robots['noodp']  = true;
	$robots['noydir'] = true;

    return $robots;
} );
```

## Large image preview

By default, Slim SEO enables large image preview on SERPs (search engine result pages). This is recommended [by Google](https://developers.google.com/search/blog/2019/09/more-controls-on-search) to encourage users click to go to the website, thus, increase CTR (click-through-rate). You don't need to do anything about this as the plugin automatically handles this for you.

## robots.txt

Besides meta robots tag, Slim SEO also changes the content of the `robots.txt` to better support SEO.

:::info
If you don't install WordPress in a subfolder, e.g. your website is example.com, WordPress automatically creates a virtual `robots.txt` file for you. This file is not available and can't be seen if you browse your website via a file manager (in cPanel, FTP, or SSH).
:::

What Slim SEO does is:

- Add rules to block search engine robots to crawl internal search pages. This will help you save bandwidth and [reduce the crawl budget](https://developers.google.com/search/docs/crawling-indexing/large-site-managing-crawl-budget#hide_urls).
- Add sitemap URL to the `robots.txt` file to let search engines know where is your sitemap and can crawl all URLs of your site.

Your `robots.txt` will look like this (highlighted lines are added by Slim SEO):

```
User-agent: *
Disallow: /wp-admin/
// highlight-start
Disallow: /?s=
Disallow: /page/*/?s=
Disallow: /search/
// highlight-end
Allow: /wp-admin/admin-ajax.php

// highlight-next-line
Sitemap: http://ss.test/sitemap.xml
```

If you want to change the disallow rules added by Slim SEO, use the following snippet:

```php
add_filter( 'slim_seo_robots_txt', function( $content ) {
    // Your custom rule.
    $content .= "Disallow: /page/search/*\n";
    return $content;
}
```

Please note that you can't filter the rule for sitemap. You can either enable or disable it by enable or disable the sitemap feature from the Slim SEO's settings page.