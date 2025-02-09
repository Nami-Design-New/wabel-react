import { useQuery } from "@tanstack/react-query";
import { getServices } from "../../apiServices/apiServices";

export function useGetServices() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["services"],
    queryFn: getServices,
    retry: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });

  return { services: data, isLoading, error };
}
