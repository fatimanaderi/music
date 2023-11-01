import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

export interface Genre {
  id: string;
  name: string;
}
const apiClient = new APIClient<Genre>("/genre/all")
const useGenres = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["genres"],
    queryFn: () => apiClient.getAll({params: { limit: 20, fmt: "json" }} ,"genres")
  });
  return {data, error, isLoading}
};

export default useGenres;
