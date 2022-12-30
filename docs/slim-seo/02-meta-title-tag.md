---
title: Meta Title Tag
---

You don't need to configure meta title tag. WordPress already has this featured! All we need to do is add theme support for `title-tag`.

```php
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

![Edit meta title and meta description](https://i.imgur.com/D0DdbxS.png)

You'll see the status icon showing if the description has a good length. The meta title should not be longer than **60 characters**.

:::tip Shortcodes are allowed

Slim SEO supports shortcodes in the meta title and meta description, you can add your own shortcodes here to output your custom dynamic content.

:::

:::caution Manual meta title

When you enter the manual meta title, they'll be used as they are. They won't be appended with the site title.

:::

:::caution Homepage settings

If you set your homepage as a static page, then the plugin treats it like a normal page. SEO settings for the homepage won't be available in the plugin settings (**Settings > Slim SEO**). Instead, they will be available below the editor when you edit the homepage.

:::

## How to change the meta title with code?

If you want to change the title, please use the `slim_seo_meta_title` filter.

The following code changes the meta title for a single post with ID = 24. The title is get via a custom field:

```php
add_filter( 'slim_seo_meta_title', function( $title ) {
    if ( is_single( 24 ) ) {
        $title = get_post_meta( get_the_ID(), 'field_id', true );
    }
    return $title;
} );
```

Note that using filter will have the highest priority, e.g. it will overwrite the meta title you enter manually. To avoid that, you can check if the post has manual meta title and change the title only when it doesn't:

```php
add_filter( 'slim_seo_meta_title', function( $title ) {
    if ( is_single( 24 ) ) {
		// Detect if a single post has manual meta title.
        $meta = get_post_meta( get_the_ID(), 'slim_seo', true );
        if ( ! empty( $meta['title'] ) ) {
            return $meta['title'];
        }

		$title = get_post_meta( get_the_ID(), 'field_id', true );
    }

    return $title;
} );
```

## How to auto append site title to the manual meta title

When entering meta title, the plugin uses that meta title "as it is". It doesn't append the " - Site title" part at the end, so you might need to enter that manually to keep the format "Page title - Site title". In case you want to do that automatically, please use this code snippet:

```php
add_filter( 'slim_seo_meta_title', function( $title ) {
    if ( ! is_singular() ) {
        return $title;
    }
    $meta = get_post_meta( get_the_ID(), 'slim_seo', true );
    return empty( $meta['title'] ) ? $title : $meta['title'] . ' - ' . get_bloginfo( 'name' );
} );
```

## How to change the separator in the meta title?

By default, WordPress uses a dash (-) as the separator in the meta title. To change that, please use this snippet:

```php
add_filter( 'document_title_separator', function() {
    return '|'; // Replace with your custom separator.
} );
```

## How to reverse the order of site title and page title?

By default, WordPress and Slim SEO shows the "Page title - Site title" for all pages except the front page. If you want to reverse this order to put the site title first, please use this snippet:

```php
add_filter( 'document_title_parts', function( $parts ) {
	return is_front_page() ? $parts : array_filter( [
		'site'  => $parts['site'],
		'title' => $parts['title'],
		'page'  => $parts['page'] ?? '',
	] );
} );

// For preview in the admin.
add_filter( 'slim_seo_title_parts', function( $parts, $type ) {
	return $type === 'home' ? $parts : [ 'site', 'title' ];
}, 10, 2 );
```

## How to hide SEO columns

By default, the plugin shows custom meta title and meta description in the admin post and term table. There are two ways to hide these columns:

### Toggle the screen options

Click the **Screen Options** button at the top right corner of the screen and toggle the checkboxes for Meta title and Meta description:

![Toggle columns via screen options](https://i.imgur.com/N9oTreN.png)

This way, you show or hide the columns for the current user only. It's not applied to all users.

### Hide the columns with code

To hide the columns completely for all users, please use this snippet:

```php
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

```php
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
