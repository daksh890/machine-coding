// https://nuxt.com/docs/api/configuration/nuxt-config
/// <reference types="@nuxt/schema" />
import tailwindcss from "@tailwindcss/vite";
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  typescript: {
    typeCheck: true,
    strict:false
  }
})
