export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'homes',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/tiny-slider.css',
    // SCSS file in the project
    '@/assets/scss/index.scss',
    // vue-simple-accordion
    // '~vue-simple-accordion/dist/vue-simple-accordion.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-tiny-slider.js', mode: 'client' },
    { src: '~/plugins/vue-countup.js', mode: 'client' },
    { src: '~/plugins/vue-simple-accordion.js', mode: 'client' },
    { src: '~/plugins/vue-easy-lightbox.js', mode: 'client' },
    { src: '~/plugins/vuex-persistedstate' },
    { src: '~/plugins/axios' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  // components: [
  //   // Equivalent to { path: '~/components' }
  //   '~/components',
  //   { path: '~/components/home', extensions: ['vue'] },
  //   { path: '~/components/about-us', extensions: ['vue'] },
  // ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // font awesome
    '@nuxtjs/fontawesome',
    // dot env
    '@nuxtjs/dotenv',
  ],
  // config fontawesome icons
  fontawesome: {
    component: 'Fa',
    suffix: false,
    icons: {
      solid: true,
      brands: true,
      regular: true,
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // vue scrollto package
    // 'vue-scrollto/nuxt',
    ['vue-scrollto/nuxt', { duration: 1500, easing: 'ease' }],
    // for cookie
    'cookie-universal-nuxt',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
