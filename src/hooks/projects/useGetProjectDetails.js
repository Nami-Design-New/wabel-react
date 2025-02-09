import { useQuery } from "@tanstack/react-query";
import { getProjectDetails } from "../../apiServices/apiProjects";
import { useParams } from "react-router-dom";

export function useGetProjectDetails() {
  const { id } = useParams();
  const {
    data: projectDetails,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["project-details", id],
    queryFn: () => getProjectDetails(id),
  });

  return { projectDetails, isLoading, error };
}
