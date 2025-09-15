<script setup lang="ts">
import {ref} from "vue";
import Updater from "./updater.vue";


const count = ref<number>(0);

</script>


<template>
    <div class="h-20vh w-full">
        <div class="mx-auto w-[50%] bg-blue-500">
            <h1 class="text-3xl text-center text-white">Counter {{ count }}</h1>
        </div>
        <Updater v-model:count="count"/>
    </div>

</template>