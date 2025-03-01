---
title: Custom JSON-LD
---

If you're an advanced user and want to add and edit schemas with custom JSON-LD code, then Slim SEO Schema has that for you.

Select **Custom JSON-LD** from the [list of available schemas](/slim-seo-schema/adding-schemas/):

![Custom json-ld](https://i.imgur.com/Koxfdw4.png)

Then in the schema panel, paste your JSON-LD code into the textarea box:

![Enter custom JSON-LD code](https://i.imgur.com/WdibSCb.png)

You can still insert the [dynamic variables](/slim-seo-schema/dynamic-variables/) into your JSON-LD code as follows:

![Using dynamic variables in JSON-LD code](https://i.imgur.com/Oo2Mdeo.png)

And the plugin will render the variables on the front end.

:::tip

Although the plugin can process your custom JSON-LD code if it contains `<script>` tag, it's recommended to enter **only the JSON code**. Some hostings has special security rules that block the plugin from saving the data if it contains `<script>` tag.

:::

Using custom JSON-LD code with dynamic variables is a great and flexible way to control your schema output.

After finish adding or editing JSON-LD code, don't forget to set the [location](/slim-seo-schema/adding-schemas/#location) for the schema.