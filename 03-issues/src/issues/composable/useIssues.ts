import { useQuery } from "@tanstack/vue-query";
import type { Issue, State } from "../interfaces/issue";
import { githubApi } from "src/api/githubApi";
import { useIssuesStore } from "src/stores/issues";
import { storeToRefs } from "pinia";


const getissues = async (labels: string[], state: State): Promise<Issue[]> => {

  const params = new URLSearchParams();

  if (state) params.append('state', state);

  if (labels.length > 0) {
    const labelsString = labels.join(',');
    params.append('labels', labelsString);

  }

  params.append('per_page', '10');

  const { data } = await githubApi.get<Issue[]>('/issues', {
    params
  });


  return data;
}

const useIssues = () => {

  const issueStore = useIssuesStore();
  const { labels, state } = storeToRefs(issueStore);

  const issuesQuery = useQuery({
    queryKey: ['issues', { labels, state }],
    queryFn: () => getissues(labels.value, state.value),
  });

  return {
    issuesQuery,
  }
}

export default useIssues;

