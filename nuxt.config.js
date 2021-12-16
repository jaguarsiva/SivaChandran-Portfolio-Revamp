const description = 'Professional Computer Science Engineer building crazy stuff in the web. Proven ability to transform user interface designs to pixel perfect responsive websites.';

const title = "Siva Chandran's Portfolio — Frontend Web Developer, MEVN Stack Developer";

export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title,
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: description
            },
            { name: 'format-detection', content: 'telephone=no' },
            { property: 'og:type', content: 'website' },
            { property: 'og:url', content: 'https://sivacodes.in/' },
            {
                property: 'og:title',
                content: title
            },
            {
                property: 'og:description',
                content: description
            },
            { property: 'og:image', content: 'https://sivacodes.in/logo.png' },
            { property: 'twitter:card', content: 'summary_large_image' },
            { property: 'twitter:url', content: 'https://sivacodes.in/' },
            {
                property: 'twitter:title',
                content: title
            },
            {
                property: 'twitter:description',
                content: description
            },
            {
                property: 'twitter:image',
                content: 'https://sivacodes.in/logo.png'
            }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
            {
                rel: 'preconnect',
                href: 'https://fonts.gstatic.com',
                crossorigin: true
            },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Signika:wght@300;400;500;600;700&display=swap'
            }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ['~assets/styles/index.scss'],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module',
        '@nuxtjs/style-resources'
    ],

    styleResources: {
        scss: ['~assets/styles/_abstracts.scss']
    },

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
    generate: {
        routes: ['/skills', 'works']
    }
};
