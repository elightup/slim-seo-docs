---
title: Adding Schemas
---

## What is a schema?

A schema is a way to provide [structured data](https://developers.google.com/search/docs/guides/intro-structured-data) that helps search engines better understand your content. With structured data, search engines can display richer results - like event details, ratings, or product information - directly in search results.

For example, on an event page, you can use a schema to specify the event's date, location, and other details. Slim SEO Pro formats this data correctly so search engines can interpret it easily.

In WordPress, schemas are often tied to post types (e.g. an "event" schema for event posts). With Slim SEO Pro, you can go further and control exactly where each schema is applied using flexible conditions.

## Adding a new schema

To create a schema, click the **+ Add Schema** button. A popup will appear where you can browse or search for a schema by name.

![Add a new schema](https://imgur.elightup.com/9Lghqac.png)

Click a schema to add it. Schemas are grouped similarly to the [Google Search Gallery](https://developers.google.com/search/docs/advanced/structured-data/search-gallery), making them easier to find.

Once added, you can:

- Click the title or arrow icon to expand/collapse the schema details
- Click the trash icon to remove the schema (with confirmation)

![Toggle the schema details or remove it](https://imgur.elightup.com/9jHVNx8.png)

## Properties

Each schema includes a set of properties that define its details.

Slim SEO Pro follows standards from Google and schema.org to provide a comprehensive list of properties, helping you supply as much useful information as possible.

There're two types of properties:

- **Required**: Must be filled in (marked with a red asterisk *)
- **Optional**: Recommended, but not required

To keep things simple, some optional properties are hidden by default. Click **+ Add property** at the bottom to reveal more.

![Schema properties](https://imgur.elightup.com/2g9amcU.png)

Most fields are pre-filled with sensible defaults to save you time, but you can customize them as needed.

:::info Shortcodes

You can use shortcodes in property values. Slim SEO Pro will process them and use their output as the final value.

:::

You can also insert dynamic data (like post title, author name, etc.). Click the **Insert** button next to a field to choose from available variables.

![Insert dynamic data for properties](https://imgur.elightup.com/AjPAPBc.png)

See more details in [dynamic variables](/slim-seo-pro/schema/dynamic-variables/).

## Location

Schemas can be applied conditionally, giving you full control over where they appear.

Open the **Location** tab in a schema panel:

![Set location rules for a schema](https://imgur.elightup.com/cNw25MP.png)

### Location types

- **Singular**: Applies to individual posts/pages
- **Archive**: Applies to archive pages (categories, tags, etc.)
- **Code**: Applies based on custom PHP logic (advanced)

### Rule groups

For **Singular** and **Archive**, click **Add Rule Group** to define conditions.

![Rule groups and rules](https://imgur.elightup.com/wmr7tiZ.png)

Each group contains multiple rules. The logic works like this:

- If **any rule** in a group is true → the group is true
- If **all groups** are true → the schema is applied

Rules let you target:

- All posts of a post type
- Specific posts
- Specific terms (categories, tags, etc.)

### Using code (advanced)

If you select **Code**, you can define custom logic using PHP:

![Define locations with code](https://imgur.elightup.com/mgDaRY3.png)

Enter any PHP expression (without `<?php ?>`) that returns `true` or `false`.

We recommend using [WordPress conditional tags](https://developer.wordpress.org/themes/basics/conditional-tags/) for this.

## Hooks

Developers can programmatically register schemas using the `slim_seo_schema_settings` filter:

```php
add_filter( 'slim_seo_schema_settings', function( array $schemas ): array {
	$schemas[ 'unique_schema_id' ] = [
		'type'   => 'Brand',
		'active' => true,
		'fields' => [
			'name' => '{{ site.title }}',
		],
		'location' => [
			'type'               => 'singular',
			'singular_locations' => [
				'unique_group_id' => [
					'unique_rule_id' => [
						'name'  => 'product:post',
						'value' => 'all',
						'label' => 'All',
					]
				],
			],
		],
	];
	
	return $schemas;
} );
```

The schema format is the same as the exported JSON. A good workflow is:

- Create a schema in the UI
- Export it to JSON
- Use that structure in your code

You can also use [dynamic variables](/slim-seo-pro/schema/dynamic-variables/) in schema properties.