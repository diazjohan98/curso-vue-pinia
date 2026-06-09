import { githubApi } from "src/api/githubApi";
import type { Issue } from "../interfaces/issue";
import { useQuery } from "@tanstack/vue-query";

const getIssue = async (issueNumber: number): Promise<Issue> => {
  const { data } = await githubApi.get<Issue>(`/issues/${issueNumber}`);
  return data;
}

const getIssueComments = async (issueNumber: number): Promise<Issue[]> => {
  const { data } = await githubApi.get<Issue[]>(`/issues/${issueNumber}/comments`);
  return data;
}


const useIssue = (issueNumber: number) => {

  const issueQuery = useQuery({
    queryKey: ['issue', issueNumber],
    queryFn: () => getIssue(issueNumber)
  });


  const issueCommentsQuery = useQuery({
    queryKey: ['issue', issueNumber, 'comments'],
    queryFn: () => getIssueComments(issueNumber),
    gcTime: 1000 * 15, // 1 hour
  });

  return {
    issueQuery,
    issueCommentsQuery,
  }
}

export default useIssue;

