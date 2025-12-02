---
title: Integrations
---

Slim SEO works nicely with most plugins and themes. In some cases, where a plugin or a theme has special settings or SEO-related stuffs, we might need some extra work to make them run together. For that reason, we have added some integration for popular plugins and themes.

## Plugins

### Page builder plugins

For page builder plugins, Slim SEO renders the content built with them and use this content for [meta description](/slim-seo/meta-description-tag/) and [Open Graph](/slim-seo/facebook-open-graph-tags/).

- **Beaver Builder**
- **Breakdance**
- **Bricks Builder**: Bricks has some SEO features built-in like meta tags and Open Graph tags. When using it with Slim SEO, Slim SEO will disables these features and replace them with the features from Slim SEO.
- **Brizy Builder**
- **Divi**
- **Elementor**
- **Oxygen Builder**
- **Zion Builder**

### Multilingual plugins

- [WPML](/slim-seo/integrations/wpml/)
- [Polylang](/slim-seo/integrations/polylang/)
- [TranslatePress](/slim-seo/integrations/translatepress/)

When using Slim SEO with these plugins, for each post and term in the sitemap, Slim SEO will add `hreflang` for the languages. With this addition, you don't need a separate sitemap for other languages.

Learn more about [multilingual sitemap](https://wpslimseo.com/wordpress-multilingual-sitemap/) in WordPress.

### Other plugins

- **AffiliateWP**
- **AMP**: Slim SEO will replace the default AMP schema with the more comprehensive schema.
- **[Auto Listings](https://wpautolistings.com)**
- **Fluent Forms**
- **Jetpack**: disable SEO tools from Jetpack to prevent duplication.
- **LifterLMS**
- **MailPoet**
- **[Meta Box](https://metabox.io)**
- **[WP Ultimate CSV Importer](https://www.smackcoders.com/wp-ultimate-csv-importer-pro.html?utm_source=slim-seo&utm_medium=referral&utm_campaign=integrations-page)**
- **Ultimate Member**
- **WebStories**: replace the default schema & meta tags with the more comprehensive schema from Slim SEO.
- **WPForms**

## Themes

- **Genesis**: Genesis has some SEO features built-in, like microdata and meta title tag. Slim SEO will disable these features and replace them with the features in Slim SEO.
