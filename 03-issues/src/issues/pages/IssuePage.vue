<script setup lang="ts">
import LoaderSpinner from 'src/shared/components/LoaderSpinner.vue';
import { useRoute } from 'vue-router';
import IssueCard from '../components/issues-list/IssueCard.vue';
import useIssue from '../composable/useissue.js';


const route = useRoute();
const { id } = route.params;

const { issueQuery } = useIssue(+id)

</script>

<template>
  <!-- <LoaderSpinner color="white" /> -->

  <router-link class="text-white" to="/">Go back</router-link>

  <!-- Header -->
  <LoaderSpinner v-if="issueQuery.isLoading.value" color="white" :thickness="1" size="1.5rem" :show-text="false" />
  <IssueCard v-else-if="issueQuery.data.value" :issue="issueQuery.data.value" />
  <p v-else>Issue with ID {{ id }} not found</p>

  <!-- Comentarios  -->
  <LoaderSpinner :thickness="1" size="1.5rem" :show-text="false" />

  <div class="column">
    <span class="text-h4 q-mb-md">Comments (5)</span>
    <!-- <IssueCard v-for="comment in 5" :key="comment" /> -->
  </div>

</template>

<style scoped></style>
