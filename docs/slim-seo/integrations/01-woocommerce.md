---
title: Slim SEO - WooCommerce Integration
sidebar_label: WooCommerce
---

**WooCommerce** is a powerful and flexible e-commerce solution for WordPress, enabling businesses of all sizes to create and manage an online store with ease. With its extensive range of features and customizable options, WooCommerce provides a seamless shopping experience for customers while offering store owners complete control over their products, pricing, and inventory.

If you're a Slim SEO user, you'll have a full integration with WooCommerce, that helps you improve your shop's SEO performance.

## Adding WooCommerce dynamic variables to your meta tags

As you know, Slim SEO has a powerful meta tags configuration with [dynamic variables](/slim-seo/dynamic-variables/). This feature allows you to customize meta tags like title and description with variables that can change values depending on various contexts.

Now you can select dynamic variables from WooCommerce for meta tags as shown below:

![WooCommerce variables](https://i0.wp.com/images.elightup.com/slim-seo/docs/slim-seo/woocommerce-variables.png)

List of supported variables:

- Price
- Price including tax
- Sale price date "From"
- Sale price date "To"
- SKU
- Stock status
- Currency
- Rating value
- Review count
- Low price (variable product)
- High price (variable product)
- Offer count (variable product)

## Adding Pinterest pins for products

Pinterest is a powerful platform for product marketing, as it acts like a visual search engine where users discover and save ideas. Optimizing [Pinterest rich pins](https://help.pinterest.com/en/business/article/rich-pins) for products can drive traffic to your website and increase conversions.

Thanks to Slim SEO, you don't need to worry about Pinterest rich pins. The plugin automatically does that for you. Slim SEO auto adds the following [Open Graph tags](/slim-seo/facebook-open-graph-tags/) to the product page:

```html
<meta property="og:type" content="product">
<meta property="product:price:amount" content="...">
<meta property="product:price:currency" content="...">
<meta property="og:price:standard_amount" content="...">
<meta property="og:availability" content="...">
```

## Improved breadcrumbs

By default, WooCommerce has a breadcrumb feature. But that works only on shop pages (shop categories and products). If you prefer an unified breadcrumbs that works anywhere, then you can use Slim SEO [breadcrumbs](/slim-seo/breadcrumbs/) feature.

Slim SEO automatically detects WooCommerce page, and adjust its breadcrumbs accordingly to show correct information. Here are some examples:

```html
Home > Shop
Home > Shop > Category
Home > Shop > Category > Product
```

## Miscellaneous

WooCommerce has various shortcodes and dynamic blocks for displaying content of cart, checkout, and my account pages. Those pages are dynamic, and sometimes they handle logic like changing quantity of a product.

And because these pages don't need to be ranked in search engines, Slim SEO automatically don't parse content of them to generate [meta description](/slim-seo/meta-description-tag/). This also avoids a lot of issues when rendering these pages, especially with page builder plugins.