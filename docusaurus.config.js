// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/palenight');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Slim SEO Documentation',
  tagline: 'Optimize your website for the best ranking on Google',
  url: 'https://docs.wpslimseo.com',
  baseUrl: '/',
  trailingSlash: true,
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'elightup', // Usually your GitHub org/user name.
  projectName: 'slim-seo-docs', // Usually your repo name.
  titleDelimiter: '-',

  plugins: [
    './lightbox',
  ],

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/elightup/slim-seo-docs/tree/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        googleTagManager: {
          containerId: 'GTM-N55SZ2BT',
        }
      },
    ],
  ],

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        indexBlog: false,
        indexPages: false,
        docsRouteBasePath: "/",
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ( {
      image: 'https://i.imgur.com/eYbsRxD.jpg',
      docs: {
        sidebar: {
          autoCollapseCategories: true,
        }
      },
      colorMode: {
        respectPrefersColorScheme: true,
      },
      announcementBar: {
        content: '🔥 Christmas and New Year sale: Get <b>20% OFF</b> for any plan with coupon <b>XMAS24</b>. <a href="https://wpslimseo.com/products/">Get it now</a>.',
        backgroundColor: '#fed7aa',
        textColor: '#7c2d12',
        isCloseable: false,
      },
      navbar: {
        logo: {
          alt: 'Slim SEO Logo',
          src: 'img/logo.svg',
          srcDark: 'img/logo-white.svg',
          href: 'https://wpslimseo.com'
        },
        items: [
          {
            type: 'doc',
            docId: 'slim-seo/installation',
            position: 'left',
            label: 'Slim SEO',
          },
          {
            type: 'doc',
            docId: 'slim-seo-schema/installation',
            position: 'left',
            label: 'Slim SEO Schema',
          },
          {
            type: 'doc',
            docId: 'slim-seo-link-manager/installation',
            position: 'left',
            label: 'Slim SEO Link Manager',
          },
          {
            href: 'https://www.facebook.com/groups/slimseo',
            label: 'Community',
            position: 'right',
          },
        ],
      },
      footer: {
        logo: {
          src: 'img/logo.svg',
          srcDark: 'img/logo-white.svg',
        },
        style: 'light',
        links: [
          {
            title: 'Slim SEO',
            items: [
              {
                label: 'About',
                href: 'https://wpslimseo.com/about/',
              },
              {
                label: 'Contact',
                href: 'https://wpslimseo.com/contact/',
              },
              {
                label: 'Affiliate',
                href: 'https://wpslimseo.com/affiliate/',
              },
              {
                label: 'My Account',
                href: 'https://wpslimseo.com/my-account/',
              },
            ],
          },
          {
            title: 'Products',
            items: [
              {
                label: 'Slim SEO (free)',
                href: 'https://wordpress.org/plugins/slim-seo/',
              },
              {
                label: 'Slim SEO Schema',
                href: 'https://wpslimseo.com/products/slim-seo-schema/',
              },
              {
                label: 'Slim SEO Link Manager',
                href: 'https://wpslimseo.com/products/slim-seo-link-manager/',
              },
              {
                label: 'Slim SEO vs SEOPress',
                href: 'https://wpslimseo.com/slim-seo-vs-seopress/',
              },
            ],
          },
          {
            title: 'Connect With Us',
            items: [
              {
                label: 'Facebook Group',
                href: 'https://www.facebook.com/groups/slimseo',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/wpslimseo',
              },
              {
                label: 'Github',
                href: 'https://github.com/elightup/slim-seo',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} <a href="https://wpslimseo.com">Slim SEO</a>, a brand of <a href="https://elightup.com">eLightUp</a>.`,
      },
      prism: {
        theme: {
          ...lightCodeTheme,
          plain: {
            backgroundColor: '#f2f5f8'
          }
        },
        darkTheme: {
          ...darkCodeTheme,
          plain: {
            backgroundColor: '#2c3e50'
          }
        },
        additionalLanguages: [ 'php' ],
        defaultLanguage: 'php',
      },
    }),
};

module.exports = config;
