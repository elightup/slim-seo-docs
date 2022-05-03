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
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/elightup/slim-seo-docs/tree/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
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
      image: 'https://i0.wp.com/wpslimseo.com/wp-content/uploads/2020/07/slim-seo.png',
      autoCollapseSidebarCategories: true,
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        logo: {
          alt: 'Slim SEO Logo',
          src: 'img/logo.svg',
          srcDark: 'img/logo-white.svg',
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
                label: 'Privacy Policy',
                href: 'https://wpslimseo.com/privacy-policy/',
              },
              {
                label: 'Terms & Conditions',
                href: 'https://wpslimseo.com/terms/',
              },
            ],
          },
          {
            title: 'Account',
            items: [
              {
                label: 'My Account',
                href: 'https://wpslimseo.com/my-account/',
              },
              {
                label: 'Open a Support Ticket',
                href: 'https://wpslimseo.com/my-account/support/',
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
                label: 'Youtube',
                href: 'https://www.youtube.com/channel/UCDh7n12cD-ZILPHvKx9dOnw',
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
