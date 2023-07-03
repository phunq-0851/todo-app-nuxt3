// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: [
    '~/assets/css/main.css',
    '~/assets/scss/main.scss'
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/_color.scss" as *;'
        }
      }
    }
  },
  modules: [
    '@element-plus/nuxt'
  ],
  // devServer: {
  //   port: 3001,
  //   host: 'localhost'
  // }
})
