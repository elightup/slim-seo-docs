---
title: Connecting schemas
---

While creating schemas, you might use the same data such as images or reviews. These repeated data can be separated into individual schemas and reused in other schemas.

## Why multiple schemas?

Using individual schemas gives you more options to enter data. For example, if you enter a review for a product inside the Product schema, you'll have the following properties:

![Review snippet for products](https://i.imgur.com/edmleB8.png)

They're minimum. If you want to enter more details, you can **create another Review snippet schema and link it to the Product schema**.

## How to link schemas?

Before linking schemas, let's create two schemas: one for Product and one for Review snippet:

![Creating Product and Review snippet schemas](https://i.imgur.com/r8UkMgc.png)

As you can see, the review snippet has more details than the embedded version inside the Product schema.

To link Review snippet to the Product schema, we'll use a [custom property](/slim-seo-schema/custom-properties/). Inside the Product schema, click **+ Add Property** and select **Custom**. In the **Key** input, enter "review". And in the **Value** input, click the dots icon to open the panel of [dynamic variables](/slim-seo-schema/dynamic-variables/). Scroll down and you'll see a list of available schemas to insert:

![Insert schema into another schema](https://i.imgur.com/yjcYvZc.png)

Select "Review snippet" and you'll see it's inserted into the input as:

```
{{ schemas.review_snippet }}
```

Now save the Product schema. Now when you view the Product schema on the front end, you'll see it has a review provided by the Review snippet schema.

## Inserting schemas into other properties?

In the example above, you insert the Review snippet in a custom property for the Product schema. But **schemas can be inserted almost everywhere, just like dynamic variables**.

To make it easy for you to compose your schemas, we also add some basic schemas such as Thing, Image, Person, and Organization:

![Basic schemas](https://i.imgur.com/qFXmgR1.png)

You can use these schemas to build small pieces of data and insert them into other schemas as properties.

## Can I change the schema title?

When building multiple schemas, you might have the same schema types. To differentiate them, you can change their title. To change the title, click the schema title in the title bar and enter a new title:

![Changing schema title](https://i.imgur.com/OD4cO96.png)