---
title: License
hide_table_of_contents: true
---

## Adding a license key

Before using Slim SEO Link Manager, you need to add your license key in the plugin settings. Go to **Settings > Slim SEO** and click the **License** tab, then enter the license key in the input box:

![Add license key in Slim SEO Link Manager](https://i.imgur.com/OoBXzYV.png)

Then click **Save Changes** to validate the license key. If your license key is valid and your license is active, you can start [scanning links](/slim-seo-link-manager/scanning-links/) in your posts. Otherwise, you'll see a notification in the admin area to update the license key.

## FAQs

### What happens if my license expires?

In this case, the plugin will work normally. You'll still have access to all the plugin features and admin settings. However, you won't receive any updates or bug fixes, or support from us.

### Can I define the license key in `wp-config.php`?

Yes, you can. Please define your license key as follows:

```php
define( 'SLIM_SEO_LINK_MANAGER_KEY', 'your license key here' );
```

In this case, the plugin won't save the license key in the database and hide it from all eyes.