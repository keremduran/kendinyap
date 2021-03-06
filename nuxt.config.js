const pkg = require('./package')

module.exports = {
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
      { 
        rel: 'icon', 
        type: 'image/x-icon', 
        href: '/favicon.ico' 
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Zilla+Slab:400,700'
      }
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
    '~/assets/style/app.styl'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/components',
    '~/plugins/vuetify'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    ['storyblok-nuxt', {accessToken: '9gAj9nzrjQTjQqFWrbmjugtt', cacheProvider: 'memory'}]
  ],

  router: {
    middleware: 'languageDetection'
  },
  
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    transpile: [/^vuetify/],
		babel: {
		  plugins: [
			['transform-imports', {
			  'vuetify': {
				'transform': 'vuetify/es5/components/${member}',
				'preventFullImport': true
			  }
			}]
		  ]
		},
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
			if (process.server) {
				config.externals = [
					nodeExternals({
						whitelist: [/^vuetify/]
					})
				]
			}      
    }
  }
}
