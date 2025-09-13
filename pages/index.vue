<script setup lang="ts">

import { ref } from "vue";

const active = ref < string > ("todo");

const updateActive = (tab: string) => {
    active.value = tab;
    return;
}

</script>

<template>
    <div class="w-full h-full">
        <div class="flex flex-row w-full h-[15vh] bg-blue-100 gap-4 justify-around mb-5 fixed top-1">
            <div class="text-3xl underline font-[12px] cursor-pointer" @click="updateActive('todo')">TodoApp</div>
            <div class="text-3xl underline font-[12px] cursor-pointer" @click="updateActive('tictac')">TicTacToe</div>
            <div class="text-3xl underline font-[12px] cursor-pointer" @click="updateActive('autocomplete')">AutoComplete</div>
        </div>
        <TodoApp v-if="active=='todo'" class="mx-auto"/>
        <AutoCompleteInput v-if="active=='autocomplete'"/>
    </div>

</template>