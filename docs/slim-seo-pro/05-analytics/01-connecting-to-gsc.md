---
title: Connecting to GSC
---

Analytics is a pro feature that allows you to connect to Google Search Console (GSC) to bring the reports to WordPress. It helps you see how your pages perform on SERP, and give you more info about your impressions, positions, CTR, and keywords.

To connect to Google Search Console, follow these steps:

## Creating a project on Google Cloud

Go to [Google Cloud Console](https://console.cloud.google.com/) and log in with your Google account. If you don't already have a project to use for the integration with Slim SEO Pro, create a new one by selecting the project dropdown menu at the page's top-left corner, near the Google Cloud logo, and in the popup, click the **New Project** button:

![Creating a project on Google Cloud](img/create-project.png)

On the next screen, enter the project name. It can be anything:

![Enter a project name](img/project-name.png)

## Enabling API

After creating the project, select the project from the dropdown menu at the page's top-left corner, near the Google Cloud logo.

Then in the search box, enter "Google Search Console API" to search the API we need to enable, and select the first option:

![Find Google Search Console API](img/search-api.png)

On the next screen, click **Enable** button to enable the API.

![Enable Google Search Console API](img/enable-gsc-api.png)

## Creating branding

When connecting to Google Search Console, an authorization screen will appear and ask for your permission to access to GSC data. We need to configure the branding for that screen.

From the sidebar menu, select **OAuth consent screen**

![Oauth Consent Screen](img/oauth-consent-screen.png)

Then select Branding on the menu:

![Branding](img/branding.png)

Enter your information by following their instruction:

![Create Branding 1](img/create-branding-1.png)

![Create Branding 2](img/create-branding-2.png)

![Create Branding 3](img/create-branding-3.png)

![Create Branding 4](img/create-branding-4.png)

![Create Branding 5](img/create-branding-5.png)

## Adding authorised domain

This step ensures the app runs only for your domain. Click **Branding** menu again, and scroll down to see the new input for authorised domains. Simply add your domain(s) here:

![Add Authorised domain](img/add-authorised-domain.png)

## Setting up audience

This step tells Google that your app is a public app, which can be used by other users or a test app, which is used by yourself only. Click the **Audience** menu, and you'll see by default, the app is **Testing**. This is our recommend mode to use as the app is for your websites only. It's not a public app for others.

:::caution

If you want to keep the app in the testing mode, **do NOT** click the **Publish app** button.

:::

![Audience](img/setup-audience.png)

When keeping the app in the testing mode, you will have to add test users. Scroll down to the **Test users** section and click **+ Add user** button.

In the popup, add your email and click **Save** button:

![Add test users](img/add-test-users.png)

## Creating credentials

Go to **Credentials** tab and click the **+ Create credentials** button at the top, then select **OAuth client ID**:

![Create OAuth](img/create-credentials-oauth.png)

Select **Web application** in the **Application type** dropdown and enter `https://yourdomain.com/?ssp_gsc_callback=1` (replace `yourdomain.com` with your actual domain) in the **Authorised redirect URIs**:

![Create OAuth ID](img/create-oauth.png)

Then click **Create** button to create the credentials. After finishing, you'll see **Client ID** and **Client Secret** in the popup:

![OAuth client ID](img/oauth-info.png)

Copy these details and now go to your **WordPress admin > Settings > Slim SEO > Analytics tab > Settings** and enter the details:

![Enter Client ID and Client Secret](img/enter-client-id-and-secret.png)

## Authorizing with GSC

After entering the client ID and client secret for GSC, you can connect to GSC to get the reports. To connect to GSC, click the link in the dashboard:

![Get Google authentication token](img/login-google-to-get-authentication-token.png)

then login with the account that you used for test users in the step above:

![Get Google authentication token 1](img/get-authentication-token-1.png)

![Get Google authentication token 2](img/get-authentication-token-2.png)

![Get Google authentication token 3](img/get-authentication-token-3.png)

After all these steps, it will redirect you back to Analytics and ready for you to use:

![Analytics screen](img/analytics-screen.png)

Now it's time to [learn about the reports](/slim-seo-pro/analytics/reports/).