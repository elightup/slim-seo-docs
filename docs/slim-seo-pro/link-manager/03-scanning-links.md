---
title: Scanning Links
---

After installing the plugin, you need to scan all posts to find links and their details. It's required to create reports in the plugin dashboard.

To scan links, clink the **Scan links now** button:

![Start scan links in Slim SEO Link Manager](https://i.imgur.com/dwMR2Ts.png)

After that, the plugin will refresh and show you the current status of the link-scanning process:

![Link scanning process status](https://i.imgur.com/MladUdi.png)

When the link scanning process finishes, the status (admin notice) will disappear and you'll see reports in the plugin dashboard.

![Link reports](https://i.imgur.com/7zWliJr.png)

## How it works

Slim SEO Link Manage scans links in the background to avoid any performance issues if you have a lot of posts. The plugin uses WordPress cron to process posts and parse links from the post content. So in each run, the plugin will process only a batch of posts and parse links for them. This will reduce the performance impact on your hosting/server as the number of posts for each run is relatively small and can be processed at once. Even if the plugin fails at processing some posts, it will try again in the next run.

Because the plugin depends on the WordPress cron, it requires the cron to work. If you disable WordPress cron and use an external cron (like a server cron or a remote system that sends requests to your site to trigger the cron), then the scanner runs only when the cron is called. If your cron setup is once per 15 minutes, then the plugin runs its background processing once every 15 minutes, which might take more time than usual to finish the process.

In that case, we'd recommend enable the WordPress cron to run the scanner once and then disable the WordPress cron when you finish.

## Re-scan links

In case you already ran the link scanning, and you want to scan again, go to the **Tools** tab and you'll find the **Scan links** button there:

![Run the scan links tool again](https://i.imgur.com/mbEry3A.png)

:::caution

The link scanning action will remove all existing link data and scans from the beginning.

:::

## Troubleshooting

### Requests blocked

If you use a security plugin or a security rule in CloudFlare, there might be a chance that the requests made by the plugin are blocked. Technically, the plugin uses background processing to send requests to `admin-ajax.php` via the `wp_remote_post` function to perform the scan. If your security rules have a max request limit, then they might block the requests, even when the requests are made by the server itself.

In this case, you might want to increase the limit or exclude the server IP of the website to avoid blocking the plugin's requests.

For the **Shield Security** plugin, please go to the plugin settings > Config tab > Traffic, and update the settings **Max Request Limit** and **Request Limit Time Interval**.

If you use CloudFlare WAF's [Rate Limiting Rules](https://developers.cloudflare.com/waf/rate-limiting-rules/), then increase the limit in its settings.

### Scanning process not finishing

If you see the scanning process isn't finished, please follow these steps:

- Update Slink SEO Link Manager to the latest version.
- Deactivate the plugin and reactivate it.
- Re-scan links

When deactivating the plugin, your data remains. No links are lost or changed.

After scanning links, let's [discover the reports](/slim-seo-link-manager/reports/).
