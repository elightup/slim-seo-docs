---
title: Slim SEO Pro - WooCommerce Integration
sidebar_label: WooCommerce
---

:::info

Slim SEO Pro **disables product schema from WooCommerce** and adds many [dynamic variables](/slim-seo-pro/schema/dynamic-variables/) for products. It also creates location rules for product types.

:::

WooCommerce actually adds a basic schema for simple and variable products. It's the **basic version of the Product schema** that you can read from [its source code](https://github.com/woocommerce/woocommerce/blob/trunk/plugins/woocommerce/includes/class-wc-structured-data.php). It contains product name, price and reviews only.

Of course, this is not enough for a Product. It lacks a lot of data which the [Product schema](https://schema.org/Product) provides, like brand, color, size, logo, manufacturer, model, country of origin, or some global identifiers. If you go with the default schema of WooCommerce, you might miss the chance to rank better for your products.

Slim SEO Pro solves this problem by offering you the ability to **fill in all the properties of the Product schema**. It also allows you to [connect to other schemas](/slim-seo-pro/schema/connecting-schemas/) to build even more detailed schema graph:

![Product schema](../img/product-schema.png)

Of course, you can connect the Product properties with WooCommerce's values via [dynamic variables](/slim-seo-pro/schema/dynamic-variables/).

![WooCommerce dynamic variables](../img/woocommerce-dynamic-variables.png)

Slim SEO Pro also adds a location rule for product type, so you can build multiple Product schemas and assign them to each produc type:

![Product type rules](../img/product-type-rules.png)

