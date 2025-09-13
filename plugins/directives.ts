//@ts-ignore
import { defineNuxtPlugin } from '#app'
import focus from '@/directives/focus'
import debounce from '@/directives/debounce';
import type { App } from 'vue';

interface MyNuxtApp {
  vueApp: App
}

export default defineNuxtPlugin((nuxtApp:MyNuxtApp) => {
  nuxtApp.vueApp.directive('focus', focus);
  nuxtApp.vueApp.directive('debounce', debounce);
})
