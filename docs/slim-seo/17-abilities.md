---
title: Abilities
---

The abilities from Slim SEO are built on the [WordPress Abilities API](https://developer.wordpress.org/apis/abilities-api/). They let AI agents - such as Claude or Cursor - get and update meta tags on your site.

Slim SEO uses the official [MCP Adapter](https://github.com/WordPress/mcp-adapter) plugin to handle communication. The adapter translates WordPress abilities into the [Model Context Protocol (MCP)](https://modelcontextprotocol.io) that AI agents understand.

With these abilities, an AI agent can read and change meta titles, meta descriptions, social images, canonical URLs, and noindex settings for posts, terms, the homepage, archives, and default templates. This saves time when you optimize many pages or keep SEO data in sync with content changes.

## Requirements

1. Use WordPress 6.9 or later. The Abilities API is part of WordPress core from that version.
1. Install and activate the [MCP Adapter](https://github.com/WordPress/mcp-adapter) plugin.

## Connecting AI agents to WordPress

First, connect WordPress to an AI agent via the MCP Adapter plugin. It exposes WordPress as an MCP server that AI agents can connect to.

### 1. Install MCP Adapter plugin

1. Download the [latest release of MCP Adapter](https://github.com/WordPress/mcp-adapter/releases/latest) from GitHub.
1. Go to **Plugins → Add New → Upload Plugin**, select the ZIP file, then install and activate the plugin.

You can also install it with WP-CLI:

```bash
wp plugin install https://github.com/WordPress/mcp-adapter/releases/latest/download/mcp-adapter.zip --activate
```

### 2. Generate application password

MCP Adapter uses Application Passwords for authentication (not your account password).

1. Go to **Users → Profile**.
1. Scroll to the **Application Passwords** section.
1. Enter a name (e.g. "MCP Agent"), then click **Add New Application Password**.
1. Copy the generated password - it is shown only once.

:::warning
An application password grants the same capabilities as the user account it belongs to. To restrict permissions, create a dedicated WordPress user with an appropriate role (e.g. Editor or Author) first, then generate an application password under that user.
:::

### 3. Configure MCP clients

Configure MCP clients (Claude Desktop, Claude Code, Cursor, etc.) to connect to your WordPress MCP server using HTTP transport via a proxy. Use `@automattic/mcp-wordpress-remote` to bridge local stdio to remote WordPress HTTP:

```json
{
  "mcpServers": {
    "wordpress-http": {
      "command": "npx",
      "args": [
        "-y",
        "@automattic/mcp-wordpress-remote@latest"
      ],
      "env": {
        "WP_API_URL": "http://your-site.com/wp-json/mcp/mcp-adapter-default-server",
        "LOG_FILE": "/path/to/logs/mcp-adapter.log",
        "WP_API_USERNAME": "your-username",
        "WP_API_PASSWORD": "your-application-password"
      }
    }
  }
}
```

Replace:

- The domain in `WP_API_URL` with your site domain
- `WP_API_USERNAME` with your WordPress username
- `WP_API_PASSWORD` with the Application Password from Step 2
- `LOG_FILE` with the path where logs should be written

For more details, follow the instructions in the [MCP Adapter GitHub repository](https://github.com/WordPress/mcp-adapter).

Slim SEO marks its meta tag abilities as public MCP tools. After setup, the agent discovers them and can call them.

## Available abilities

Slim SEO registers these abilities in the `slim-seo` category:

| Ability | Purpose |
| --- | --- |
| `slim-seo/get-post-meta-tags` | Get meta tags for a post |
| `slim-seo/update-post-meta-tags` | Update meta tags for a post |
| `slim-seo/get-term-meta-tags` | Get meta tags for a term |
| `slim-seo/update-term-meta-tags` | Update meta tags for a term |
| `slim-seo/get-default-meta-tags` | Get default meta tags for a post type, taxonomy, or author archives |
| `slim-seo/update-default-meta-tags` | Update default meta tags for a post type, taxonomy, or author archives |
| `slim-seo/get-homepage-meta-tags` | Get meta tags for the homepage |
| `slim-seo/update-homepage-meta-tags` | Update meta tags for the homepage |
| `slim-seo/get-post-type-archive-meta-tags` | Get meta tags for a post type archive |
| `slim-seo/update-post-type-archive-meta-tags` | Update meta tags for a post type archive |

## Meta tag fields

Get abilities return these fields when they apply to the context:

| Field | Description |
| --- | --- |
| `title` | Meta title |
| `description` | Meta description |
| `facebook_image` | Open Graph image URL |
| `x_image` | X (Twitter) image URL |
| `canonical` | Canonical URL (posts and terms only) |
| `noindex` | Whether search engines must exclude the page (`true` or `false`) |

For text fields, each get response uses this shape:

```json
{
  "raw": "{{ post.title }} {{ sep }} {{ site.title }}",
  "rendered": "Hello World - My Site"
}
```

- `raw` is the stored value. It can contain [dynamic variables](/slim-seo/dynamic-variables/).
- `rendered` is the value after Slim SEO replaces the variables.

Update abilities accept plain strings for text fields. They accept a boolean for `noindex`. An update changes only the fields you send. Other fields stay unchanged.

A successful update returns `true`.
