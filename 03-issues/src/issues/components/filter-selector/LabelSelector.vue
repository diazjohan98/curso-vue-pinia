<script setup lang="ts">
import useLabels from 'src/issues/composable/useLabels';
import LoaderSpinner from 'src/shared/components/LoaderSpinner.vue';

const { labelsQuery } = useLabels();


</script>

<template>

  <div class="q-mt-md">
    <LoaderSpinner v-if="labelsQuery.isLoading.value" size="50px" :thickness="1" :showText="false" />


    <q-chip v-else v-for="label in labelsQuery.data.value" :key="label.id" :style="{ color: `#${label.color}` }" outline
      clickable>
      {{ label.name }}
    </q-chip>

  </div>

</template>

<style scoped></style>
