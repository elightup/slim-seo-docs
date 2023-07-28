---
title: Schema
---

Schema is the best way to describes [structured data](https://wpslimseo.com/structured-data/) for search engines. Based on the data provided, search engines can show the content in the search results page in a more appealing way.

Slim SEO outputs schema data via JSON-LD in a single `<script>` tag in the footer. The plugin also provides **connections between schemas**. Connections are important because it gives search engines a lot of information for not only the main content of the web page, but also related information, which help them understand it deeply.

For example, if you're on a single post, the plugin can tell search engines about the main entity of the page is an article, which has an author and belongs to a webpage of an organization. The webpage has a breadcrumb list, and belongs to a website, which has a search box. This way, search engines not only understand about the content of article, but also author, organization and the website structure.

:::tip Advanced Schema

The free version of Slim SEO has supports for basic schemas of your website. If you want to add custom schemas for your custom post types, please see [Slim SEO Schema](https://wpslimseo.com/products/slim-seo-schema/).

:::

## Supported Schema Types

Slim SEO adds various schemas depending on the context of the current page. The sections below describes the schemas, omitting the `@type` and `@id` properties since they're just technical terms.

### Global Schemas

These are global schemas that are outputted for every page:

- Website
    - Name
    - URL
    - Search box
- Webpage
    - Name
    - Description
    - Language
    - URL
    - Date published (for singular pages)
    - Date modified (for singular pages)
    - Primary image of page (for singular pages)
    - Image (for singular pages)
- [Breadcrumbs](/slim-seo/breadcrumbs/)

For specific page types, the following schemas are outputted:

### Single Posts

For single posts, the plugin adds the following schema:

- Article
    - Headline
    - URL
    - Date published
    - Date modified
    - Comment count
    - Word count
    - Keywords: list of post tags
    - Sections: list of categories
- Author
    - Name
    - Given name (first name)
    - Family name (last name)
    - Description
    - Image: reference to user Gravatar

### Archive Pages

For archive pages: category page, tag page, post type archive page, date archive page, the `@type` of `Webpage` becomes `CollectionPage`.

### Search Result Pages

For search result pages, the `@type` of `Webpage` becomes `SearchResultsPage`.

### Author Pages

For search result pages, the `@type` of `Webpage` becomes `ProfilePage`. And there is a new schema `Person` with the following data:

- Name
- Given name (first name)
- Family name (last name)
- Description
- Image: reference to user Gravatar

## Theme Compatibility

Some WordPress themes already output schema in their HTML markup. And that might cause duplication of schema markup and makes search engines confuse. To fix this problem, Slim SEO automatically disables schema for the following popular themes:

- Beaver Theme
- Genesis framework and all Genesis themes

For other themes, you might need to disable schema output from Slim SEO. See below for instruction.

## AMP & Web Stories Support

The plugin supports for AMP and Web Stories from Google. It removes the default schema graph added by the AMP, Web Stories plugin and provides the more comprehensive schema graph.

You don't need to do anything to add support for AMP or Web Stories. The plugin automatically handle everything for you.

## FAQ

### How to disable schema output?

To disable the schema feature, please use the following code:

```
add_action( 'slim_seo_init', function( $plugin ) {
     $plugin->disable( 'schema' );
} );
```

### How to disable a specific schema?

Each schema can be disabled with a filter. For example, to disable schema for breadcrumbs, use the following code:

```
add_filter( 'slim_seo_schema_breadcrumbs_enable', '__return_false' );
```

In general, to disable a specific schema, use the following code:

```
add_filter( "slim_seo_schema_{$context}_enable", '__return_false' );
```

Where `$context` is the schema context, which can be referred below:

| Schema | Context |
| --- | --- |
| Website | `website` |
| Search action | `searchaction` |
| Webpage | `webpage` |
| Organization | `organization` |
| Logo | `logo` |
| Breadcrumbs | `breadcrumbs` |
| Article | `article` |
| Thumbnail | `thumbnail` |
| Author | `author` |
| Author image | `author_image` |

### How to modify the schema output of a specific type?

To modify the output of a specific schema type, please use the following code:

```
add_filter( "slim_seo_schema_{$context}", function ( $schema ) {
    // Add or modify a property.
    $schema['some_property'] = 'Some value';

    // Or remove a property.
    unset( $schema['another_property'] );

    return $schema;
} );
```

The `$context` is the same as the previous section.

### How to change schema for posts from Article to BlogPost

Using the hook described above, you can switch the schema type for posts from `Article` (default) to `BlogPost`:

```
add_filter( "slim_seo_schema_article", function ( $schema ) {
    $schema['@type'] = 'BlogPosting';
    return $schema;
} );
```

### How to add more schemas?

Sometimes, you want to add more schemas to provide more information about the page, such as a product page or about page. To do that, use the following code:

```
add_filter( 'slim_seo_schema_entities', function( $entities ) {
    $entity = new YourClass; // Will be defined below.
    $entities[] = $entity;

    // You can connect schemas.
    $entity->add_reference( 'author', $entities['author'] );
    $entity->add_reference( 'isPartOf', $entities['webpage'] );

    // Or like this.
    $entities['website']->add_reference( 'publisher', $entity );

    return $entities;
} );
```

You need to create a schema class (`YourClass`) which inherits the `SlimSEO\Schema\Types\Base` class. And it has to provide a `generate` methods to return an array of properties:

```
class YourClass extends SlimSEO\Schema\Types\Base {
    protected function generate() {
        $schema = [
            'property_1' => 'Value 1',
            'property_2' => 'Value 2',
        ];

        return $schema;
    }
}
```

You can take a look at the [code of WebPage schema](https://github.com/elightup/slim-seo/blob/master/src/Schema/Types/WebPage.php) for an example.
