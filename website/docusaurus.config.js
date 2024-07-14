// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'HazardID: LLM-Guided Natural Hazard Taxonomisation',
  tagline: 'In collaboration with the International Federation of Red Cross and Red Crescent Societies (IFRC)',
  favicon: 'img/ifrc.png',

  // Set the production url of your site here
  url: 'https://students.cs.ucl.ac.uk/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/2023/group38/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'SysEng 38', // Usually your GitHub org/user name.
  projectName: 'natural-hazard-final', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          sidebarPath: './sidebars.js',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
  themeConfig:
    ({
      image: 'img/ifrc.png',
      navbar: {
        title: 'SysEng 38',
        logo: {
          alt: 'Site Logo',
          src: 'img/ifrc.png',
          target: '_self',
          width: 32,
          height: 32,
          className: 'custom-navbar-logo-class',
        },
        items: [
          {to: 'https://hazard-id.streamlit.app/', label: 'HazardID', position: 'right'},
          {
            type: 'doc',
            position: 'left',
            docId: 'Requirements',
            label: 'Requirements',
          },
          {
            type: 'doc',
            position: 'left',
            docId: 'Research',
            label: 'Research',
          },
          {
            type: 'doc',
            position: 'left',
            docId: 'Algorithms',
            label: 'Algorithms',
          },
          {
            type: 'doc',
            position: 'left',
            docId: 'Project_Overview',
            label: 'Project Overview',
          },
          {
            type: 'doc',
            position: 'left',
            docId: 'Implementation',
            label: 'Implementation',
          },
          {
            type: 'doc',
            position: 'left',
            docId: 'Testing',
            label: 'Testing',
          },
          {
            type: 'doc',
            position: 'left',
            docId: 'Evaluation',
            label: 'Evaluation',
          },
          {
            type: 'doc',
            position: 'left',
            docId: 'Appendices',
            label: 'Appendices',
          },
          {
            type: 'doc',
            position: 'left',
            docId: 'Documentation',
            label: 'Documentation',
          },
          {to: 'https://flashy-giraffe-4de.notion.site/Blog-3ca1fd714fe646cf854d4887bdd14bdd', label: 'Blog', position: 'right'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: "Let's keep in touch ❤️",  
            items: [
              {
                label: 'GitHub (access-protected)',
                to: 'https://github.com/SysEng-Group-38/natural-hazard-id-final',
              },
              {
                label: 'Systems Engineering Group 38',
                to: 'https://imgur.com/a/jesTsRd',
              },
            ],
          },
          {
            title: 'Interesting Pages',
            items: [
              {
                label: 'IFRC Homepage',
                href: 'https://www.ifrc.org/',
              },
              {
                label: 'UCL Homepage',
                href: 'https://www.ucl.ac.uk/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Legal Statement ',
                to: 'docs/Legal',
              },
              {
                label: 'Website Repository',
                href: 'https://github.com/SysEng-Group-38/project-website',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} SysEng 38. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
    }),
};

export default config;
