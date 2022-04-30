---
title: Custom Properties
---

Although most important properties (which Google recommends) are implemented in Slim SEO Schema, there are some properties that are available in the schema.org specification, but are not required by Google. Adding these properties can help you add more details for a schema and thus, help search engines to understand and display the schema better.

## Adding custom properties

To add custom properties, click the **\+ Add Property** link at the bottom of the schema panel.

![Add custom properties](https://i.imgur.com/2q09Hdv.png)

Add custom properties

After that, you'll see a new property called **Custom** with a **\+ Add New** button. Clicking the button will show you a pair of key-value.

![](https://i.imgur.com/U2F7HQm.png)

Pairs of key-value for custom properties

Each key-value pair represents a custom property, where key is the property name and value is the property value.

For example: if you enter property "street\_address" with value "35 Nguyen Co Thach, Nam Tu Liem", then in your schema JSON-LD (the output of the schema), you'll see a pair like this:

```
"street_address": "35 Nguyen Co Thach, Nam Tu Liem"
```

## Dot notation

By default, you can only enter "plain" pair of key-value for custom properties. If you want to enter a structural data for a property like:

```
"author": {
    "name"  : "Brian Hawkward",
    "age"   : "38",
    "gender": "Male"
}
```

Then you need to use the dot notation. Dot notation is a way that let you define structural data (hierarchical data) with dots (`.`). **Each dot (`.`) defines a level in your data.**

With the sample above, this can be understood like this:

```
"author.name"  : "Brian Hawkward",
"author.age"   : "38",
"author.gender": "Male",
```

Here the params `name`, `age`, `gender` are sub-params of the `author` and they're defined with a dot prefixed.

Implementing that in Slim SEO Schema as follows:

![Implement structural data for custom properties](https://i.imgur.com/QwE9R3D.png)

Implement structural data for custom properties

Another case is when you want to add **a set of data without keys** (like list of images). The data in JSON-LD looks like this:

```
"images": [
    "https://domain.com/1.jpg",
    "https://domain.com/2.jpg",
    "https://domain.com/3.jpg"
]
```

Although keys are not implemented, we can understand that this list (array) uses numeric keys: 0, 1, 2. So we can rewrite it as:

```
"images": [
    0: "https://domain.com/1.jpg",
    1: "https://domain.com/2.jpg",
    2: "https://domain.com/3.jpg"
]
```

Similar to above, this can be understood as:

```
"images.0": "https://domain.com/1.jpg",
"images.1": "https://domain.com/2.jpg",
"images.2": "https://domain.com/3.jpg",
```

And can be implemented as follows in Slim SEO Schema:

![Adding array of data for custom properties](https://i.imgur.com/8qc7Wm7.png)

Adding array of data for custom properties

Combining these, you can define a complex data structure as follows (this is a list of addresses, each address is an object):

```
"address": [
    {
        "street": "35 Nguyen Co Thach",
        "city"  : "Hanoi"
    },
    {
        "street": "12 Le Duc Tho",
        "city"  : "Hanoi"
    },
]
```

In Slim SEO Schema:

![Complex data structure for custom properties in Slim SEO Schema](https://i.imgur.com/TwhqUbz.png)

Complex data structure for custom properties in Slim SEO Schema

## Adding custom properties to an existing property

Assume that you're implementing the Local Business schema, which has an address property. Address is a complex object which has street address, city, postal code like this:

![](https://i.imgur.com/z7IrbUk.png)

Address property for Local Business schema

In most cases, these properties are enough (as we try so hard to implement them all for you), but from the [schema.org specification](https://schema.org/PostalAddress), there are a lot more properties for address such as name, description, etc. They're not important and are not required, but if you want to add them, then you can do that with Slim SEO Schema.

As address is an implemented property in the plugin, you can't add it as a new custom property. Instead, you need to add custom property for a sub-param (name, description) using dot notation like this:

![Adding custom properties to an existing property](https://i.imgur.com/TAkqR13.png)

Adding custom properties to an existing property

Note that to add custom properties to an existing property, you need to know the name of the existing property (in the example above, it's `address`). The list of properties name are available in [Google search gallery](https://developers.google.com/search/docs/advanced/structured-data/search-gallery) and [schema.org](https://schema.org) websites.
