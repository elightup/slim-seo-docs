---
title: Twitter Card Tags
---

Like [Facebook Open Graph Tags](/slim-seo/facebook-open-graph-tags/), Twitter uses a set of meta tags called Twitter Card to provide the Twitter crawler information about a page.

Similar to Facebook Open Graph tags, Twitter Card tags are auto generated. Slim SEO uses [Summary Card with Large Image](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/summary-card-with-large-image.html), so the posts appear beautifully and more attractive on Twitter.

It's important to understand that [Twitter Card supports Open Graph](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/guides/getting-started). So, it's redundant to output the duplicated tags.

Instead, Slim SEO only output needed tags. Here is the reference:

| Tag | Description |
| --- | --- |
| `twitter:card` | Card type: always `summary_large_image`. |
| `twitter:title` | Title: uses Open Graph tag `og:title`. |
| `twitter:description` | Description: uses Open Graph tag `og:description`. |
| `twitter:image` | Image: uses Open Graph tag `og:image`. |
| `twitter:image:alt` | Image alt text: uses Open Graph tag `og:image:alt`. |

## How to change the image when sharing on Twitter?

By default, Slim SEO uses the featured image as the thumbnail when sharing a single post/page/term on Twitter.

However, if the featured image is not optimized for Twitter (for example, the size is not correct), then you might want to use another image. To do that, simply select another image in tab **Social Settings** of the **Search Engine Optimization** meta box, below the content:

![Select an image when sharing on Twitter](https://i.imgur.com/u8brOtt.png)

Select an image when sharing on Twitter

The recommended size for image when sharing on Twitter is **800x418** pixels.

_Please note that if you set your homepage as a static page, then the plugin treats it like a normal page._
