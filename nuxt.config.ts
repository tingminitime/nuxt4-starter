import tailwindcss from '@tailwindcss/vite'
import { appDescription } from './app/constants/index'

export default defineNuxtConfig({
  devtools: { enabled: true },

  srcDir: 'app', // default

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  modules: [
    '@nuxt/fonts',
    '@nuxtjs/color-mode',
    '@nuxt/icon',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxt/eslint',
  ],

  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
    },
  },

  app: {
    head: {
      meta: [
        { name: 'description', content: appDescription },
      ],
    },
  },

  icon: {
    mode: 'css',
    cssLayer: 'base', // for TailwindCSS v4
  },

  colorMode: {
    classSuffix: '',
  },

  pinia: {
    storesDirs: ['./stores/**'],
  },

  eslint: {
    config: {
      standalone: false,
    },
  },

  compatibilityDate: '2026-04-22',

  nitro: {
    preset: 'cloudflare-module',
    cloudflare: {
      deployConfig: true,
      nodeCompat: true,
    },
  },
})
