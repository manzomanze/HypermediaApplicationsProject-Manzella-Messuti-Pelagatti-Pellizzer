export default {
  // Magia e stregoneria
  ssr: true,
  target: 'server',
  // Open server to lan
  server: {
    port: 3000, // default: 3000
    host: 'localhost', // default: localhost
  },
  env: {
    //BASE_URL: 'https://test-polimi.herokuapp.com/', // Production URL
    BASE_URL: '', // Development URL
/*     configurationId: '6cfabbb7-1bee-484f-abfc-b742d15b92dc', HYPERMEDIA EXAMPLE
*/  configurationId: 'b6e3956a-8d35-4f64-b39d-910ed18bb470',
},
  serverMiddleware: [
    {
      path: '/api',
      handler: '~/server/rest/api.js',
    },
  ],

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Response',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'language', content: 'EN' },
      {
        name: 'keywords',
        content:
          'response, consulting, technology, cyber, cybersecurity, cloud, digital, artificial intelligence',
      },
      {
        name: 'description',
        content:
          'This is the website of one of the most relevant consulting company in the world, Response',
      },
      { name: 'copyright', content: 'Response' },
      { name: 'author', content: 'Manzella, Messuti, Pelagatti, Pellizzer' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/static/fontawesome-free-5.15.3-web/css/all.min.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/mmcc.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    cache: false,
  },
}
