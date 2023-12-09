// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        class: 'dark',
      },
    },
  },

  devtools: {
    enabled: true,
  },

  modules: [
    '@nuxtjs/tailwindcss',
  ],

  runtimeConfig: {
    baseUrl: process.env.BASE_URL,
    public: {
      baseURL: process.env.PUBLIC_BASE_URL,
    },
  },

  vite: {
    server: {
      proxy: {
        '/api': {
          target: process.env.API_URL || 'http://127.0.0.1:8080',
          changeOrigin: false,
          rewrite: (path: string): string => path.substring(4),
        },
      },
    },
  },
});
