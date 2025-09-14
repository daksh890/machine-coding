<script setup lang="ts">
import { usePaginatedFetch } from '@/composables/usePaginatedfetch';
import { onMounted, onUnmounted, watch } from 'vue';
import { ref, nextTick } from "vue";

// destructure the refs and methods directly
const { items, isLoading, error, hasMore, loadMore } = usePaginatedFetch();
const sentinel = ref<HTMLElement | null>(null);
let observer: IntersectionObserver | null = null;

const createObserver = () => {
  if (observer) observer.disconnect();
  observer = new IntersectionObserver((enteries) => {
    if (enteries[0]?.isIntersecting && hasMore.value && !isLoading.value) {
      loadMore();
    }
  }, {
    rootMargin: '300px'
  })

  if (sentinel.value) {
    observer.observe(sentinel.value);
  }
}

onMounted(async () => {
  await loadMore();
  console.log("itefem", items.value); // still use .value in script
  createObserver();

});
onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});

watch(items, async () => {
  await nextTick();
  createObserver();
})

</script>

<template>
  <div v-if="items.length > 0">
    <ul>
      <li v-for="(item, index) in items" :key="item.id">
        {{ item.title }} - ${{ item.price }}
      </li>
    </ul>

  </div>
  
  <div v-else-if="isLoading && items.length == 0">Loading...</div>
  <div v-else-if="error">{{ error }}</div>


  <div ref="sentinel" style="height: 1px;"></div>

  <div v-if="hasMore">
    <button @click="loadMore()" :disabled="isLoading">
      {{ isLoading ? 'Loading' : 'Load More' }}
    </button>
  </div>
</template>
