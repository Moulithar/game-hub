import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import genres from "../data/genres";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Genre>("/genres");
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => {
  // Specify the types for useQuery
  return useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll, // Assert apiClient.getAll as QueryFn
    staleTime: ms("24h"), //24 hours
    initialData: genres,
  });
};

export default useGenres;
