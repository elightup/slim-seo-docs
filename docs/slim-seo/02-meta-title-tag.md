---
title: Meta Title Tag
---

You don't need to configure meta title tag. WordPress already has this featured! All we need to do is add theme support for `title-tag`.

```
add_theme_support( 'title-tag' );
```

We already do that hundreds times while coding themes. And WordPress does its job pretty well.

So, with Slim SEO, this feature is automatically enabled.

The title tag will have the following format:

- For homepage: Site title – Site description
- For singular pages/posts: Page/Post title – Site title
- For other pages: Page title – Site title

## How to change meta title manually?

If you want to set custom meta title for a specific post or term, simply enter the text in the **Search Engine Optimization** meta box below the content area:

![](https://i.imgur.com/D0DdbxS.png)

You'll see the status icon showing if the description has a good length. The meta title should not be longer than **60 characters**.

Note that, the manual meta title is not truncated. It's always shown as it is.

_As the plugin supports shortcodes, you can simply add your own shortcodes here to output your custom dynamic content._

## How to change the meta title with code?

If you want to change the title, please use the `slim_seo_meta_title` filter.

The following code changes the meta title for a single post with ID = 24. The title is get via a custom field:

```
add_filter( 'slim_seo_meta_title', function( $title ) {
    if ( is_single( 24 ) ) {
        $title = get_post_meta( get_the_ID(), 'field_id', true );
    }
    return $title;
} );
```

Note that using filter will have the highest priority, e.g. it will overwrite the meta title you enter manually. To avoid that, you can check if the post has manual meta title and change the title only when it doesn't:

```
add_filter( 'slim_seo_meta_title', function( $title ) {
    // Detect if a single post has manual meta title.
    if ( is_singular() ) {
        $slim_meta = get_post_meta( get_the_ID(), 'slim_seo', true );
        if ( ! empty( $slim_meta['title'] ) ) {
            return $slim_meta['title'];
        }
    }

    // Change the meta title in other cases;

    return $title;
} );
```

_Please note that if you set your homepage as a static page, then the plugin treats it like a normal page._

## How to auto append site title to the manual meta title

When entering meta title, the plugin uses that meta title "as it is". It doesn't append the " - Site title" part at the end, so you might need to enter that manually to keep the format "Page title - Site title". In case you want to do that automatically, please use this code snippet:

```
add_filter( 'slim_seo_meta_title', function( $title ) {
    if ( ! is_singular() ) {
        return $title;
    }
    $slim_seo = get_post_meta( get_the_ID(), 'slim_seo', true );
    if ( empty( $slim_seo['title'] ) ) {
        return $title;
    }
    return $slim_seo['title'] . ' - ' . get_bloginfo( 'name' );
} );
```

## How to change the separator in the meta title?

By default, WordPress uses a dash (-) as the separator in the meta title. To change that, please use this snippet:

```
add_filter( 'document_title_separator', function() {
    return '|'; // Replace with your custom separator.
} );
```

## How to reverse the order of site title and page title?

By default, WordPress and Slim SEO shows the "Page title - Site title" for all pages except the front page. If you want to reverse this order to put the site title first, please use this snippet:

```
add_filter( 'document_title_parts', function( $parts ) {
	if ( is_front_page() ) {
		return $parts;
	}

	$parts = array_merge( [
		'tagline' => '',
		'page'    => '',
		'site'    => '',
	], $parts );

	return array_filter( [
		'site'    => $parts['site'],
		'tagline' => $parts['tagline'],
		'title'   => $parts['title'],
		'page'    => $parts['page'],
	] );
} );
```

## How to hide SEO columns

By default, the plugin shows custom meta title and meta description in the admin post and term table. There are two ways to hide these columns:

### Toggle the screen options

Click the **Screen Options** button at the top right corner of the screen and toggle the checkboxes for Meta title and Meta description:

![](https://i.imgur.com/N9oTreN.png)

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
