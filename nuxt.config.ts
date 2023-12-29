const routerBase =
  process.env.DEPLOY_ENV === 'GH_PAGES'
    ? {
        router: {
          base: '/'
        }
      }
    : {}

const app = 
  process.env.DEPLOY_ENV === 'GH_PAGES'
    ? {
        baseURL: '/',
        buildAssetsDir: 'assets'
      }
    : {}

// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  devtools: { enabled: true },
  app,
  routerBase,
  css: [
    '@/assets/scss/app.scss',
    '@/node_modules/bootstrap-icons/font/bootstrap-icons.css'
  ],
  postcss: {
    plugins: {
      autoprefixer: true
    }
  },
  modules: ['@pinia/nuxt']
}