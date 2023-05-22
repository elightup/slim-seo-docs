---
title: Disable Features
---

Some features in Slim SEO are opinionated. We tried to automate all the SEO works without your touch, but sometimes it's too much. So, you might want to disable some features that you don't like.

To disable features, please go to **Settings > Slim SEO**, select tab **General** and you can deselect the features you don't want:

![Select the SEO features you want to enable/disable](https://i.imgur.com/qWrjGJS.png)

Alternatively, you can disable the features by adding the following code into your theme's `functions.php` file:

```
add_action( 'slim_seo_init', function( $plugin ) {
    $plugin->disable( 'redirection' );
    $plugin->disable( 'code' );
} );
```

Each feature has an unique identifier. You need to pass that identifier into the `disable` method of the plugin object.

These are the list of features that you can disable:

| Identifier | Feature |
| --- | --- |
| `meta_title` | Meta title |
| `meta_description` | Meta description |
| `meta_robots` | Meta robots |
| `open_graph` | Open Graph |
| `twitter_cards` | Twitter Cards |
| `canonical_url` | Canonical URL |
| `rel_links` | "rel" links |
| `settings_post` | Meta box settings for posts |
| `settings_term` | Meta box settings for terms |
| `sitemaps` | Sitemap |
| `images_alt` | Image alt text |
| `breadcrumbs` | Breadcrumbs |
| `notification` | Plugin notification |
| `redirection` | Auto redirection |
| `feed` | RSS Feed |
| `schema` | Schema |
| `code` | Header / footer code |

You can also disable integrations with other plugins if you want. Slim SEO automatically detects and only enable the integrations if these plugins are active.

| Identifier | Feature |
| --- | --- |
| `amp` | AMP |
| `woocommerce` | WooCommerce |
| `beaver_builder` | Beaver Builder |
| `elementor` | Elementor |
| `jetpack` | Jetpack |
| `genesis` | Genesis |
| `oxygen` | Oxygen builder |
| `lifterlms` | LifterLMS |
| `polylang` | Polylang |
| `web_stories` | WebStories |
| `wpml` | WPML |

Please note that some features require other features to be active. For example: the `schema` feature requires `breadcrumbs`. So, when disable a feature, make sure to disable all dependent features.

Learn more about the features' dependencies in the plugin [source code](https://github.com/elightup/slim-seo/blob/master/src/Plugin.php).
