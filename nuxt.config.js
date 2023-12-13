export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nextips',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''},
      {name: 'format-detection', content: 'telephone=no'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'stylesheet', href: '/assets/css/bootstrap.css'}



    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [

    '~/assets/css/main.scss',
    '@fortawesome/fontawesome-svg-core/styles.css',
    '@fortawesome/fontawesome-free/css/fontawesome.css',
    '@fortawesome/fontawesome-free/css/brands.css',
    '@fortawesome/fontawesome-free/css/solid.css'

  ],

  script: [
    {
      type: 'module',
      src: '/assets/js/jquery-3.6.0.min.js',
    }
  ],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vuelidate',
    '~/plugins/axios.js',
    '~/plugins/fontawesome.js',
   '~/plugins/vue-masonry-wall.js',
   '~/plugins/event-bus.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/toast',
    '@nuxtjs/auth-next',
    'nuxt-vue-select',

    ['cookie-universal-nuxt', {alias: 'cookiz'}],
    ['nuxt-gmaps', {
      key: 'AIzaSyDawcLDvC2WON9zapZRodRmzoNpC6LJdd4',
      //you can use libraries: ['places']
    }]
  ],
  toast: {
    position: 'bottom-right',
    duration: 1800,
    register: [ // Register custom toasts
      {
        name: 'my-error',
        message: 'Oops...Something went wrong',
        options: {
          type: 'error',

        }
      }
    ]
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  axios: {
    baseUrl: 'http://nextips.test',
    credentials: false,

  },
  auth: {
    strategies: {
      local: {
        url: 'http://nextips.test',

        endpoints: {
          login: {url: '/front/auth/login', method: 'post', propertyName: 'token'},
          logout: {url: '/front/logout', method: 'post',},
          user: {url: '/front/auth/user', method: 'get', propertyName: 'user'}
        },
        redirect: {
          login: '/login',
          home: '/'
        },
        user: {
          property: 'user',
          autoFetch: true
        },
        token: {
          property: 'token',
          maxAge: 15768000,
          global: true
        }

      }
    },
  }
}
