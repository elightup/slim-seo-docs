---
title: Slim SEO Pro - SEO Plugin Integrations
sidebar_label: SEO plugins
---

Slim SEO Pro works seamlessly with popular SEO plugins such as **Yoast SEO**, **Rank Math**, and of course, the free version of **Slim SEO**.

Most SEO plugins have a built-in feature to output their own schema in a unified **JSON-LD graph** on the front end. Slim SEO Pro enhances this functionality by making the JSON-LD graph richer and more informative. Here's how it works:

## Supported integrations

Slim SEO Pro provides direct integrations with:
- Slim SEO (free)
- Yoast SEO
- Rank Math

When you use Slim SEO Pro with any of these plugins and their **schema feature is enabled**, Slim SEO Pro will **merge** its schemas into their schema graph. This creates a single, unified JSON-LD graph on the front end — cleaner and more complete.

If you prefer to **disable the schema feature** in these plugins, Slim SEO Pro will step in and output only its own schemas on the front end.

## Unsupported plugins

For other SEO plugins such as **SEOPress** or **The SEO Framework**, Slim SEO Pro does **not** have built-in integrations. In these cases, both plugins will output their schemas separately. This means you'll see **two JSON-LD graphs** on the front end:
- One from Slim SEO Pro
- One from the other plugin

:::success

If you want a single unified schema graph, we recommend using Slim SEO Pro with Yoast SEO, Rank Math, or better with Slim SEO free for the best integration and compatibility.

:::