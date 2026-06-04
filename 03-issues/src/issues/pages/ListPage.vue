<script setup lang="ts">
import LoaderSpinner from 'src/shared/components/LoaderSpinner.vue';
import FilterSelector from 'src/issues/components/filter-selector/FilterSelector.vue';
import IssueList from 'src/issues/components/issues-list/IssueList.vue';
import useIssues from '../composable/useIssues';


const { issuesQuery } = useIssues();

</script>

<template>
  <div class="row q-mb-md">
    <div class="col-12">
      <span class="text-h4">Github Issues</span>
    </div>
  </div>

  <div class="row">
    <div class="col-xs-12 col-md-4">
      <!-- TODO filtros -->
      <FilterSelector />
    </div>
    <div class="col-xs-12 col-md-8">
      <!-- Loader  -->
      <LoaderSpinner v-if="issuesQuery.isLoading.value" color="white" />

      <IssueList v-else :issues="issuesQuery.data.value || []" />
    </div>
  </div>
</template>

<style scoped></style>
