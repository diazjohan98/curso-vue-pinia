import { computed, watch } from "vue";
import clientsApi from "@/api/client-api";
import type { Client, PaginatedClients } from "../interfaces/client";
import { useQuery } from "@tanstack/vue-query";
import { useClientsStore } from "@/store/client";
import { storeToRefs } from "pinia";

const getClients = async (page: number): Promise<Client[]> => {

    // await new Promise(resolve => { setTimeout(() => resolve(true), 2000) });

    const { data } = await clientsApi.get<PaginatedClients[]>(`/clients?_page=${page}`);
    return data.data;
}

const useClients = () => {

    const store = useClientsStore();
    const { currentPage, clients, totalPages } = storeToRefs(store);

    const { isLoading, data } = useQuery({
        queryKey: ['Clients', currentPage],
        queryFn: () => getClients(currentPage.value),
        // staleTime: 1000 * 60, // 1 minutes 
    })

    watch(data, clients => {
        if (clients) {
            store.setClients(clients);
        }
    })

    return {
        clients,
        currentPage,
        isLoading,
        totalPages,

        //methods
        getPage(page: number) {
            store.setPage(page);
        },

        //Getters
        // totalPageNumbers: computed(
        //     () => [...new Array(totalPages.value)].map((v, i) => i + 1)
        // ),
    }
}

export default useClients;