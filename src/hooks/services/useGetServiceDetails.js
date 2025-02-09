import { useQuery } from "@tanstack/react-query";
import { getServiceDetails } from "../../apiServices/apiServices";
import { useParams } from "react-router-dom";

export default function useGetServiceDetails() {
  const { id } = useParams();
  const {
    data: serviceDetails,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["serviceDetails", id],
    queryFn: () => getServiceDetails(id),
  });

  return { serviceDetails, error, isLoading };
}
