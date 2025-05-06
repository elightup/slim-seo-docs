---
title: Analytics
---

## Analytics

Before using Analytics in Slim SEO Pro, you need to get Google Client ID and Client Secret. Follow these steps:

1. Go to [Google Cloud](https://console.cloud.google.com/) page.
2. Search `Google Search Console API`

![Find Google Search Console API](img/gsc-app.png)

3. Enable Google Search Console API

![Enable Google Search Console API](img/enable-gsc-api.png)

4. Create Branding (If you already do it, please ignore this step and go straight to step 5)

- Sidebar Menu > select Oauth Consent Screen
![Oauth Consent Screen](img/oauth-consent-screen.png)

- Then select Branding on the menu
![Branding](img/branding.png)

- Enter your information by following their instruction:

![Create Branding 1](img/create-branding-1.png)

![Create Branding 2](img/create-branding-2.png)

![Create Branding 3](img/create-branding-3.png)

![Create Branding 4](img/create-branding-4.png)

![Create Branding 5](img/create-branding-5.png)

5. Add Authorised domain

![Add Authorised domain](img/add-authorised-domain.png)

6. Setup Audience

Select `Audience` on the menu, you have 2 options:

- Testing (default), this is our recommend to use, you will have to add Test users if you select this one.
- Publish app.

![Audience](img/setup-audience.png)

7. Create OAuth in Credentials tab 

![Create OAuth](img/create-credentials-oauth.png)

Select `Web application` in `Application type` dropdown and enter `yourdomain/?ssp_gsc_callback=1` in `Authorised redirect URIs`

![Create OAuth ID](img/create-oauth.png)

After create OAuth client ID, you will have `Client ID` and `Client Secret`

![OAuth client ID](img/oauth-info.png)

8. Enter `Client ID` and `Client Secret` you have in step 6 and click `Save Changes`

![Enter Client ID and Client Secret](img/enter-client-id-and-secret.png)

9. For the first time using Analytics, after step 7 you will have to get Google authentication token by click the link

![Get Google authentication token](img/login-google-to-get-authentication-token.png)

follow their instruction:

![Get Google authentication token 1](img/get-authentication-token-1.png)

Notice: use the same email you entered on step 6 if you are using Testing mode.

![Get Google authentication token 2](img/get-authentication-token-2.png)

![Get Google authentication token 3](img/get-authentication-token-3.png)

After all these steps, it will redirect you back to Analytics and ready for you to use:

![Analytics screen](img/analytics-screen.png)