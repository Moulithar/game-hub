import { useQuery } from "@tanstack/react-query";
import platform from "../data/platform";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

// Define the type for the data returned by the API
interface APIResponse {
  count: number;
  results: Platform[];
}

const usePlatforms = () => {
  return useQuery<APIResponse>({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24 hours,
    initialData: { count: platform.length, results: platform },
  });
};

export default usePlatforms;
