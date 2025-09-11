// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: '2025-08-22',
  css: ['~/assets/css/main.css'],
  modules: ['@nuxt/content', "@nuxt/image"],
  content: {
    api: {
      baseURL: '/api/_content'
    }
  },
  app: {
    head: {
      title: process.env.npm_package_name || '',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: 'https://1.gravatar.com/avatar/a85051d369a9ee1131d28d56ec04fc17' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: 'https://1.gravatar.com/avatar/a85051d369a9ee1131d28d56ec04fc17' },
        { rel: 'icon', type: 'image/png', sizes: '96x96', href: 'https://1.gravatar.com/avatar/a85051d369a9ee1131d28d56ec04fc17' }
      ]
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})