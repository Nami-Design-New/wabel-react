import { getServices } from "../../apiServices/apiServices";
import { useQuery } from "@tanstack/react-query";

export default function useGetServices() {
  const {
    data: services,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["services"],
    queryFn: getServices,
  });
  return { services, isLoading, error };
}
