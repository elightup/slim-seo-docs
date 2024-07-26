---
title: Page Builder Integrations
sidebar_label: Page builders
---

Slim SEO Schema works well with popular page builders for WordPress. Below are tested  and officially supported page builders plugins:

- **Beaver Builder**
- **Bricks Builder**
- **Breakdance**
- **Divi**
- **Elementor**
- **Oxygen Builder**
- **Zion Builder**

## How does it work with page builders?

Page builders allow you to build content and also layout of pages on your website. In case a page is built with a page builder, or its layout is designed with page builder, Slim SEO Schema will renders the content built with them and use this content for the dynamic variable `{{ post.content }}`. So you can use this dynamic variable for properties.

Please note that when parsing the content from page builders, the plugin tries to remove all the scripts, styles and also HTML tags, and keep only the content. Some page builders have very dynamic modules/widgets/blocks that might be not useful for the content, the plugin will remove them automatically from the content. Some of them are:

- Bricks: audio, video, post-*, search, social icons, related-posts, etc.
- Oxygen: slider, code block, form
