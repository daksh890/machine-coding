<script setup lang="ts">


const props = defineProps({
    count:{
        type:Number,
        required:true
    }
})

const emit = defineEmits(['update:count'])
</script>

<template>
<div class="w-[50%] mx-auto flex flex-row justify-center gap-2 my-4">
    <button @click="emit('update:count', props.count+1)" class="px-4 py-1 rounded bg-blue-500 text-3xl text-white">Increment</button>
    <button @click="emit('update:count', props.count-1)" class="px-4 py-1 rounded bg-blue-500 text-3xl text-white">Decrement</button>
</div>

</template>
