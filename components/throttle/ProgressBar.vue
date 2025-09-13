<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
    progress: {
        type: Number,
        required: true,
        default:0
    },
    color: {
        type: String,
        required: false,
        default:'bg-blue-500'
    },
    height: {
        type: String,
        required: false,
        default:'h-4'
    }
})

</script>

<template>
    <h1 class="text-3xl text-blue-400 mx-auto">Progress Bar {{ props.progress }}</h1>
    <div class="w-[90%] bg-gray-300 rounded mx-auto">
        <div class="transition-all duration-200 ease-in-out rounded" :class="[props.color, props.height]"
            :style="{ width: props.progress + '%' }"></div>
    </div>


</template>