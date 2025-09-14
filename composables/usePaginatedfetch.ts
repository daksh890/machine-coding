//@ts-ignore

//https://dummyjson.com/products

import { ref, toRefs } from "vue";

export interface Product {
    id: number;
    title: string;
    price: number;
  }
export const usePaginatedFetch = () => {
    const isLoading = ref<boolean>(false);
    const items = ref<Product[]>([]);
    const page = ref<number>(0);
    const hasMore = ref<boolean>(true);
    const error = ref<string | null>(null);
    const limit = ref<number>(10);
    const skip = ref<number>(0);

    const loadMore = async () => {
        isLoading.value = true;
        console.log("Loading....")
        if (hasMore.value) {
            await fetch(`https://dummyjson.com/products?limit=${limit.value}&skip=${skip.value}&select=id,title,price`).then(async (res) => {
                if (!res.ok) throw new Error(`${res.status}`);
                const data = await res.json();
                const x = data.products;
                items.value = [...items.value, ...x];
                skip.value = skip.value + data.products.length;
                page.value += 1;
                if (items.value.length < data.total) {
                    hasMore.value = true
                } else {
                    hasMore.value = false
                };
                isLoading.value = false;
                console.log("Fetched products:", data.products);
                console.log("Items now:", items.value.length);
            }).catch((err) => {
                error.value = err.message || 'Something went wrong';
                isLoading.value = false;
            }).finally(()=>{
                isLoading.value = false;
            })
            
        }
        else {
            error.value = "No more products";
        }
    }

    return { isLoading, items, error, page, hasMore, loadMore };

}