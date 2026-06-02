import { computed, ref, watch } from "vue";
import type { Client } from "../interfaces/client";
import { useMutation, useQuery } from "@tanstack/vue-query";
import clientsApi from "@/api/client-api";

const getClients = async (id: number) => {
    const { data } = await clientsApi.get(`/clients/${id}`);
    return data;
}

const updateClient = async (client: Client): Promise<Client> => {

    const { data } = await clientsApi.patch<Client>(`/clients/${client.id}`, client);

    return data;
}

const useClient = (id: number) => {

    const client = ref<Client>();

    const { isLoading, data, isError } = useQuery({
        queryKey: ['Clients', id],
        queryFn: () => getClients(id),
        retry: false

    });

    const clientMutation = useMutation({ mutationFn: updateClient });


    watch(data, (newVal) => {
        if (data.value)
            client.value = { ...newVal! };
    }, { immediate: true });

    return {
        client,
        isError,
        isLoading,
        clientMutation,

        //Methods
        updateClient: clientMutation.mutate,
        isUpdating: computed(() => clientMutation.isPending.value),
        isUpdatingSuccess: computed(() => clientMutation.isSuccess.value),
        isErrorUpdating: computed(() => clientMutation.isError.value),
    }
}

export default useClient;


