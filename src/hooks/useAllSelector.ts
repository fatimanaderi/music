import { QueryItem } from "../data/query";
import apiClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";

export interface Data {
  name: string;
}
interface Response<T> {
  [x: string]: T[];
}
const useAllSelector = ({ name, initialData, query }: QueryItem) => {
  const { data, error, isLoading } = useQuery({
    queryKey: [name],
    queryFn: () =>
      apiClient
        .get<Response<Data>>(query.endpoint, {
          params: { limit: 17, offset: 5, query: name },
        })
        .then((res) => res.data[query.listname]),
    initialData: initialData,
    staleTime:Infinity
  });
  return { data, error, isLoading };
};

export default useAllSelector;
