import { useQuery } from "@tanstack/react-query";
import { getProjects } from "../../apiServices/apiProjects";

export function useGetProjects() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
    retry: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });

  return { projects: data, isLoading, error };
}
