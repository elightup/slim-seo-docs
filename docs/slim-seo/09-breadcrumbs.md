---
title: Breadcrumbs
---

## What are breadcrumbs?

Breadcrumbs are the secondary navigation that helps users understand where they are on the website. It's usually a single line of text that is located on the top of the page to show the page hierarchy. So users can easily know what the current page (like a product page) is and go back to a higher level page anytime (like a product category page).

Here is an example from the Adidas website:

![A sample of breadcrumbs in real life](https://i.imgur.com/C6QquQR.png)

Or you can see it at the top of this page:

```txt
Home » Slim SEO » Breadcrumbs
```

Each item in the breadcrumbs is a link, that describes the "steps" that users can follow (click) from the main page (homepage) to the current page. Whenever users want to go back to a previous step, they can simply click on these links.

:::info

The term "breadcrumbs" is borrowed from the tale of Hansel and Gretel where the kids drop a trail of breadcrumbs to trace their way back.

:::

## Why breadcrumbs are important for SEO?

Breadcrumbs help search engines understand the structure of your website. If the content on your website is organized hierarchically (which you should always do), then search engine spiders can easily navigate and index your pages by scanning links on each "step" of the breadcrumbs. This ensures search engines don't miss any links on the website.

Besides, breadcrumbs help connect all the pages on your website into a hierarchical graph. So no pages are orphaned (e.g. have no links to them) which always is a bad sign of SEO.

## How to add breadcrumbs to your website?

To add breadcrumbs to your website, Slim SEO provides the `[slim_seo_breadcrumbs]` shortcode. Using the shortcode, you can output the breadcrumbs anywhere in your theme.

:::success Accessibility

Accessibility is important for both users and SEO. So, in Slim SEO's breadcrumbs, we add `aria-*` attributes to ensure the breadcrumbs are more accessible to people with disabilities.

:::

### Shortcode attributes

The `[slim_seo_breadcrumbs]` shortcode has the following attributes (all are optional):

Attribute|Description
---|---
`separator`|The separator between breadcrumb items. Default `»`.
`display_current`|Whether or not to display the current page. Default `true`.
`taxonomy`|The taxonomy that you want to output in the breadcrumb trail when you're on a single post (or post type). Default `category`.
`label_home`|Label for the home item. Default `Home`.
`label_search`|Label for the search results page. Default `Search Results for “%s”`.
`label_404`|Label for 404 page. Default `Page not found`.

### Styling breadcrumbs

To make it easier to style breadcrumbs, the plugin uses some CSS classes:

- `breadcrumbs`: For the wrapper of the breadcrumbs.
- Each breadcrumb item has a class `breadcrumb`.
- The first and the last breadcrumb item have a class `breadcrumb--first` and `breadcrumb--last` correspondingly. It's very useful when you want to style the "Home" with an icon or something similar.
- Separator has a class `breadcrumbs__separator`.

Using these CSS classes, you can style every detail of the breadcrumb trail.

### Outputting breadcrumbs

If you want to output the breadcrumbs in your theme, add the following snippet in your theme file

```php
echo do_shortcode( '[slim_seo_breadcrumbs]' );
```

## Breadcrumbs schema

Slim SEO automatically creates [a schema](/slim-seo/schema/) for breadcrumbs in the JSON-LD format. It doesn't output the schema in the HTML output of the breadcrumb to avoid conflicts and make it easier for you to style.

The JSON-LD schema is always outputed regardless the breadcrumb shortcode is used. In case the shortcode is used, the breadcrumbs schema inherits all the settings in the shortcode. So if you output the shortcode in your theme, all links in the breadcrumbs are parsed, and the schema will use these links again.

If you want to disable the breadcrumb schema, please refer to [this documentation](/slim-seo/schema/#how-to-disable-a-specific-schema).

## Changing breadcrumbs attributes

If you use the breadcrumbs shortcode, you can change the breadcrumbs attributes easily by passing the attributes' values directly into the shortcode.

However, if you don't use the breadcrumbs shortcode to show the breadcrumbs on your site, the breadcrumbs will still be used in the schema. And there's no visual place to change the breadcrumbs' attributes.

In this case, you can use the `slim_seo_breadcrumbs_args` filter to change the breadcrumbs attributes. This filter accepts an array of breadcrumbs attributes. In the following snippet, we change the default taxonomy from `category` to `group` for a custom post type `service`:

```php
add_filter( 'slim_seo_breadcrumbs_args', function( $args ) {
	if ( is_singular( 'service' ) ) {
		$args['taxonomy'] = 'group';
	}
	return $args;
} );
```

## Add or remove a link from breadcrumbs

To add a link to the breadcrumbs, please use the `slim_seo_breadcrumbs_links` filter. It accepts an array of links in the breadcrumbs, each link is an array of `text` and `url`.

For example, if you're on a single post, the default breadcrumbs is "Home > Blog > Category > Post". If you want to add a new link "All Categories" between Blog and Category, then you can do this:

```php
add_filter( 'slim_seo_breadcrumbs_links', function( $links ) {
	// Only process single posts.
	if ( ! is_single() ) {
		return $links;
	}

	$new_links = [];
	foreach ( $links as $index => $link ) {
		$new_links[] = $link;

		// Append new item if the current link is "Blog", which has index = 1.
		if ( $index === 1 ) {
			$new_links[] = [
				'url' => 'https://domain.com/all-categories/',
				'text'=> 'All Categories',
			];
		}
	}

	return $new_links;
} );
```

Similarly, if you want to remove a link, you can use the same filter. The example below removes the "Blog" link from the breadcrumbs for single posts:

```php
add_filter( 'slim_seo_breadcrumbs_links', function( $links ) {
	// Only process single posts.
	if ( ! is_single() ) {
		return $links;
	}

	// Blog has the index 1.
	unset( $links[1] );

	return $links;
} );
```
