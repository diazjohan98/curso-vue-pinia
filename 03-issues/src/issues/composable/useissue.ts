import { githubApi } from "src/api/githubApi";
import type { Issue } from "../interfaces/issue";
import { useQuery } from "@tanstack/vue-query";

const getIssue = async (issueNumber: number): Promise<Issue> => {
  const { data } = await githubApi.get<Issue>(`/issues/${issueNumber}`);
  return data;
}


const useIssue = (issueNumber: number) => {

  const issueQuery = useQuery({
    queryKey: ['issue', issueNumber],
    queryFn: () => getIssue(issueNumber)
  });

  return {
    issueQuery,
  }
}

export default useIssue;

