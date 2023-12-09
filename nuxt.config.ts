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
    '@pinia/nuxt',
    '@vite-pwa/nuxt',
  ],

  pwa: {
    manifest: {
      name: 'Shop App',
      short_name: 'Shop App',
      description: 'Shop App Admin',
      display: 'standalone',
    },

    client: {
      installPrompt: true,
    },

    workbox: {
      globPatterns: ['_nuxt/builds/**/*.json'],

      runtimeCaching: [
        {
          urlPattern: new RegExp('http://127.0.0.1*'),
          handler: 'NetworkFirst',
        },
      ],
    },

    devOptions: {
      enabled: true,
      type: 'module',
    },
  },

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

  css: ['@/assets/scss/main.scss'],

  plugins: [
    '@/plugins/alert',
  ],
});
