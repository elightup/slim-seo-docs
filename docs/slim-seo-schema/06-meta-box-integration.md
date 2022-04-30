---
title: Meta Box Integration
---

Slim SEO Schema has a deep integration with [Meta Box](https://metabox.io). The integration allows you to insert Meta Box fields into schema properties easily. It works with cloneable fields and groups.

## Inserting Meta Box fields

Click the three-dots button for a property to insert [dynamic variables](https://wpslimseo.com/docs/dynamic-variables/), all field groups registered in Meta Box will display:

![inserting meta box fields](https://i.imgur.com/i6NepXU.png)

In the dropdown panel, select a field you want to insert and click on it. The dynamic variable of the field will be inserted in the input box.

Dynamic variables for Meta Box fields have the following format:

```
{{ mb.field_group_id.field_id }}
```

## Inserting sub-group fields

Inserting sub-group fields has no difference from inserting normal fields. Simply select it from the list. Slim SEO Schema already formats sub-fields indented for you to easily know which fields are group and which fields are sub-fields.

In the screenshot above, Price, Currency, and Valid until are sub-fields of the group Offers.

![inserting sub-group fields](https://i.imgur.com/0dVI84m.png)

The format of dynamic variables for sub-fields is:

```
{{ mb.field_group_id.group_id.sub_field_id }}
```

## Cloneable fields

You might wonder how the plugin works with cloneable fields as they have multiple values. Slim SEO Schema automatically decides how to render multiple values in various scenarios like this (without your further actions):

- If the property is **not repeatable**, the plugin will **take only the first value** from the field, e.g. the value of the first clone.
- If the property is **repeatable** (like Image), the plugin will **take all values** from the field and merge them with manually entered values (if any).

In case you have a **repeatable property that also has sub-properties** like Review:

![repeatable property](https://i.imgur.com/Tvbn8pw.png)

When you insert sub-fields from a cloneable group (like inserting Name and Value from the cloneable group Reviews in the screenshot above), the plugin will automatically **take values of sub-fields for each clone** of the group.

For example, if you enter the value for Reviews for a post like this:

![enter value for posts](https://i.imgur.com/pIrrMAG.png)

Enter values for Meta Box fields for a post

Then when parsing these fields for the Review schema, you'll have 3 reviews:

- One manual: from the post author with value of 5
- Two from Meta Box: Robert with value of 5 and Mandy with value of 4

## Field values

- The plugin don't parse values for 'background', 'fieldset\_text', 'text\_list', 'map', 'osm', 'sidebar' because their values are not suitable for a schema property.
- For choice fields (radio, select, button group), the plugin uses the selected label, not value.
- For image and file field types, the plugin uses the URL.
- For post, taxonomy, taxonomy advanced, the plugin uses the title.
- For user, the plugin uses the user display name.
