// https://nuxt.com/docs/api/configuration/nuxt-config
console.log('processEnv: ' + process.env.APP_ENV)
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      APP_ENV: 'development'
    }
  }
})
