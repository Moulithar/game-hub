import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import platform from "../data/platform";
import ms from "ms";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => {
  return useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"), //24 hours,
    initialData: platform,
  });
};

export default usePlatforms;
