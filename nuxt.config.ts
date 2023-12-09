// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        class: 'dark',
      },

      meta: [
        { name: 'theme-color', content: '#4285f4' },
      ],
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
      theme_color: '#ffffff',
      icons: [
        {
          src: '144x144.png',
          sizes: '144x144',
          type: 'image/png',
        },
        {
          src: '256x256.png',
          sizes: '256x256',
          type: 'image/png',
          purpose: 'maskable',
        },
        {
          src: '512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ]
    },

    client: {
      installPrompt: true,
    },

    workbox: {
      globPatterns: ['_nuxt/builds/**/*.json'],
      skipWaiting: true,

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
