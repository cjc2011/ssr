const pkg = require('./package')
const dev = require('./nuxt.dev-config.js')
const prd = require('./nuxt.prd-config.js')

const merge = require('webpack-merge')

const baseConfig = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    './assets/css/global/index.scss',
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
  ],

  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    modules: [
      '@nuxtjs/style-resources',
    ],
    styleResources: {
      scss: [
        './assets/css/global/*.scss',
        './assets/css/pages/about/*.scss',
      ]
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      if (config.isClient) {

        // config.module.rules
      }
    }
  }
}

module.exports = merge(baseConfig, process.env.NODE_ENV === 'production' ? prd : dev)
