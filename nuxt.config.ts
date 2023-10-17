import { defineNuxtConfig } from 'nuxt/config'
import svgLoader from 'vite-svg-loader'

import { alias } from './alias.config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias,
  colorMode: {
    preference: 'light',
  },
  imports: {
    autoImport: false,
  },
  modules: [
    '@nuxt/ui',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    // 'nuxt-vuefire'
  ],
  srcDir: 'src/',
  ssr: false,
  tailwindcss: {
    cssPath: '@/assets/css/main.css',
    configPath: 'tailwind.config',
  },
  typescript: {
    shim: false,
  },
  vite: {
    plugins: [svgLoader()],
  },
  vue: {
    propsDestructure: true,
  },
  // vuefire: {
  //   config: {
  //     apiKey: 'AIzaSyB_25IAKZ2pXSi3nOrUZ16mPHFxPfKK7yo',
  //     authDomain: 'muastudio-test.firebaseapp.com',
  //     projectId: 'muastudio-test',
  //     storageBucket: 'muastudio-test.appspot.com',
  //     messagingSenderId: '416445250536',
  //     appId: '1:416445250536:web:745775e35626d63304025d',
  //   },
  //   emulators: {
  //     auth: {
  //       options: {
  //         disableWarnings: true,
  //       },
  //     },
  //   },
  // },
})
