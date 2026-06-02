<script setup lang="ts">
import { watch } from 'vue';
import LoadingModal from '@/shared/components/LoadingModal.vue';
import useClient from '../composables/useClient';
import { useRoute } from 'vue-router';
import { useMutation } from '@tanstack/vue-query';
import type { Client } from '../interfaces/client';
import clientsApi from '@/api/client-api';


const route = useRoute();

const { client, isLoading } = useClient(+(route.params.id as string));

const updateClient = async (client: Client): Promise<Client> => {

  await new Promise(resolve => { setTimeout(() => resolve(true), 1500) });

  const { data } = await clientsApi.patch<Client>(`/clients/${client.id}`, client);
  return data;
}

const clientMutation = useMutation({ mutationFn: updateClient });

watch(clientMutation.isSuccess, () => {
  setTimeout(() => {
    clientMutation.reset();
  }, 2000)
});

</script>

<template>
  <h3 v-if="clientMutation.isPending.value">Guardando...</h3>
  <h3 v-if="clientMutation.isSuccess.value">Guardado</h3>

  <LoadingModal v-if="isLoading" />

  <div v-if="client">
    <h1>{{ client.name }}</h1>
    <form @submit.prevent="clientMutation.mutate(client!)">
      <input type="text" placeholder="Nombre del cliente" v-model="client.name">
      <br>
      <input type="text" placeholder="Direccion" v-model="client.address">
      <br>
      <button type="submit" :disabled="clientMutation.isPending.value">Guardar</button>
    </form>
  </div>
  <code>
    {{ client }}
  </code>
</template>

<style scoped>
input {
  width: 100%;
  padding: 5px 10px;
  margin-bottom: 10px;
}

button {
  margin-bottom: 10px;
}
</style>