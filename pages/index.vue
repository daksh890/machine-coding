<script setup lang="ts">

import { ref } from "vue";

const active = ref<string>("todo");
const open = ref<boolean>(false);

const updateActive = (tab: string) => {
    active.value = tab;
    return;
}
const debounceValue = ref<string>("");

const onDebounce = (value:string)=>{
    console.log(value);
    debounceValue.value = value;
}

</script>

<template>
    <div class="w-full h-full">
        <div class="flex flex-row w-full h-[15vh] bg-blue-100 gap-4 justify-around mb-5 fixed top-1">
            <div class="text-3xl underline font-[12px] cursor-pointer" @click="updateActive('todo')">TodoApp</div>
            <div class="text-3xl underline font-[12px] cursor-pointer" @click="updateActive('tictac')">TicTacToe</div>
            <div class="text-3xl underline font-[12px] cursor-pointer" @click="updateActive('autocomplete')">
                AutoComplete</div>
            <div class="text-3xl underline font-[12px] cursor-pointer" @click="updateActive('progressbar')">Progress Bar</div>

        </div>
        <TodoApp v-if="active == 'todo'" class="mx-auto" />
        <AutoCompleteInput v-if="active == 'autocomplete'" />
        <Throttle v-if="active == 'progressbar'"/>


        <template>
            <div class="w-full mt-4 flex justify-center">
                <button @click="open = true" class="bg-blue-500 text-white px-4 py-2 rounded ">Open
                    Modal</button>
                <Modal title="My Modal" :value="debounceValue" :show="open" @close="open = false">
                    <input v-focus v-debounce:700="onDebounce" placeholder="Type something..." class="border p-2 w-full" />
                </Modal>
            </div>

        </template>
    </div>

</template>