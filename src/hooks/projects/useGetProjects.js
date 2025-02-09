import { useQuery } from "@tanstack/react-query";
import { getProjects } from "../../apiServices/apiProjects";

export function useGetProjects() {
  const {
    data: projects,
    error,
    isLoading,
  } = useQuery({ queryKeys: ["projects"], queryFn: getProjects });

  return { projects, isLoading, error };
}
