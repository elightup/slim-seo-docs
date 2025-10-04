---
title: Dynamic Variables
---

Most properties are auto-filled with default values to save you time to enter or select values for them. You can manually enter data for them as well, but we recommend you use the **Insert** button to insert dynamic data for properties.

![Insert dynamic data for properties](https://imgur.elightup.com/AjPAPBc.png)

When clicking the **Insert** button, you'll see a popup with a list of supported **dynamic variables** for properties. You can search for them (by title) or simply click any of them to insert them into the property value input box.

Dynamic variables have the format `{{ name }}`, where `name` is the variable name. You can insert multiple dynamic variables and/or custom text in the text box for the property value.

## Supported variables

Below is the list of the dynamic variables supported by the plugin:

### Post variables

| Name | Description |
| --- | --- |
| `{{ post.title }}` | The post title |
| `{{ post.ID }}` | The post ID |
| `{{ post.excerpt }}` | The post excerpt |
| `{{ post.content }}` | The post content |
| `{{ post.url }}` | The post URL |
| `{{ post.slug }}` | The post slug |
| `{{ post.date }}` | The post published date |
| `{{ post.modified_date }}` | The post modified date |
| `{{ post.thumbnail }}` | The post thumbnail URL (full size) |
| `{{ post.comment_count }}` | The number of comments for the post |
| `{{ post.word_count }}` | The number of words of the post content |
| `{{ post.tags }}` | The post tags, separated by commas |
| `{{ post.categories }}` | The post categories, separated by commas |
| `{{ post.custom_field.$name }}` | The post custom field (meta) value. `$name` should be replaced by the meta key. |
| `{{ post.tax.$taxonomy }}` | The post terms of the taxonomy. `$taxonomy` should be replaced by the taxonomy slug. |

Note that when selecting the **Custom field** from the **Insert** dropdown, a popup will appear that lets you select the custom field to insert into the input box.

### Post author variables

| Name | Description |
| --- | --- |
| `{{ author.ID }}` | The author ID |
| `{{ author.first_name }}` | The author first name |
| `{{ author.last_name }}` | The author last name |
| `{{ author.display_name }}` | The author display name |
| `{{ author.username }}` | The author username |
| `{{ author.nickname }}` | The author nick name |
| `{{ author.email }}` | The author email |
| `{{ author.website_url }}` | The author website's URL |
| `{{ author.nicename }}` | The author nicename |
| `{{ author.description }}` | The author description (bio) |
| `{{ author.posts_url }}` | The URL to the author's archive page |
| `{{ author.avatar }}` | The URL to the author's (Gr)avatar |

### Term variables

When using a schema for an archive page (category/tax/term page), you can use term variables to show its information:

| Name | Description |
| --- | --- |
| `{{ term.ID }}` | The term ID |
| `{{ term.name }}` | The term name |
| `{{ term.slug }}` | The term slug |
| `{{ term.taxonomy }}` | The term taxonomy |
| `{{ term.description }}` | The term description |
| `{{ term.url }}` | The term URL |

### Current user variables

Current user variables are similar to the author variables. The only difference is that instead of the prefix `author`, it uses the `user` prefix.

For example: `{{ user.display_name }}` is the current user display name.

### Site variables

| Name | Description |
| --- | --- |
| `{{ site.title }}` | The site title |
| `{{ site.description }}` | The site description (tagline) |
| `{{ site.url }}` | The site URL |
| `{{ site.language }}` | The site language |
| `{{ site.icon }}` | The site icon URL |

### Current page variables

| Name | Description |
| --- | --- |
| `{{ current.title }}` | The current page title |
| `{{ current.url }}` | The current page URL |

## Creating custom dynamic variables

Besides the default list of supported dynamic variables, you can create your own variables for you and your clients, so you/they can select them from the dropdown.

### Registering variables

The first step to do that is to register a custom dynamic variable. To do that, use the `slim_seo_schema_variables` filter as follows:

```php
add_filter( 'slim_seo_schema_variables', function( $variables ) {
	// Add a group of 2 custom variables.
	$variables[] = [
		'label' => 'Custom group label', // Group label.
		'options' => [
			// List of group variables in the format: key => label.
			'variable1' => 'Label for variable1',
			'variable2' => 'Label for variable2',
		],
	];
	return $variables;
} );
```

The filter accepts one parameter `$variables` which is a list of groups of variables. Note that variables are organized in groups ("Site", "Post", etc.). When adding variables, you need to add a new custom group where `label` is its label, and a list of variables in that group, defined in the `options` parameter.

:::info

The variable key should be a simple text starting with alphabet characters like `variable1`. You can also use dots (.) to make it easier to read if you want, e.g. `my.variable`.

:::

### Parsing variables' values

After defining a variable, you can select it from the dropdown. However, when viewing it on the front end, you still see it as it is, e.g. it's just a static text, not a *dynamic* one.

To make it dynamic, you need to parse it. To do that, use the `slim_seo_schema_data` filter as follows:

```php
add_filter( 'slim_seo_schema_data', function( $data ) {
	$value1 = 'Do something to get the value';
	$data['variable1'] = $value1;

	$value2 = 'Another value';
	$data['my.variable'] = $value2;
} );
```

If your variable key contains dots (.), then you can "think" dots are separators of a nested array, where you can organize values in a nice format. For example, if you have 2 variables `my.variable1` and `my.variable2`, you can organize values as follows:

```php
add_filter( 'slim_seo_schema_data', function( $data ) {
	$value1 = 'Do something to get the value';
	$value2 = 'Another value';

	// my.variable1 and my.variable2 becomes a nested array.
	$data['my'] = [
		'variable1' => $value1,
		'variable2' => $value2,
	];
} );
```

## Dynamic variables and shortcodes

Besides dynamic variables, you can also use shortcodes for properties' values. Slim SEO Pro will automatically parse the shortcodes and use the returned value of the shortcodes for the properties values.

Using shortcodes has a benefit as it's familiar to most WordPress developers. Creating a shortcode is also easier than creating a dynamic variable. However, shortcodes are not available in the suggestion list. So, just pick a method that suits you.

