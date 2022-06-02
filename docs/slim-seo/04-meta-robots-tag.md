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

```
add_filter( 'slim_seo_robots_index', function( $value ) {
    if ( is_singular( 'your_cpt' ) ) {
        return false;
    }
    return $value;
} );
```

## How to disable archive pages from being indexed?

To disable some archive pages from being indexed, please use the following snippet (remember to update the conditions to match your need):

```
add_filter( 'slim_seo_robots_index', function( $value ) {
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
} );
```

## Large image preview

By default, Slim SEO enables large image preview on SERPs (search engine result pages). This is recommended [by Google](https://developers.google.com/search/blog/2019/09/more-controls-on-search) to encourage users click to go to the website, thus, increase CTR (click-through-rate). You don't need to do anything about this as the plugin automatically handles this for you.
