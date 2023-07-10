// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Be Swarm',


    tagline: 'Toutes les ressources pour bien comprende et utiliser la plateforme BeSwarm',
    url: 'https://github.com/',
    baseUrl: '/Dev/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'be-swarm', // Usually your GitHub org/user name.
    projectName: 'Dev', // Usually your repo name.
    deploymentBranch: "gh-pages",


    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'fr',
        locales: ['fr'],
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
                    //editUrl:
                    //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    //editUrl:
                    //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
            navbar: {
                title: 'Accueil',
                logo: {
                    alt: 'Accueil',
                    src: 'img/logo-beswarm.png',
                },
                items: [
                    {
                        type: 'doc',
                        docId: 'intro',
                        position: 'left',
                        label: 'Tutoriels',
                    },
                    { to: '/blog', label: 'Blog', position: 'left' },
   
                ],
            },
            footer: {
                style: 'dark',
                links: [

                    {
                        title: 'Communauté',
                        items: [
                            {
                                label: 'Slack',
                                href: 'https://beswarm-group.slack.com',
                            },
                            {
                                label: 'Twitter',
                                href: 'https://twitter.com/swarm_be',
                            },
                            {
                                label: 'Linkedin',
                                href: 'https://www.linkedin.com/company/be-swarm/?viewAsMember=true',
                            },
                            {
                                label: 'GitHub',
                                href: 'https://github.com/be-swarm',
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} Be Swarm.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
                additionalLanguages: ['csharp'],

            },
        }),
};

module.exports = config;
