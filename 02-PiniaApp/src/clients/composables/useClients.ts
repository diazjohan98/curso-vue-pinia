import clientsApi from "@/api/client-api";
import type { Client, PaginatedClients } from "../interfaces/client";
import { useQuery } from "@tanstack/vue-query";
import { useClientsStore } from "@/store/client";
import { storeToRefs } from "pinia";
import { watch } from "vue";

const getClients = async (): Promise<Client[]> => {
    const { data } = await clientsApi.get<PaginatedClients[]>("/clients?_page=1");
    return data.data;
}

const useClients = () => {

    const store = useClientsStore();
    const { currentPage, clients, totalPages } = storeToRefs(store);

    const { isLoading, data } = useQuery({
        queryKey: ['Clients', 1],
        queryFn: getClients,
    })

    watch(data, clients => {
        if (clients) {
            store.setClients(clients);
        }
    })

    return {
        isLoading,
        clients,

    }
}

export default useClients;