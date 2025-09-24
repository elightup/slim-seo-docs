---
title: Hooks
---

Slim SEO Pro provides some hooks for developers to extend the functionality of the plugin.

## Filters

### `slim_seo_link_manager_post_types`

This hook was removed in Slim SEO Pro 1.4.3 because you can exclude post types via UI in the plugin settings page, under Settings > Slim SEO > Link Manager > Settings.

### `slim_seo_link_manager_link_suggestions_args`

This filter allows you to change the post query for getting [suggested posts](/slim-seo-pro/link-manager/post-links/#link-suggestions).

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

### `slim_seo_link_manager_post_custom_fields`

This filter allows you to add custom fields' content to the plugin's scanner.

```php
add_filter( 'slim_seo_link_manager_post_custom_fields', function( $fields ) {
	$fields[] = 'my-text-field';
	return $fields;
} );
```

After running this filter, the plugin will get the content of the custom field (in the example above, the meta key of the custom field is `my-text-field`) and analyze that content to find links and add to the reports.

### `slim_seo_link_manager_process_url`

This filter allows you to bypass a URL, e.g. not including it in the reports. It's helpful if you want to keep the reports clean and don't want it to contain links like affiliate links.

```php
add_filter( 'slim_seo_link_manager_process_url', function( $process, $url ) {
	if ( strpos( $url, 'amz.co' ) !== false ) {
		$process = false;
	}
	return $process;
} );
```

### `slim_seo_link_manager_text`

This filter allows you to change the content to be analyzed for links. Normally it's the post content, but you can add anything you want (like custom static text, or content from a complex custom field group).

```php
add_filter( 'slim_seo_link_manager_text', function( $text, $post_id ) {
	// Your custom text that you want to add to the analyzer.
	$your_text = '';


	$text .= $your_text;
	return $text;
}, 20, 2 );
```
