// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SomeKirill',
  tagline: `Intro here`,

  // Set the production url of your site here
  url: 'https://somekirill.netlify.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'somekirill', // Usually your GitHub org/user name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      
      // Replace with your project's social card
      image: 'img/kaan-caglan-logo.png',
      navbar: {
        title: 'Main Page',
        items: [         
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Resources',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/somekirill',
            position: 'right',
            className: "header-github-link",

          },
          {
            href: 'https://www.linkedin.com/in/somekirill//',
            position: 'right',
            className: 'navbar__icon navbar__linkedin',
          },
          
          {
            href: "/about",
            label: "About Me",
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          // {
          //   title: 'Docs',
          //   items: [
          //     {
          //       label: 'Tutorial',
          //       to: '/docs/intro',
          //     },
          //   ],
          // },
          {
            title: "Social",
            items: [
              {
                label: "About Me",
                href: "/about"
              },
              {
                label: "Mail",
                href: "mailto:kirillvolkov2001@gmail.com"
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/SomeKirill',
              },
              {
                href: 'https://www.linkedin.com/in/SomeKirill/',
                label: 'Linkedin',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Kirill Volkov. All rights reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      
    }),

  themes:[
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      ({
        hashed: true,

      }),
    ],
  ],
};

module.exports = config;
