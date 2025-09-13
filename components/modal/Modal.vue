<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
    title:{
        type:String,
        required:true
    },
    show:{
        type:Boolean,
        required:true
    },
    value:{
        type:String,
        required:true
    }
})

// const title = ref<string>("");
// const show = ref<boolean>(false);

const emit = defineEmits(["close"]);

</script>

<template>
    <Teleport to="#modal-root">
        <div v-if="props.show" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div class="bg-white rounded-lg shadow-lg w-96 p-4">
                <header class="flex justify-between items-center">
                    <h2 class="text-lg font-bold">{{ props.title }}</h2>
                    <button @click="$emit('close')" class="text-red-500">X</button>
                </header>
                <div class="mt-2">
                    <slot />
                </div>

                <div>
                    <p class="text-2xl text-amber-200">{{ props.value }}</p>
                </div>
            </div>
        </div>
    </Teleport>
</template>