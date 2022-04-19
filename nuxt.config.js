export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  router: {
    base: '/new-artica/'
  },
  // server: {
  //   host: '0.0.0.0',
  //   port: 8000
  // },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'new-artica',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'modern-normalize/modern-normalize.css',
    '~/assets/styles/main.scss'
  ],
  styleResources: {
    scss: [
      '~/assets/styles/components/_vars.scss',
      '~/assets/styles/components/_breakpoints.scss'
    ]
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vuex-persist.js', mode: 'client' },
    { src: '~/plugins/customMouse.js', mode: 'client' },
    { src: '~/plugins/touchHoverEvents.js', mode: 'client' },
    { src: '~/plugins/animateFake3d.js', mode: 'client' },
    // { src: '~/plugins/headerAnimations.js', mode: 'client' },
    { src: '~/plugins/splitting.js', mode: 'client' },
    { src: '~/plugins/animateCatCards.js', mode: 'client' },

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    'nuxt-gsap-module',
    '@nuxtjs/device',
    'nuxt-lazysizes',
    '@nuxtjs/svg'
  ],
  lazySizes: {
    extendAssetUrls: {
      img: ['src', 'srcset', 'data-src', 'data-srcset'],
      source: ['src', 'srcset', 'data-src', 'data-srcset']
    },
    loadedClass: 'lazyloaded'
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/axios',
    '@nuxtjs/style-resources'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
