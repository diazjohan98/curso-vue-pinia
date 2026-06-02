import { ref, watch } from "vue";
import type { Client } from "../interfaces/client";
import { useQuery } from "@tanstack/vue-query";
import clientsApi from "@/api/client-api";

const getClients = async (id: number) => {
    const { data } = await clientsApi.get(`/clients/${id}`);
    return data;
}

const useClient = (id: number) => {

    const client = ref<Client>();

    const { isLoading, data } = useQuery({
        queryKey: ['Clients', id],
        queryFn: () => getClients(id),

    });

    watch(data, (newVal) => {
        if (data.value)
            client.value = { ...newVal! };
    }, { immediate: true });

    return {
        isLoading,
        client,
    }
}

export default useClient;


