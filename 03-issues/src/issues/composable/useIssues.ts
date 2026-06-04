import { useQuery } from "@tanstack/vue-query";
import type { Issue } from "../interfaces/issue";
import { githubApi } from "src/api/githubApi";


const getissues = async (): Promise<Issue[]> => {

  const params = new URLSearchParams();

  params.append('per_page', '10');

  const { data } = await githubApi.get<Issue[]>('/issues', {
    params
  });


  return data;
}

const useIssues = () => {

  const issuesQuery = useQuery({
    queryKey: ['issues'],
    queryFn: getissues,
  });

  return {
    issuesQuery,
  }
}

export default useIssues;

