import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";

export interface Genre {
  id: string;
  name: string;
}
interface Response<T> {
  [x: string]: T[];
}

const useGenres = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient
        .get<Response<Genre>>("/genre/all", { params: { limit: 17, fmt: "json" } })
        .then((res) => res.data["genres"]),
  });
  return {data, error, isLoading}
};

export default useGenres;
