import type { DirectiveBinding } from "vue";

export default {
    mounted(el:HTMLInputElement, binding:DirectiveBinding<(val:string)=>void>){
        let timeout:ReturnType<typeof setTimeout>;
        const delay = Number(binding.arg) || 500;
        const handler = (e:Event)=>{
            if(timeout){
                clearTimeout(timeout);
            }
            const target = e.target as HTMLInputElement;
            timeout = setTimeout(()=>{
                binding.value(target.value)
            }, delay)
        }
        el.addEventListener('input', handler);
        (el as any)._debounceHandler = handler; 
    },
    unmounted(el:HTMLInputElement) {
        const handler = (el as any)._debounceHandler;
        el.removeEventListener('input', handler);
    },
}