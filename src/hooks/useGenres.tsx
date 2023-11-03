import { useInfiniteQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

export interface Genre {
  id: string;
  name: string;
}
const apiClient = new APIClient<Genre>("/genre/all");
const useGenres = () =>
  useInfiniteQuery<Genre[], Error>({
    queryKey: ["genres"],
    queryFn: ({ pageParam =1}) =>
      apiClient.getAll(
        { params: { limit: 25, fmt: "json", offset: pageParam } },
        "genres"
      ),

    getNextPageParam: (lastPage, allPage) =>
      lastPage.length > 0 ? allPage.length + 1 : undefined,
    initialPageParam: 1,
    staleTime: 24 * 60 * 60 * 1000,
  });

export default useGenres;
