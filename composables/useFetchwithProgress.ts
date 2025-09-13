//@ts-ignore
import {ref} from "vue";
import { useThrottle } from "./useThrottle";
import { sleep } from "@/utils/sleep";

export const useFetchwithProgress = ()=>{

    const loading = ref<boolean>(false);
    const error = ref<string|null>(null);
    const progress = ref<number>(0);
    const postData = ref<any[]>([]);

    const updateProgress = useThrottle(()=>{
        if(progress.value<=100) progress.value+=1;
    }, 1000)

    const fetchData = async()=>{
        loading.value=true;
        progress.value=0;
        error.value=null;

        const interval = setInterval(()=>{
            if(!loading.value || progress.value >100) {
                clearInterval(interval);
                return;
            }
            if(progress.value<90){
                updateProgress();
            }
        }, 200)

        
        const x = await fetch("https://jsonplaceholder.typicode.com/posts").then(async(res)=>{
            if(!res.ok) throw new Error(`${res.status}`);
            const [data] = await Promise.all([
                res.json(),
                sleep(3000)
            ]);
            postData.value=data;
            progress.value=100;
        }).catch((err)=>{
            error.value=err.message || 'something went wrong';
            postData.value=[];
        }).finally(()=>{
            clearInterval(interval);
            loading.value=false;
        })
    }

    return {progress, loading, postData, error, fetchData};
}