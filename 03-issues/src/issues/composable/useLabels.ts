import { useQuery } from "@tanstack/vue-query";
import { githubApi } from "src/api/githubApi";
import type { Label } from "../interfaces/label";

const getLabels = async (): Promise<Label[]> => {
  const { data } = await githubApi.get<Label[]>('/labels?per_page=100');
  return data;
}

const useLabels = () => {

  const labelsQuery = useQuery({
    queryKey: ['labels'],
    queryFn: getLabels,
    gcTime: 1000 * 60 * 60, // 1 hora
  });

  return {
    labelsQuery
  };
}

export default useLabels;

