---
title: Adding Schemas
---

## What is a schema?

Schema is the best way to describe [structured data](https://developers.google.com/search/docs/guides/intro-structured-data) for search engines. Based on the data provided, search engines can show the content on the search results page in a more appealing way.

For example, if you're on an event page, you can use schema to tell search engines what the event location is, and what the event date is. All event details can be described in a proper format (which is handled by the plugin) so that search engines can understand.

Usually, in WordPress, a schema is used with a post type (like "event" in the example above) to describe it verbosely. With Slim SEO Schema, you can set more conditions to where a schema is applied.

So, let's started!

## Adding a new schema

To add a new schema, click the **\+ Add Schema** button. A popup will display that lets you choose a needed schema. You can search schemas by title as well:

![Add a new schema](https://i.imgur.com/9Lghqac.png)

Add a new schema

To add a schema, simply click the schema title from the list. All schemas are categorized the same way as in the [Google search gallery](https://developers.google.com/search/docs/advanced/structured-data/search-gallery) which helps you find them easier.

Once you selected a schema, it's added to the list. There are a few actions you can do with a schema:

- To expand/collapse the schema details, click the title bar or the up/down arrow
- To remove the schema, click the trash icon. A confirmation will appear to ask you whether you're sure to remove it.

![Toggle the schema details or remove it](https://i.imgur.com/9jHVNx8.png)

Toggle the schema details or remove it

## Properties

Each schema has a list of properties, which define the detailed information for that schema. Slim SEO Schema follows the guidelines from Google and schema.org to give you the most comprehensive list of properties for your website. That ensures you provide details to search engines as much as possible.

There're two types of properties:

- **Required**: which is required by Google. These properties are marked with a red asterisk next to its label.
- **Optional**: which is not required by Google but is recommended. These properties are not marked with anything.

Besides, some optional properties are kept **hidden** (just to make you're not lost in a long list of properties!). To show them, click the **\+ Add property** at the bottom of the panel.

![Schema properties](https://i.imgur.com/2g9amcU.png)

Schema properties

Most properties are auto-filled with default values to save you time to enter or select values for them. You can manually enter data for properties and also can enter **shortcodes** in the input. Slim SEO Schema will parse the shortcodes for you.

Besides, Slim SEO Schema supports **dynamic data** for properties (such as post title, author name, etc.). To insert dynamic data, click the the **Insert** button next to the input.

![Insert dynamic data for properties](https://i.imgur.com/AjPAPBc.png)

Insert dynamic data for properties

When clicking the **Insert** button, you'll see a popup with a list of supported dynamic variables for properties. You can search for them (by title) or simply click any of them to insert into the property value input box.

Learn more about [dynamic variables](/slim-seo-schema/dynamic-variables/).

## Location

Each schema can be implemented for a post type or for posts in a specific category. There are various location rules that you can flexibly use to define where the schema is for.

To define location rules, switch to the **Location** tab in a schema panel:

![Set location rules for a schema](https://i.imgur.com/cNw25MP.png)

Set location rules for a schema

You'll see 2 options in that tab:

- **Type:** the location type, which can be singular, archive or code.
    - **Singular:** The schema is applied for singular pages only
    - **Archive:** The schema is applied for archive pages only
    - **Code:** The schema is applied for pages where the code returns true. This is for advanced users who knows coding. See below for details.
- **Location:** The specific rules for singular and archive type.

If you choose singular or archive type, you need to click the **Add Rule Group** button to add a rule group. Each rule group contains a set of rules:

![](https://i.imgur.com/wmr7tiZ.png)

Rule groups and rules

For each rule, you can set to display the schema for any post type, or some specific posts as well as for specific terms (categories, tags).

The logic is applied as follows:

- If **any** rule in a group is true, then the whole group is true.
- If **all** groups are true, then the final result is true.

If you use **code** to define whether the schema is displayed, then you'll see an input box to enter your PHP code:

![Define locations with code](https://i.imgur.com/mgDaRY3.png)

Define locations with code

In the box, you can run any PHP code (without opening and closing PHP tags) that returns true or false. When it returns true, the schema is displayed. We recommend using [WordPress conditional tags](https://developer.wordpress.org/themes/basics/conditional-tags/) to set conditions here.
