---
title: Import Export
---

## Migrating data from other SEO plugins

Slim SEO allows you to migrate SEO data like meta title and meta description from other SEO plugins like Yoast SEO, AIO SEO, Rank Math or SEOPress. This helps you own the same data and be confident switching to Slim SEO.

To migrate data, go to **Slim SEO > Tools**, select the SEO plugin you want to migrate from, and click the **Migrate** button:

![Migrate data from other SEO plugins](https://imgur.elightup.com/27Hm0Dw.png)

Slim SEO will do the migration and show you the progress. Don't leave the page until it's done or you'll have to start again.

:::caution

1. Before migrating data, make sure you have a backup of your website.
1. You need to keep the original SEO plugin active to perform the migration, because we need to use some API/function from it.

:::

## Exporting SEO data to CSV/Excel

We recommend using the plugin [WP All Export](https://wordpress.org/plugins/wp-all-export/) (the free version is enough) to export the SEO data from Slim SEO. Please follow these steps to do that:

### Creating an export file

To start exporting the SEO data, go to **All Export > New Export**, select a post type, and click **Customize Export File**.

![Select a post type to export SEO data](https://imgur.elightup.com/s2bOGrM.png)

### Adding SEO fields

In the next screen, add fields you want to export. To export Slim SEO data, select **slim_seo** from the list on the right, under **Available Data > Custom Fields**. As we have 5 fields for:

1. Meta title
2. Meta description
3. Facebook image
4. Twitter image
5. Noindex

You need to add the **slim_seo** field 5 times! Don't worry about the field name, we'll change it later.

### Adding helper functions

Slim SEO saves all data into a single field. So, we need helper functions to extract this data. To do that, please install and activate the [Code Snippets](https://wordpress.org/plugins/code-snippets/) plugin.

Then go to **Snippets > Add New** and add the following snippet:

```php
function ss_get_title( $value ) {
	$value = @unserialize( $value );
	return $value['title'] ?? '';
}

function ss_get_description( $value ) {
	$value = @unserialize( $value );
	return $value['description'] ?? '';
}

function ss_get_facebook_image( $value ) {
	$value = @unserialize( $value );
	return $value['facebook_image'] ?? '';
}

function ss_get_twitter_image( $value ) {
	$value = @unserialize( $value );
	return $value['twitter_image'] ?? '';
}

function ss_get_noindex( $value ) {
	$value = @unserialize( $value );
	return $value['noindex'] ?? '';
}

function ss_get_canonical( $value ) {
	$value = @unserialize( $value );
	return $value['canonical'] ?? '';
}
```

Make sure you set it to run everywhere.

![Create helper export functions via Code Snippets plugin](https://imgur.elightup.com/c8ofRqf.png)

### Modifying exported fields

Now go back to the export. Click the **slim_seo** field in the added area to edit it. Change the column name to **Meta Title** and click the checkbox **Export the value returned by a PHP function**, and then enter the function name **ss_get_title**.

![Enter function name](https://imgur.elightup.com/MZtEUjV.png)

Repeat the process for the other 4 fields: meta description, Facebook image, Twitter image, and noindex. Make sure you use the corresponding functions added in the previous step.

After that, click the **Continue** button to start exporting. You'll get a CSV file like this:

![Export SEO data](https://imgur.elightup.com/FbSeyeP.png)

## Importing SEO data from CSV/Excel

Similar to exporting SEO data, we recommend using [WP All Import](https://www.wpallimport.com/) plugin to do the job. However, to import custom fields data, you need to purchase the Pro version of the plugin. Note that to _export_ Slim SEO data, the free version of the WP All Export is enough.

To importing data to Slim SEO, create a new import and configure other fields (title, content, etc.) as usual. In the **Custom Fields** panel, add a new field **slim_seo**. In the **Field options**, select **Serialized**. And then click the button **Click to specify** and set fields like this:

![Specify Slim SEO fields in WP All Import](https://imgur.elightup.com/FbGlbys.png)

This will import all 5 fields into a serialized field **slim_seo**, which is used by the plugin.

After that, start importing and you'll see the data is imported. If you have any trouble configuring imports, please follow the [documentation](https://www.wpallimport.com/documentation/getting-started/importing-an-xml-or-csv-file/) of WP All Import.
