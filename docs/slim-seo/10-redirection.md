---
title: Redirection
---

Redirection is an important feature, which helps you to redirect broken pages, unimportant pages, or old URLs to existing working URLs. You can also use this feature to monitor 404 pages, and create redirection rules for them.

## Creating a redirect

Go to **Settings > Slim SEO** and select the **Redirection** tab, then click **Add Redirect** button:

![add a new redirect](https://i.imgur.com/3Ma54kd.png)

A new popup will appear that lets you enter the redirect details:

![redirect settings](https://i.imgur.com/E6laZ26.png)

After entering the redirect details, click the **Add Redirect** button to finish. After that, the redirect will appear in the redirect table.

Below are the explanations of each setting for a redirect.

Settings|Description
---|---
Type|Redirection type. See **Redirection type** section below for details.
From URL|The URL you want to redirect. You can set a rule for an exact URL, or if it contains a text. See **Matching URLs** section below for details.
To URL|The destination URL that you want to redirect to.
Note|Something that reminds you about this redirection rule.
Enable|Whether this redirect is active or not. If not active, no redirections will perform.
Ignore parameters|Turn ON if you don't need the requested URL has to be matched querystring parameters with From URL.

### Redirect type

The redirect type indicates which HTTP header is returned to browsers or search engines when a URL is redirected. Each HTTP header has its meaning, which can let search engines understand its purpose. Below is the list of redirect types:

- **301 Moved Permanently**: this is a permanent redirect that passes full link equity (ranking power) to the redirected page. In most instances, the 301 redirect is the best method for implementing redirects on a website.
- **302 Found**: is used when the URL is changed temporarily.
- **307 Temporarily Redirect**: it is the HTTP 1.1 successor of the 302 redirect. Major crawlers treat it like a 302 in most cases. It's useful when content is really moved only temporarily (such as during maintenance) AND the server has already been identified by the search engines as 1.1 compatible. Since it's essentially impossible to determine whether or not the search engines have identified a page as compatible, it is generally best to use a 302 redirect for content that has been temporarily moved.
- **410 Content Deleted**: tells the search engines that the content is gone. If users visit this URL (without redirects), they'll see a not found page. It's useful for pages that you deleted on your website.
- **451 Content Unavailable for Legal Reasons**: it's useful when you are ordered by a judge to delete a page or if you get a notice and takedown request. This tells search engines that there was a post here and that you wanted to fulfill this request, but you can't for legal reasons.

### Matching URLs

The plugin treats the following URLs the same:

```text
http(s)://domain.com/path/to/url
http(s)://domain.com/path/to/url/
/path/to/url
/path/to/url/
path/to/url
path/to/url/
```

All these formats will be converted to a standard format of `path/to/url`. The process of converting URL to a standard format is called **normalization** and it is used to compare/match the from URL and the requested URL.

Besides, you can select how the plugin matches the URL:

- **Exact Match**: the requested URL must be the same as the entered URL.
- **Contain**: the requested URL must contain the entered value.
- **Start With**: the requested URL must start with the entered value.
- **End With**: the requested URL must end with the entered value.
- **Regex**: the requested URL must match the entered value using regular expression.

## Export/Import Redirects

You can export your redirects in CSV format by using **Export** button.

![export redirect](https://i.imgur.com/TII5vKx.png)

You can import your redirects by using **Import** button.

![import redirect](https://i.imgur.com/i3BFzg1.png)

A new popup with instructions will appear that lets you upload the CSV file.

Please note that your CSV file must have a header row and exact 7 columns as follows:

Column name|Data type|Description|Posible values|Sample
---|---|---|---|---
Type|Number|Redirect type is used to forward one URL to another|301, 302, 307, 410|301
Condition|String|Condition is used for matching URL to redirect|exact-match,contain,start-with,end-with,regex|exact-match
From|String|URL to redirect||old-post
To|String|Destination URL||https://example.com/new-post/
Note|String|Something to reminds you about the redirects||
Enable|Number|Is the redirect enabled?|0, 1|1
Ignore Parameters|Number|Ignore URL's parameters if URL has parameters|0, 1|0

You can also click **Download sample CSV file** to get a sample file and use it to fill up your redirects.

## Monitoring 404 pages

A wonderful feature of Slim SEO is that the plugin helps you **monitor 404 pages and create redirects for them**. This helps you provide alternative content to users by redirecting them to the correct page if they enter a wrong URL, and thus increase the user experience. It also helps if you shared a wrong URL or deleted some content that no longer exists.

### Enabling 404 logs

To enable 404 logging, go to tab **Settings** and select **Enable 404 logs**:

![enable to log 404 pages](https://i.imgur.com/s1sjmOf.png)

After clicking the **Save Changes** button, you'll see the **404 Logs** tab, where you can see all 404 pages.

![list of 404 pages](https://i.imgur.com/xaZatgU.png)

Each 404 page has the following details:

Name|Description
---|---
URL|The 404 URL that users visit.
Hit|The number of visits that URL has.
Created at|The first time the URL is visited.
Updated at|The last time the URL is visited.
Actions|Actions you can do for this URL. Here you can add a redirect for it or delete it.

The plugin allows you to **sort the table** by "hit", "created at" and "updated at" columns.

### Creating redirects for 404 pages

When an URL is visited many times, it's best to create a redirect for it. To do that, click the **Add Redirect icon** in the **Actions** column.

![add a redirect for a 404 link](https://i.imgur.com/PRu4tcZ.png)

A popup will appear that helps you to create a redirect. It's similar to add a redirect manually, except that the **From URL** is **auto filled by the 404 URL**.

![enter redirect details for a 404 link](https://i.imgur.com/kywAzvB.png)

Enter the **To URL** and click **Add Redirect** button to finish.

### Deleting 404 log table in the database

When enabling 404 logs, the plugin will create a table in the database to store the 404 URL details. If you don't want to log 404, then you might want to delete this table to keep your database clean. To do that, click the **Delete 404 logs table**:

![delete 404 log table](https://i.imgur.com/9GUH8G7.png)

:::info

This option is visible only **after** you enable 404 logs, which means the table has been created.

:::

## Auto redirection

Auto redirection helps you redirect some URLs that have low value to users, or in some cases, are not needed at all. Redirecting them to other URLs help you remove duplicated content on your website. Slim SEO does this automatically without any settings.

### Attachment pages to files

When you upload any file to WordPress, WordPress creates an attachment page for that file. This page provides very little information about the file and the page looks quite empty. As search engines already index the files, allowing attachment pages to be indexed make duplicated content and increases the bounce rate. It’s better to disable the attachment pages.

Without any configuration from users, Slim SEO will help you to **disable the attachment pages automatically** and **redirect them to the file URLs**. Users will see the real file and thus, no empty pages.

### Author pages to the homepage

If the website **has only one author**, then the author page is almost the same as the blog page or homepage. Indexing the author page makes duplicated content and provides no value to the users. So **Slim SEO auto redirects this author page to the homepage**.

Another case is if **authors have no posts**, their page will be empty. Thus, indexing them is bad for SEO. In this case, **Slim SEO also redirects these pages to the homepage**.

## Other redirection settings

Besides manual and auto redirections, the plugin provides some settings for other usual redirections. You can find these settings under the **Settings** tab.

![other redirection settings](https://i.imgur.com/eMl4gpJ.png)

Setting|Description
---|---
Force trailing slash|Ensures all URLs on your site have the same format - with or without trailing slash (`/`), and redirect the other format to the correct one.
Redirect www|Helps you to redirect non-www to www or vice-versa.
Auto delete 404 logs|Automatically delete old logs after a specific time (a week, a month).
Redirect all 404 URLs|Redirects all 404 URLs to your homepage or a specific URL. Note that if you already have a redirect for a 404 URL, then that redirect will take a higher priority and will be used.
