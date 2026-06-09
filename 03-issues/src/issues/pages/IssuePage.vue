<script setup lang="ts">
import LoaderSpinner from 'src/shared/components/LoaderSpinner.vue';
import { useRoute } from 'vue-router';
import IssueCard from '../components/issues-list/IssueCard.vue';
import useIssue from '../composable/useissue.js';


const route = useRoute();
const issueId = +(route.params.id as string);

const { issueQuery, issueCommentsQuery } = useIssue(issueId);

</script>

<template>
  <!-- <LoaderSpinner color="white" /> -->

  <router-link class="text-white" to="/">Go back</router-link>

  <!-- Header -->
  <LoaderSpinner v-if="issueQuery.isLoading.value" color="white" :thickness="1" size="1.5rem" :show-text="false" />
  <IssueCard v-else-if="issueQuery.data.value" :issue="issueQuery.data.value" />
  <p v-else>Issue with ID {{ issueId }} not found</p>

  <!-- Comentarios  -->
  <LoaderSpinner v-if="issueCommentsQuery.isLoading.value" :thickness="1" size="1.5rem" :show-text="false" />

  <div v-else-if="issueCommentsQuery.data.value" class="column">
    <span class="text-h4 q-mb-md">Comments {{ issueCommentsQuery.data.value?.length }}</span>
    <IssueCard v-for="comment in issueCommentsQuery.data.value" :key="comment.id" :issue="comment" />
  </div>

</template>

<style scoped></style>
