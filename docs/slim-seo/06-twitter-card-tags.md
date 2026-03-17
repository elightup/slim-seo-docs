---
title: X (Twitter) Card Tags
---

Like [Facebook Open Graph Tags](/slim-seo/facebook-open-graph-tags/), X (Twitter) uses a set of meta tags called X Card to provide the X crawler information about a page.

Similar to Facebook Open Graph tags, X Card tags are auto generated. Slim SEO uses Summary Card with large image, so the posts appear beautifully and more attractive on Twitter.

Slim SEO only outputs the needed tags. Here is the reference:

| Tag | Description |
| --- | --- |
| `twitter:card` | Card type: always `summary_large_image`. |
| `twitter:title` | Title: uses Open Graph tag `og:title`. |
| `twitter:description` | Description: uses Open Graph tag `og:description`. |
| `twitter:image` | Image URL: fallback to the featured image -> first image in the post content -> global social image (set in **Settings > Slim SEO > Social**) if no image is set. |

## How to change the image when sharing on X?

By default, Slim SEO uses the featured image as the thumbnail when sharing a single post/page/term on X.

However, if the featured image is not optimized for X (for example, the size is not correct), then you might want to use another image. To do that, simply select another image in the **Search Engine Optimization** meta box, below the content:

![Change the image when sharing on X](https://imgur.elightup.com/UnSVyqL.png)

The recommended size for image when sharing on X is **1200x600** pixels.

:::caution Homepage settings

If you set your homepage as a static page, then the plugin treats it like a normal page. SEO settings for the homepage won't be available in the plugin settings (**Settings > Slim SEO**). Instead, they will be available below the editor when you edit the homepage.

:::
## How does the plugin decide which image is used?

Slim SEO tries to get the image for a post/page for X Card in the following order, from top to bottom. If it finds any image first, then it will use it:

- From the **Search Engine Optimization** meta box for that specific post
- From the global settings for the post type at **Settings > Slim SEO > Meta Tags**
- Featured image
- First image in the post content

If no image is found, the plugin will use the default social image, which is set in the **Settings > Slim SEO > Social**.

## How to change X image programmatically?

To change the X image with code, please use this snippet:

```php
add_filter( 'slim_seo_twitter_card_image', fn() => 'https://domain.com/path/to/image.jpg' );
```