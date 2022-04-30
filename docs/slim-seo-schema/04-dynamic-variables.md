---
title: Dynamic Variables
---

Most properties are auto-filled with default values to save you time to enter or select values for them. You can manually enter data for them as well, but we recommend you use the **Insert** button to insert dynamic data for properties.

![Insert dynamic data for properties](https://i.imgur.com/AjPAPBc.png)

Insert dynamic data for properties

When clicking the **Insert** button, you'll see a popup with a list of supported **dynamic variables** for properties. You can search for them (by title) or simply click any of them to insert into the property value input box.

Dynamic variables have the format `{{ name }}`, where `name` is the variable name. You can insert multiple dynamic variables and/or custom text in the text box for the property value.

Below is the list of the dynamic variables supported by the plugin:

### Post variables

| Name | Description |
| --- | --- |
| `{{ post.title }}` | The post title |
| `{{ post.ID }}` | The post ID |
| `{{ post.excerpt }}` | The post excerpt |
| `{{ post.content }}` | The post content |
| `{{ post.url }}` | The post URL |
| `{{ post.date }}` | The post published date |
| `{{ post.modified_date }}` | The post modified date |
| `{{ post.thumbnail }}` | The post thumbnail URL (full size) |
| `{{ post.comment_count }}` | The number of comments for the post |
| `{{ post.word_count }}` | The number of words of the post content |
| `{{ post.tags }}` | The post tags, separated by commas |
| `{{ post.categories }}` | The post categories, separated by commas |
| `{{ post.custom_field.$name }}` | The post custom field (meta) value. `$name` should be replaced by the meta key. |

Note that when selecting **Custom field** from the **Insert** dropdown, a popup will appear that lets you select the custom field to insert into the input box.

### Post author variables

| Name | Description |
| --- | --- |
| `{{ author.ID }}` | The author ID |
| `{{ author.first_name }}` | The author first name |
| `{{ author.last_name }}` | The author last name |
| `{{ author.display_name }}` | The author display name |
| `{{ author.username }}` | The author username |
| `{{ author.nickname }}` | The author nick name |
| `{{ author.email }}` | The author email |
| `{{ author.website_url }}` | The author website's URL |
| `{{ author.nicename }}` | The author nicename |
| `{{ author.description }}` | The author description (bio) |
| `{{ author.posts_url }}` | The URL to the author's archive page |
| `{{ author.avatar }}` | The URL to the author's (Gr)avatar |

### Current user variables

Current user variables are similar to the author variables. The only difference is that instead of the prefix `author`, it uses `user` prefix.

For example: `{{ user.display_name }}` is the current user display name.

### Site variables

| Name | Description |
| --- | --- |
| `{{ site.title }}` | The site title |
| `{{ site.description }}` | The site description (tagline) |
| `{{ site.url }}` | The site URL |
