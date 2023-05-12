---
title: Hooks
---

Slim SEO Link Manager provides some hooks for developers to extend the functionality of the plugin.

## Filters

### `slim_seo_link_manager_post_types`

This filer allows you to ignore some post types when [scanning links](/slim-seo-link-manager/scanning-links/). It accepts one parameter - an array of allowed post type objects (with key is the post type slug and value is the post type object) and returns an array.

```php
add_filter( 'slim_seo_link_manager_post_types', function ( $post_types ) {
	unset( $post_types['movies'] );
	return $post_types;
} );
```

### `slim_seo_link_manager_link_suggestions_args`

This filter allows you to change the post query for getting [suggested posts](/slim-seo-link-manager/post-links/#link-suggestions).

```php
add_filter( 'slim_seo_link_manager_link_suggestions_args', function( $args ) {
	$args['cat'] = 12;
	return $args;
} );
```

### `slim_seo_link_manager_search_args`

This filter allows you to change the post query for searching posts.

```php
add_filter( 'slim_seo_link_manager_search_args', function( $args ) {
	$args['cat'] = 12;
	return $args;
} );
```
