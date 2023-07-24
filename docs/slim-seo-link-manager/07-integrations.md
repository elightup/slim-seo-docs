---
title: Integrations
---

Slim SEO Link Manager works nicely with most plugins. It allows you to analyze content from these plugins and give you correct reports for links.

## Plugins

### Page builder plugins

For page builder plugins, Slim SEO Link Manager gets content built with them and use this content for analyze internal and external links.

- **Beaver Builder**
- **Bricks Builder**
- **Divi**
- **Elementor**
- **Oxygen Builder**

### Custom fields plugins

Slim SEO Link Manager can also analyze content from custom fields. To enable this feature, you need to use the `slim_seo_link_manager_post_custom_fields` filter to add custom fields to the plugin.

```php
add_filter( 'slim_seo_link_manager_post_custom_fields', function( $fields ) {
	$fields[] = 'my-text-field';
	return $fields;
}
```

After running this filter, the plugin will get the content of the custom field (in the example above, the meta key of the custom field is `my-text-field`) and analyze that content to find links and add to the reports.

:::info

The filter `slim_seo_link_manager_post_custom_fields` works with simple text custom field. So, we recommend using a text custom field to enter your content. You can do it easily with plugins like ACF or [Meta Box](https://metabox.io).

:::

If you want to analyze links in a complex custom fields, like Meta Box's group or ACF's flexible content, please use the filter `slim_seo_link_manager_text`. This filter allows you to modify the text that's used to analyze for links.

```php
add_filter( 'slim_seo_link_manager_text', function( $text, $post_id ) {
	// Get your custom fields' values.
	$your_text = '';


	$text .= $your_text;
	return $text;
}, 20, 2 );
```

Here is an example using the filter to get content from ACF's flexible content:

```php
add_filter( 'slim_seo_link_manager_text', function( $text, $post_id ) {
	// Getting content from a flexible content group.
	$field_data = get_field( 'article_builder' );
	$result = [];
	array_walk_recursive( $field_data, function( $v ) use ( &$result ) {
		$result[] = $v;
	} );
	$your_text = implode( ' ', $result );

	$text.=$your_text;
	return $text;
}, 20, 2 );
```
