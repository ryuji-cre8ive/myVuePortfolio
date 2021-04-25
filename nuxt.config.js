
module.exports = {
  mode: 'universal',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-portfolio',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no, minimum-scale=1, maximum-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  script: [
    {src: '~/static/index.js', lang: 'js'}
  ],
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    {src: '~/assets/main.scss', lang: "scss"}
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],
  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['fab']
      },
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
      }
    ]
  },
  dev: process.env.NODE_ENV !== 'production',
  serverMiddleware: ['~/api/index.js'],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/axios",
    'nuxt-fontawesome',
    '@nuxtjs/proxy',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['gsap']
  },
  axios: {
    prefix: "/post",
    prefix: "/data"
  },
  proxy: {
    '/post': {
      target: 'https://stormy-hollows-34938.herokuapp.com/',
      pathRewrite: {
        '^/post': '/'
      }},
    '/data': {
      target: 'https://stormy-hollows-34938.herokuapp.com/',
      pathRewrite: {
        '^/data': '/'
      }}
  },

  // serverMiddleware: ['~/post/index.js'],
  // loading: '~/components/loading.vue'
}


