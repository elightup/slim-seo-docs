---
title: Advanced Custom Fields Integration
---

Slim SEO Schema has a deep integration with [Advanced Custom Fields (ACF)](https://www.advancedcustomfields.com/). The integration allows you to insert ACF fields into schema properties easily. It works with normal fields, groups, repeaters and flexible content.

## Inserting ACF fields

Click the three-dots button for a property to insert [dynamic variables](/slim-seo-schema/dynamic-variables/), all field groups registered in ACF will display:

![Inserting ACF fields](https://i.imgur.com/xJwUezN.png)

In the dropdown panel, select a field you want to insert and click on it. The dynamic variable of the field will be inserted in the input box.

Dynamic variables for ACF fields have the following format:

```
{{ acf.field_name }}
```

## Inserting fields in a group

Inserting fields in a group (sub-fields) has no difference from inserting normal fields. Simply select it from the list. Slim SEO Schema already formats sub-fields indented for you to easily know which fields are group and which fields are sub-fields.

In the screenshot below, Price, Currency, and Valid until are sub-fields of the group Offers.

![Inserting sub-fields](https://i.imgur.com/fappenm.png)

The format of dynamic variables for sub-fields is:

```
{{ acf.group_name.field_name }}
```

## Repeater fields

You might wonder how the plugin works with repeater fields as they have multiple values. Slim SEO Schema automatically decides how to render multiple values in various scenarios like this (without your further actions):

- If the property is **not repeatable**, the plugin will **take only the first value** from the field, e.g. the value of the first clone.
- If the property is **repeatable** (like Image), the plugin will **take all values** from the field and merge them with manually entered values (if any).

In case you have a **repeatable property that also has sub-properties** like Review:

![Repeatable property](https://i.imgur.com/Z19AknN.png)

When you insert sub-fields from a repeater (like inserting Name and Value from the repeater field Reviews in the screenshot above), the plugin will automatically **take values of sub-fields for each clone** of the repeater.

For example, if you enter the value for Reviews for a post like this:

![Enter value for posts](https://i.imgur.com/17aToKZ.png)

Enter values for ACF fields for a post

Then when parsing these fields for the Review schema, you'll have 3 reviews:

- One manual: from the post author with value of 5
- Two from ACF: Robert with value of 5 and Mandy with value of 4

## Inserting fields in a flexible content

Inserting fields in a flexible content field type has no difference from inserting fields in a group. 

In the screenshot below, country is a sub-field of the flexible content Stores.

![Inserting sub-fields of a flexible content field type](https://i.imgur.com/nsqkG6C.png)

The format of dynamic variables for sub-fields in flexible content is:

```
{{ acf.flexible_content_name.layout_name.group_name.field_name }}
{{ acf.flexible_content_name.layout_name.field_name }}
```

## Field values

- The plugin don't parse values for 'google_map', 'message', 'accordion', 'tab', 'block' because their values are not suitable for a schema property.
- For choice fields (radio, select, checkbox, button group), the plugin uses the selected label, not value.
- For image and file field types, the plugin uses the URL.
- For post object, taxonomy the plugin uses the title.
- For user, the plugin uses the user display name.
