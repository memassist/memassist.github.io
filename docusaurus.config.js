// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MemAssist',
  tagline: 'Cache Memory Optimization Tool',
  url: 'https://memassist.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'memassist', // Usually your GitHub org/user name.
  projectName: 'memassist.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  i18n: {
    defaultLocale: 'en-GB',
    locales: ['en-GB']
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          showLastUpdateTime: false,
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/memassist/memassist.github.io/edit/main',
          lastVersion: 'current',
          versions: {
            current: {
              label: '1.x.x',
            },
          },
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/memassist/memassist.github.io/edit/main/...',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        // googleAnalytics: {
        gtag: {
          trackingID: 'G-29Y2WDH8TB',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [{name: 'keywords', content: 'memassist, reuse distance analysis, locality optimization, source code analysis'}],
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      docs: {
        sidebar: {
          hideable: true
        }
      },
      navbar: {
        title: 'MemAssist',
        logo: {
          alt: 'MemAssist Logo',
          src: 'img/logo.png',
        },
        hideOnScroll: true,
        items: [
          {
            type: 'doc',
            docId: 'tutorial/intro',
            position: 'right',
            label: 'Tutorial',
          },
          {
            href: 'https://memassist.lezos.gr/',
            label: 'Demo',
            position: 'right',
          },
          // {
          //   href: 'https://github.com/memassist',
          //   label: 'GitHub',
          //   position: 'right',
          // },
          {
            href: 'https://github.com/memassist',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository'
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
          // {
          //   title: 'Community',
          //   items: [
          //     {
          //       label: 'Stack Overflow',
          //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
          //     },
          //     {
          //       label: 'Discord',
          //       href: 'https://discordapp.com/invite/docusaurus',
          //     },
          //     {
          //       label: 'Twitter',
          //       href: 'https://twitter.com/docusaurus',
          //     },
          //   ],
          // },
          // {
          //   title: 'More',
          //   items: [
          //     {
          //       label: 'Blog',
          //       to: '/blog',
          //     },
          //     {
          //       label: 'GitHub',
          //       href: 'https://github.com/memassist',
          //     },
          //   ],
          // },
        ],
        logo: {
          alt: 'MemAssist Logo',
          src: '/img/logo.png',
          href: 'https://memassist.github.io',
        },
        copyright: `Copyright © ${new Date().getFullYear()} MemAssist.`,
      },
    }),
};

module.exports = config;
