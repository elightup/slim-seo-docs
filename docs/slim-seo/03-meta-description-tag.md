---
title: Meta Description Tag
---

The meta description tag is automatically generated from the post/page excerpt or post/page content (in case you don't enter an excerpt).

Note that WordPress doesn't support excerpt for pages. Slim SEO fixes this by adding excerpt to pages, so you can enter custom excerpt for pages.

- For homepage, if you set it as a static page, then the plugin treats it like a normal page.
- For categories, post tags or custom taxonomies, their description will be used as meta description.

The meta description will be normalized by stripping all the HTML tags, white spaces.

The plugin also **parses shortcodes** (in case you use shortcodes in the post content or use a [page builder plugin](https://metabox.io/best-wordpress-page-builders/) to build your page). This is _different_ from other SEO plugins, which don't parse shortcodes from post content.

The [recommended length](https://moz.com/learn/seo/meta-description) for the meta description is **50-160 characters**. So, if the description is longer than 160 characters, it will be truncated to 160 characters.

## How to change meta description manually?

If you want to set custom meta description for a specific post or term, simply enter the text in the **Search Engine Optimization** meta box below the content area:

![Edit meta description manually in Slim SEO](https://i.imgur.com/D0DdbxS.png)

You'll see the status icon showing if the description has a good length. Note that, the manual meta description is not truncated. It's always shown as it is.

_As the plugin supports shortcodes, you can simply add your own shortcodes here to output your custom dynamic content._

## How to change the meta description?

If you want to change the meta description, please use the `slim_seo_meta_description` filter.

The following code change the description of a post with ID = 24. The description is set via a custom field:

```
add_filter( 'slim_seo_meta_description', function ( $description ){
    if ( is_single( 24 ) ) {
        $description = get_post_meta( get_the_ID(), 'field_id', true );
    }
    return $description;
} );
```

Note that using filter will have the highest priority, e.g. it will overwrite the meta description you enter manually. To avoid that, you can check if the post has manual meta description and change the description only when it doesn't:

```
add_filter( 'slim_seo_meta_description', function( $description ) {
    // Detect if a single post has manual meta description.
    if ( is_singular() ) {
        $slim_meta = get_post_meta( get_the_ID(), 'slim_seo', true );
        if ( ! empty( $slim_meta['description'] ) ) {
            return $slim_meta['description'];
        }
    }

    // Change the meta description in other cases;

    return $description;
} );
```

_Please note that if you set your homepage as a static page, then the plugin treats it like a normal page._

## How to hide SEO columns

By default, the plugin shows custom meta title and meta description in the admin post and term table. There are two ways to hide these columns:

### Toggle the screen options

Click the **Screen Options** button at the top right corner of the screen and toggle the checkboxes for Meta title and Meta description:

![Toggle columns via screen options](https://i.imgur.com/N9oTreN.png)

This way, you show or hide the columns for the current user only. It's not applied to all users.

### Hide the columns completely with code

To hide the columns completely for all users, please use this snippet:

```
// Hide for 'post'
add_filter( 'manage_post_posts_columns', 'prefix_hide_seo_columns', 20 );
// Hide for a post type 'movie'
add_filter( 'manage_movie_posts_columns', 'prefix_hide_seo_columns', 20 );

// Hide for 'category'
add_filter( 'manage_edit-category_columns', 'prefix_hide_seo_columns', 20 );
// Hide for a custom taxonomy 'product_cat'
add_filter( 'manage_edit-product_cat_columns', 'prefix_hide_seo_columns', 20 );

function prefix_hide_seo_columns( $columns ) {
	unset( $columns['meta_title'] );
	unset( $columns['meta_description'] );
	return $columns;
}
```

## How to hide SEO settings meta box for non-admin users?

In some cases, where you want only admins can change the meta title, meta description or other SEO settings, then use this snippet to hide the SEO settings meta box from other user roles:

```
// Hide SEO settings meta box for posts.
add_action( 'add_meta_boxes', function() {
	if ( current_user_can( 'manage_options' ) ) {
		return;
	}

	$context  = apply_filters( 'slim_seo_meta_box_context', 'normal' );
	remove_meta_box( 'slim-seo', null, $context );
}, 20 );

// Hide SEO settings meta box for terms.
add_action( 'init', function() {
	if ( current_user_can( 'manage_options' ) ) {
		return;
	}

	global $wp_filter;
	$hook = $wp_filter['init'];
	$callbacks = $hook->callbacks[99];
	foreach ( $callbacks as $callback ) {
		if ( ! is_array( $callback['function'] ) ) {
			continue;
		}
		$function = $callback['function'];
		if (
			$function[0] instanceof \SlimSEO\MetaTags\Settings\Term &&
			$function[1] === 'register_hooks'
		) {
			remove_action( 'init', $function, 99 );
			return;
		}
	}
} );
```
