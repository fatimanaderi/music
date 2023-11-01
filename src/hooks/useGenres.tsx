import { useInfiniteQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

export interface Genre {
  id: string;
  name: string;
}
const apiClient = new APIClient<Genre>("/genre/all");
const useGenres = () =>
  useInfiniteQuery<Genre[] ,Error>({
    queryKey: ["genres"],
    queryFn: ({ pageParam = 1 }) =>apiClient.getAll({ params: {limit:20,fmt: "json", offset: pageParam } },"genres"),
    getNextPageParam: (lastPage, allPage) => allPage.length + 1,
    initialPageParam:[{id:1 , name:""}],
    staleTime:24*60*60*1000
  });

export default useGenres;
