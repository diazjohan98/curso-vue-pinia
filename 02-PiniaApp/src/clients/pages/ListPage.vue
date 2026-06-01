<script setup lang="ts">
import ClientList from '@/clients/components/ClientList.vue';
import PaginationNumbers from '../components/PaginationNumbers.vue';
import LoadingModal from '@/shared/components/LoadingModal.vue';
import useClients from '../composables/useClients.ts';

const { isLoading } = useClients()

</script>

<template>
    <div>
        <h1>Listado de clientes</h1>


        <!-- Client list  -->
        <ClientList />

        <!-- PaginationNumbers  -->
        <PaginationNumbers />

        <!-- LoadingModal -->
        <LoadingModal v-if="isLoading" />
    </div>
</template>

<style scoped></style>