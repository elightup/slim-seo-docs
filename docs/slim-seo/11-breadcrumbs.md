---
title: Breadcrumbs
---

Slim SEO has the breadcrumbs support via the `[ slim_seo_breadcrumbs ]` shortcode. Using the shortcode, you can output the breadcrumb trail on your WordPress website easily.

**Note:** Please remove the extra spaces after `[` and before `]` when copy and paste the shortcode.

Slim SEO supports `aria-*` for breadcrumbs for better accessibility.

## Shortcode attributes

The `[ slim_seo_breadcrumbs ]` shortcode has the following attributes (all are optional):

- `separator`: The separator between breadcrumb items. Default `»`.
- `display_current`: Whether or not display the current page. Default `true`.
- `taxonomy`: The taxonomy that you want to output in the breadcrumb trail when you're on a single post (or post type). Default `category`.
- `label_home`: Label for home item. Default `Home`.
- `label_search`: Label for search results page. Default `Search Results for “%s”`.
- `label_404`: Label for 404 page. Default `Page not found`.

## Styling breadcrumbs

To make it easier to style breadcrumbs, the plugin uses some CSS classes:

- `breadcrumbs`: For the wrapper of the breadcrumbs.
- Each breadcrumb item has a class `breadcrumb`.
- The first and the last breadcrumb item has a class `breadcrumb--first` and `breadcrumb--last` correspondingly. It's very useful when you want to style the "Home" with icon or something similar.
- Separator has a class `breadcrumb__separator`.

Using these class, you're able to style every detail of the breadcrumb trail.

## Output breadcrumbs with PHP

If you want to output the breadcrumbs in your template with PHP, simply do this:

```
echo do_shortcode( '[ slim_seo_breadcrumbs ]' );
```
