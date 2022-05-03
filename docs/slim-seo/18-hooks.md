---
title: Hooks
---

Slim SEO provides quite a lot of hooks for developers to extend the functionality of the plugin.

## Actions

### `slim_seo_init`

Fires after all plugin features are registered and before they run. Use this action to register or disable a feature. For example, please see [Disable Features](/slim-seo/disable-features/) docs.

### `slim_seo_sitemap_post` and `slim_seo_sitemap_term`

Fires after outputting entry for post or term in the sitemap XML. These actions accept one parameter (`$post` or `$term`). Use this action to output more data for the sitemap.

## Filters

### `slim_seo_breadcrumbs_links`

Filters links in the breadcrumbs, accepts one parameter - array of links. For example, if you want to remove "Blog" from breadcrumbs for posts (if you set a static page to display your blog), use this snippet:

```
add_filter( 'slim_seo_breadcrumbs_links', function( $links ) {
	if ( is_singular( 'post' ) ) {
		unset( $links[1] ); // $link[0] = Home, $link[1] = Blog, $link[2] = Category, $link[3] = Post.
	}
	return $links;
} );
```

### `slim_seo_canonical_url`

Changes the canonical URL, accepts one parameter - the URL.

### `slim_seo_meta_title`

Changes the meta title, accepts one parameter - the title text.

### `slim_seo_meta_description`

Changes the meta description, accepts one parameter - the description text.

### `slim_seo_meta_description_generated`

Changes the auto generated meta description. The meta description is auto generated from post content or post excerpt if no custom data is entered in the Search Engine Optimization meta box. Accepts one parameter - the description text.

### `slim_seo_skipped_shortcodes`

Filters the list of shortcodes that will be skipped when parse the content for meta title and meta description. It's helpful when you use a plugin that has a shortcode to do some logic (such as WooCommerce). Accepts one parameter - an array of shortcodes. See more at [Troubleshooting](/slim-seo/troubleshooting/).

### `slim_seo_open_graph_tags`

Filters the list of supported Open Graph tags, accepts one parameter - an array of Open Graph tags.

### `slim_seo_open_graph_{$short_name}`

Filters the value of an Open Graph tag. For example, this snippet below add an Open Graph tag and set its value:

```
add_filter( 'slim_seo_open_graph_tags', function( $tags ) {
	$tags[] = 'og:video';
	return $tags;
} );

add_filter( 'slim_seo_open_graph_video', function( $value, $tag ) {
	return 'https://mydomain.com/video.mp4';
}, 10, 2 );
```

Note that the `$short_name` is the tag name without prefix `og:` or `fb:`.

### `slim_seo_robots_index`

Changes the value of robots index, accepts one parameter - a boolean value indicating if the current page is indexed or not.

### `slim_seo_meta_box_context`

Changes the context of the Search Engine Optimization meta box, which can be `advanced`, `normal` (below post content) or `side` (on the sidebar). Accepts one parameter - the context value. Note that if your post type is using Gutenberg, then `advanced` and `normal` works exactly the same.

### `slim_seo_meta_box_priority`

Changes the priority of the Search Engine Optimization meta box, which can be `high`, `low`. The higher priority, the higher position of the meta box. Accepts one parameter - the priority value.

### `slim_seo_meta_box_post_types`

Changes the list of post types that show the Search Engine Optimization meta box. By default, the plugin shows the meta box for all public post types. Accepts one parameter - an array of post types.

### `slim_seo_meta_box_taxonomies`

Changes the list of taxonomies that show the Search Engine Optimization meta box. By default, the plugin shows the meta box for all public taxonomies. Accepts one parameter - an array of taxonomies.

### `slim_seo_schema_entities`

Filters the list of schema entities, accepts one parameter - an array of schema entities. For usage, please see [Schema](/slim-seo/schema/).

### `slim_seo_schema_graph`

Changes the array of schema graph, accepts one parameter - the array of schema graph before outputting as JSON.

### `slim_seo_schema_{$context}_enable`

Whether to enable a specific schema, the value must be a boolean. For usage, please see [Schema](/slim-seo/schema/).

### `slim_seo_schema_{$context}`

Changes the array of properties for a specific schema, accepts one parameter - the array of schema properties. For usage, please see [Schema](/slim-seo/schema/).

### `slim_seo_sitemap_post_types`

Filters the array of post types in the sitemap, accepts one parameter - an array of post types. By default, the plugin creates sitemap for all public post types. For usage, please see [XML Sitemap](/slim-seo/xml-sitemap/).

### `slim_seo_sitemap_taxonomies`

Filters the array of taxonomies in the sitemap, accepts one parameter - an array of taxonomies. By default, the plugin creates sitemap for all public taxonomies. For usage, please see [XML Sitemap](/slim-seo/xml-sitemap/).

### `slim_seo_sitemap_post_type_query_args`

Changes the query arguments of post types in the sitemap, accepts one parameter - an array of query arguments. For usage, please see [XML Sitemap](/slim-seo/xml-sitemap/).

### `slim_seo_taxonomy_query_args`

Changes the query arguments of taxonomies in the sitemap, accepts one parameter - an array of query arguments. For usage, please see [XML Sitemap](/slim-seo/xml-sitemap/).
