import { ref, watch } from 'vue';
import type { Suggestion } from '../types/suggestions';
import { useFetch, useNuxtApp } from 'nuxt/app';
import { ofetch } from 'ofetch';


export const useAutoComplete = (apiEndpoint: string) => {
  const input = ref<string>('');
  const suggestions = ref<Suggestion[]>([]);
  const isLoading = ref<boolean>(false);
  let timeout: number | undefined;

  const {$fetch} = useNuxtApp();

  // Fetch suggestions from API
  const fetchSuggestions = async (query: string) => {
    isLoading.value = true;
    try {
      const data : Suggestion[] = await ofetch<Suggestion[]>(apiEndpoint, { params: { q: query } });
      suggestions.value = data;
    } catch (err) {
      console.error(err);
      suggestions.value = [];
    } finally {
      isLoading.value = false;
    }
  };

  // Watch input with debounce using arrow functions
  watch(input, (val: string) => {
    if (timeout) clearTimeout(timeout);
    if (!val) {
      suggestions.value = [];
      return;
    }
    timeout = window.setTimeout(() => fetchSuggestions(val), 300);
  });

  return { input, suggestions, isLoading };
};
