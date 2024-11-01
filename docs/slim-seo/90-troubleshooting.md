---
title: Troubleshooting
---

This page lists some common issues that people often see and the corresponding solutions. If you find any bug not listed here, please [let us know](https://wpslimseo.com/contact/).

## Shortcodes not working

Sometimes, you have a shortcode in the post content or your page executes a special shortcode from a plugin like WooCommerce or EDD Invoices, and **you see a blank page** or **the shortcode doesn't work at all**.

The root cause might be that Slim SEO already parses the shortcodes when it tries to auto generate [meta description](/slim-seo/meta-description-tag/). If the shortcode has something related to session, custom logic, etc., then it might not work as expected.

To fix this problem, you need to tell Slim SEO to skip processing the shortcodes.

Assuming you have the following shortcode in your post content:

```
[my_shortcode id="value" title="my custom title"]
```

Then to tell Slim SEO to skip it, add the following snippet in your theme's `functions.php` file:

```php
add_filter( 'slim_seo_skipped_shortcodes', function( $shortcodes ) {
    $shortcodes[] = 'my_shortcode';
    return $shortcodes;
} );
```

Note that you need to add the shortcode name only, not the full shortcode text with its attributes.

If you want to skip multiple shortcodes, use the following snippet:

```php
add_filter( 'slim_seo_skipped_shortcodes', function( $shortcodes ) {
    $shortcodes[] = 'my_shortcode';
    $shortcodes[] = 'another_shortcode';
    return $shortcodes;
} );
```

You can also use the *opposite* filter `slim_seo_allowed_shortcodes` to filter the list of allowed shortcodes:

```php
add_filter( 'slim_seo_allowed_shortcodes', function( $shortcodes ) {
    return array_filter( $shortcodes, function( $shortcode ) {
        // Do not allow shortcodes start with "my_prefix"
        return ! str_starts_with( $shortcode, 'my_prefix_' );
    }, ARRAY_FILTER_USE_KEY );
} );
```

Note that the `slim_seo_allowed_shortcodes` accepts an associate array of shortcodes, where key is the shortcode name and value is the callback function.

If you want to disable all shortcodes, use this snippet:

```php
add_filter( 'slim_seo_allow_shortcodes', '__return_empty_array' );
```

## Blocks not working

Similar to shortcodes, some blocks might not working properly. To fix this problem, use the following snippet:

```php
add_filter( 'slim_seo_skipped_blocks', function( $blocks ) {
    $blocks[] = 'namespace/your-block-name';

    // Another block.
    $blocks[] = 'namespace/your-2nd-block-name';

    return $blocks;
} );
```

You can also use the *opposite* filter `slim_seo_allowed_blocks` to filter the list of allowed blocks:

```php
add_filter( 'slim_seo_allowed_blocks', function( $blocks ) {
    return array_filter( $blocks, function( $block ) {
        // Do not allow blocks start with "my_prefix"
        return ! str_starts_with( $block, 'my_prefix_' );
    } );
} );
```

Unlike `slim_seo_allowed_shortcodes`, the `slim_seo_allowed_blocks` accepts a numeric array of blocks, where each element is a block name.

If you want to allow only core blocks, use the following snippet:

```php
add_filter( 'slim_seo_allowed_blocks', function( $blocks ) {
    return array_filter( $blocks, function( $block ) {
        return str_starts_with( $block, 'core/' );
    } );
} );
```
