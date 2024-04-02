import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Genre>("/genres");
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// Define the type for the data returned by the API
interface APIResponse {
  count: number;
  results: Genre[];
}

const useGenres = () => {
  return useQuery<APIResponse>({
    queryKey: ["genres"],
    queryFn: apiClient.getAll, // Assert apiClient.getAll as QueryFn
    staleTime: 24 * 60 * 60 * 1000, //24 hours
    initialData: { count: genres.length, results: genres },
  });
};

export default useGenres;
