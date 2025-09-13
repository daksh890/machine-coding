<script setup lang="ts">
import { useThrottle } from '@/composables/useThrottle';
import { ref } from 'vue';
import ProgressBar from './ProgressBar.vue';
import { useFetchwithProgress } from '@/composables/useFetchwithProgress';

// const progress = ref<number>(0);
// const flag = ref<boolean>(false);
// const handleClick = () => {
//     flag.value = !flag.value;
//     if(flag.value){
//         const interval = setInterval(()=>{
//             if(!flag.value || progress.value>100){
//                 clearInterval(interval);
//             }else{
//                 incrementProgress();
//             }
//         }, 50)
//     }
// }
// const incrementProgress = useThrottle(()=>{
//     if(progress.value<=100) progress.value+=1
// }, 900)

const {progress, loading, postData, error, fetchData} = useFetchwithProgress();
const handleClick = ()=>{
    fetchData();
}

</script>

<template>
    <div class="mx-auto bg-green-200 h-full w-full flex flex-col gap-[30px] justify-evenly my-auto">
        <button @click="handleClick" class="h-full p-2 w-[200px] mx-auto cursor-pointer border-2 bg-blue-500 text-white text-[14px]" :disabled="loading">{{ !loading ? "Start Data Fetching" : "Stop Data Fetching" }}</button>
        <ProgressBar v-if="loading" :progress="progress"/>
        <p v-if="error" class="text-red-500">⚠️ Failed to fetch data</p>
        <div v-if="!loading && postData.length>0">
            <ul>
                <li v-for="(item, index) in postData" :key="item.id">
                    {{ item.title }}
                </li>
            </ul>
        </div>
    </div>
</template>