import { QueryItem } from "../data/query";
import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

const useAllSelector = ({ name, initialData, query }: QueryItem) => {
  const staleTime = 24*60*60*1000
  const apiClient = new APIClient<{name:string}>(query.endpoint)
  const { data, error, isLoading } = useQuery({
    queryKey: [name],
    queryFn: () =>apiClient.getAll({params:{ limit: 17, offset: 5, query: name }} ,query.listname) ,
    initialData: initialData.length !=0 ? initialData : undefined,
    staleTime:initialData.length !=0 ? staleTime : Infinity
  });
  return { data, error, isLoading };
};

export default useAllSelector;
