---
title: Connecting to Google Search Console
sidebar_label: Connecting to GSC
---

URL Indexing needs permission to read your data from Google Search Console (GSC). To get this permission, you create a Google app with your own Google account. You do this once. It is free and takes about 10 minutes.

Why do you need your own app? The connection stays between your site and Google, under your own Google account. No third-party service sits in the middle.

## Before you start

Make sure of two things:

- Your site is added to [Google Search Console](https://search.google.com/search-console).
- Your Google account is an **owner** or a **full user** of the site.

Not the owner? Ask the site owner to add your email. To check or add users, go to **Google Search Console** > select your site > **Settings** > **Users and permissions**:

![Users and permissions in Google Search Console](img/gsc-account.webp)

There are 6 steps:

1. Create a project
2. Turn on the Google Search Console API
3. Set up the consent screen
4. Create the credentials
5. Publish the app
6. Connect in WordPress

## 1. Create a project

Go to [Google Cloud Console](https://console.cloud.google.com/) and sign in with your Google account.

Click the project list at the top left, next to the Google Cloud logo. Click **New Project**:

![Create a project on Google Cloud](img/create-project.webp)

Type a project name, for example "My site". Click **Create**:

![Enter a project name](img/project-name.webp)

:::tip

Already have a project? Use it and skip this step.

:::

## 2. Turn on the Google Search Console API

Select your project in the project list at the top left.

In the search box at the top, type "search console". Click the first result:

![Find the Google Search Console API](img/search-api.webp)

Click **Enable**:

![Enable the Google Search Console API](img/enable-gsc-api.webp)

You only need to turn on this API.

## 3. Set up the consent screen

The consent screen is the page where Google asks you to allow access to your Search Console data. You set it up once.

From the left menu, open [**OAuth consent screen**](https://console.cloud.google.com/auth/overview):

![OAuth consent screen menu](img/oauth-consent-screen.webp)

Click **Get started**:

![Get started](img/oauth-start.webp)

Under **App information**, enter:

- **App name**: Any name. We suggest "Slim SEO URL Indexing".
- **User support email**: Your email.

Click **Next**:

![App information](img/create-branding-1.webp)

Under **Audience**, select **External**:

![Select External](img/create-branding-2.webp)

Under **Contact information**, enter your email:

![Contact information](img/create-branding-3.webp)

Under **Finish**, tick "I agree to the Google API Services: User Data Policy". Then click **Create**:

![Agree to the policy](img/create-branding-4.webp)

Then click **Create OAuth client**:

![Create OAuth client](img/start-create-oauth.webp)

## 4. Create the credentials

Fill in the form:

![Create OAuth client form](img/create-credentials-oauth.webp)

- **Application type**: Select **Web application**.
- **Name**: Any name.
- **Authorized redirect URIs**: Click **+ Add URI** and enter this address:

```
https://yourdomain.com/?ssp_url_indexing_callback=1
```

Replace `yourdomain.com` with your domain. If WordPress is in a subfolder, add the subfolder too. For example: `https://yourdomain.com/blog/?ssp_url_indexing_callback=1`.

:::info

The address must match your site exactly. Check `https` and `www`. If it does not match, Google shows the error `redirect_uri_mismatch`.

:::

Click **Create**. A popup shows your **Client ID** and **Client Secret**:

![Client ID and Client Secret](img/oauth-info.webp)

Copy both values and save them somewhere safe. You need them in step 6.

:::warning

Google shows the Client Secret only once. If you lose it, create a new OAuth client.

:::

:::tip Many sites

You can use one app for all your sites. Add one redirect URI for each site. Use the same Client ID and Client Secret for all of them.

:::

## 5. Publish the app

A new app starts in **Testing** mode. In this mode, Google ends the connection 7 days after you allow access, so you would have to reconnect every week. To keep the connection, publish the app.

From the left menu, open [**Audience**](https://console.cloud.google.com/auth/audience). Under **Publishing status**, click **Publish app**, then click **Confirm**:

![Publish the app](img/publish-app.webp)

The status changes to **In production**. You do not need to send the app to Google for verification. Only you use it, for your own sites.

## 6. Connect in WordPress

Go to **Settings > Slim SEO > URL Indexing tab**. Paste the **Client ID** and **Client Secret**. Click **Save Changes**.

![Enter the Client ID and Client Secret in Slim SEO](img/oauth-in-slim-seo.webp)

Google opens right away. Choose the Google account that has access to your site in Search Console:

![Choose an account](img/choose-account.webp)

:::info

If Google shows **Google hasn't verified this app**, click **Advanced**, then click **Go to [your app name] (unsafe)**. This is the app you created, so it is safe to continue.

:::

Allow the app to read your Google Search Console data:

![Allow access](img/allow-access.webp)

Google then sends you back to WordPress. Under **Client Secret**, you see the connection status:

![Connection status](img/connection-status.webp)

Status|What to do
---|---
Connected to Google Search Console.|Nothing. The plugin starts checking your URLs in the background. To disconnect, click **Disconnect**.
You denied access to Google Search Console.|You clicked **Cancel** on Google. Click **Reconnect** to try again.
Not connected to Google Search Console.|The connection expired or was removed. Click **Reconnect**.
Could not connect to Google Search Console.|Check the **Client ID** and **Client Secret**. Fix them, then click **Save Changes** again.
Connected, but this site is not in your Google Search Console account.|Add the site to Google Search Console. Or click **Disconnect** and connect with another account.

:::info

The plugin opens Google only when you change the Client ID or Client Secret. Saving other settings does not change the connection.

:::

Next, learn how to [view the indexing status](/slim-seo-pro/url-indexing/indexing-status/).

## Troubleshooting

Problem|Solution
---|---
`redirect_uri_mismatch` error|The redirect URI in step 4 does not match your site. Check `https`, `www`, and the subfolder.
The connection stops after 7 days|The app is still in **Testing** mode. [Publish the app](#5-publish-the-app), then click **Reconnect**.
Many URLs show **N/A**|Google's daily limit ran out. Lower **URLs per run** or raise **Cron interval** in the [settings](/slim-seo-pro/url-indexing/settings/).
