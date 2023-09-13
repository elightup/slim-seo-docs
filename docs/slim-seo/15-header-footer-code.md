---
title: Header Footer Code
---

There are various 3rd-party codes that you want to insert into your website such as Google Analytics, Google Tag Manager, Facebook Pixels or webmaster tools verification code.

To insert these codes into your website, go to **Settings > SEO**, and paste the code into one of the boxes for header, body or footer.

![Insert header and footer code in Slim SEO](https://i.imgur.com/zBqFWWd.png)

Please note that it requires your theme to have proper calls to WordPress functions, specifically:

- For header code, your theme must implement `wp_head()` function in the `header.php` file.
- For body code, your theme must implement `wp_body_open()` function in the `header.php` file.
- For footer code, your theme must implement `wp_footer()` function in the `footer.php` file.

Then, the code you paste in will be output as it is on the front end.
