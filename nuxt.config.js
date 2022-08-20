export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Rastgele Kullanıcı Verisi Oluştur || Serdar Göleli || v.1.13',
    htmlAttrs: {
      lang: 'tr',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: "nuxtjs + tailwindcss kullanarak geliştirmiş olduğum rastgale insan verisi oluşturan SPA'dır.",
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'mage/svg+xml', href: '/icon.svg' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxt/postcss8',
    '@nuxtjs/pwa',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    ['cookie-universal-nuxt', { alias: 'cookiz' }],
    //  https://i18n.nuxtjs.org/
    '@nuxtjs/i18n',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'https://randomuser.me/api/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  i18n: {
    // flag package = https://www.npmjs.com/package/vue-country-flag
    locales: [
      { code: 'tr', name: 'Türkçe', file: 'tr.json', flag: 'tr' },
      { code: 'en', name: 'English', file: 'en.json', flag: 'gb' },
      { code: 'fr', name: 'Français', file: 'fr.json', flag: 'fr' },
      { code: 'ru', name: 'Русский', file: 'ru.json', flag: 'ru' },
      { code: 'it', name: 'Italiano', file: 'it.json', flag: 'it' },
    ],
    baseUrl: 'http://localhost:3000',
    defaultLocale: 'tr',
    langDir: 'languages/',
  },
  pwa: {
    manifest: {
      name: 'Rastgele Kullanıcı Verisi',
      lang: 'tr',
      useWebmanifestExtension: false,
    },
    icon: {
      fileName: 'icon.png',
      sizes: [64, 120, 144, 152, 192, 384, 512],
    },
  },
}
