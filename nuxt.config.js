const { sourceFileArray } = require('./contents/summary.json')

const sourceFileNameToUrl = (filepath) => {
  const deleteExt = filepath.replace('.md', '')
  const fileName = deleteExt.split('/')[deleteExt.split('/').length - 1]
  const splitArray = fileName.split('_')
  return `/articles/${splitArray[0]}/${splitArray[1]}`
}
const generateDynamicRoutes = (callback) => {
  const routes = sourceFileArray.map((sourceFileName) => {
    return sourceFileNameToUrl(sourceFileName)
  })
  callback(null, routes)
}

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'curry-like portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'curry-likeのポートフォリオです。'
      }
    ],
    link: [
      { rel: 'icon', type: 'images/x-icon', href: '/favicon.ico' },
      { rel: 'shortcut icon', size: '196x196', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', href: '/favicon.ico' }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@/assets/scss/app.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/prism'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxt/typescript-build'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    ['bootstrap-vue/nuxt', { css: false }],
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/markdownit',
    '@nuxtjs/sitemap'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  markdownit: {
    injected: true,
    breaks: true,
    html: true,
    linkify: true,
    typography: true
  },
  generate: {
    routes: generateDynamicRoutes
  },
  sitemap: {
    hostname: process.env.BASE_URL || 'http://localhost:3000',
    path: '/sitemap.xml',
    generate: true
  }
}
