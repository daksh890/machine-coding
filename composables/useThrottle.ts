


export const useThrottle = <T extends (...args:any[])=>void> (
    fn:T, delay:number
):((...args:Parameters<T>) => void) => {
    let lastCall=0;

    return function(...args:any[]){
        const now = Date.now();
        if(now-lastCall>=delay){
            lastCall = now;
            fn(...args);
        }
    }
}