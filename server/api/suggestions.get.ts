import type { Suggestion } from "../../types/suggestions";
import {defineEventHandler, getQuery} from "h3";

export default defineEventHandler((event)=>{
    const query = (getQuery(event).q as string|undefined)?.toLowerCase() || '';

    const allSuggestions: Suggestion[] = [
        { id: 1, name: 'Apple' },
        { id: 2, name: 'Banana' },
        { id: 3, name: 'Orange' },
        { id: 4, name: 'Mango' },
        { id: 5, name: 'Pineapple' },
      ];

    return allSuggestions.filter((item) =>
        item.name.toLowerCase().includes(query)
    );
})