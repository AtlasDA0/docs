// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {
  themes: { github: lightCodeTheme, dracula: darkCodeTheme },
} = require("prism-react-renderer");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Atlas DAO dapp",
  tagline: "DAOs for everyone",
  url: "https://docs.atlasdao.zone",
  organizationName: "AtlasDA0", // Github org name
  projectName: "docs", // Usually your repo name.
  deploymentBranch: "gh-pages",
  trailingSlash: false,
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "https://daodao.zone/daodao.png",
  // stylesheets: [
  //   'https://fonts.googleapis.com/css2?family=Inter:wght@500;600,'
  // ],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: "docs",
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/AtlasDA0/docs/tree/main/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      // meta image https://docusaurus.io/docs/api/themes/configuration#meta-image
      image: "img/banner.jpeg",
      // announcement bar
      // https://docusaurus.io/docs/api/themes/configuration#announcement-bar
      navbar: {
        title: "Atlas DAO",
        hideOnScroll: true,
        // logo: {
        //   alt: "DAO DAO Logo",
        //   src: "img/daodao-dark.png",
        //   srcDark: "img/daodao-light.png",
        // },
        items: [
          {
            type: "doc",
            docId: "introduction/welcome",
            position: "left",
            label: "Quickstart",
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
