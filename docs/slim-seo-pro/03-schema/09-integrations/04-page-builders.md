---
title: Slim SEO Pro - Page Builder Integrations
sidebar_label: Page builders
---

Slim SEO Pro works well with popular page builders for WordPress. Below are tested and officially supported page builder plugins:

- **Beaver Builder**
- **Bricks Builder**
- **Breakdance**
- **Divi**
- **Elementor**
- **Oxygen Builder**
- **Zion Builder**

## How does it work with page builders?

Page builders allow you to build content and also layout of pages on your website. In case a page is built with a page builder, or its layout is designed with a page builder, Slim SEO Pro will render the content built with them and use this content for the dynamic variable `{{ post.content }}`. So you can use this dynamic variable for properties.

Please note that when parsing the content from page builders, the plugin tries to remove all the scripts, styles and also HTML tags, and keep only the content. Some page builders have very dynamic modules, widgets, or blocks that might not be useful for the content. The plugin will remove them automatically from the content. Some of them are:

- Bricks: audio, video, post-*, search, social icons, related-posts, etc.
- Oxygen: slider, code block, form
