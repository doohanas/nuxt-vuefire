// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    // ... other modules
    'nuxt-vuefire',
  ],
  vuefire: {
    config: {
      apiKey: process.env.FIREBARE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      projectId: process.env.FIREBASE_PROJECT_ID,
      appId: process.env.FIREBASE_APP_ID,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      measurementId: process.env.FIREBASE_MEASUREMENT_ID
      // there could be other properties depending on the project
    },
  },
})
