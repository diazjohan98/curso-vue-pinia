import { useQuery } from "@tanstack/vue-query";
import { githubApi } from "src/api/githubApi";
import type { Label } from "../interfaces/label";
import { useIssuesStore } from "src/stores/issues";
import { computed } from "vue";

const getLabels = async (): Promise<Label[]> => {
  const { data } = await githubApi.get<Label[]>('/labels?per_page=100');
  return data;
}

const useLabels = () => {

  const issuesStore = useIssuesStore();

  const labelsQuery = useQuery({
    queryKey: ['labels'],
    queryFn: getLabels,
    gcTime: 1000 * 60 * 60, // 1 hora
  });

  return {
    labelsQuery,

    //Getters
    selectedLabels: computed(() => issuesStore.labels),

    //Methods
    toggleLabel: issuesStore.toggleLabel
  };
}

export default useLabels;

