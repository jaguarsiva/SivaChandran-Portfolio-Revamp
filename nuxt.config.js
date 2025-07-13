export default {
    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],
    compatibilityDate: '2025-07-13',

    // Auto import components: https://go.nuxtjs.dev/config-components

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module',
        '@nuxtjs/style-resources'
    ],
    css: ['~/assets/styles/index.scss'],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData:
                        '@use "~/assets/styles/_abstracts.scss" as *;'
                }
            }
        }
    },

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
    generate: {
        routes: ['/skills', 'works']
    }
};
