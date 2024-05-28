---
title: LinkedIn Tags
---

Like [Facebook](/slim-seo/facebook-open-graph-tags/) and [Twitter](/slim-seo/twitter-card-tags/), LinkedIn also uses [a set of meta tags](https://www.linkedin.com/advice/3/how-do-you-specify-images-media-social-sharing-html-skills-html) to provide details about a page when sharing it on LinkedIn. With these details, your page will be displayed beautifully in a social media card.

Similar to Facebook and Twitter Card, LinkedIn tags are auto generated. It's important to understand that **LinkedIn supports Open Graph**. So, it's redundant to output the duplicated tags.

Instead, Slim SEO only output needed tags. Here is the reference:

| Tag | Description |
| --- | --- |
| `title` | Title: uses Open Graph tag `og:title`. |
| `image` | Image: uses Open Graph tag `og:image`. |
| `description` | Description: uses Open Graph tag `og:description`. |
| `author` | Author |
| `date` | Publication date |

## How to change LinkedIn tags programmatically?

There are 2 filters to change the LinkedIn's `author` and `date` tags:

```
slim_seo_linkedin_author
slim_seo_linkedin_date
```

Both filters accepts the current value (string) as the parameter and must return a string.

For example, if you want to remove the `author` tag, use the following snippet:

```php
add_filter( 'slim_seo_linkedin_author', '__return_empty_string' );
```