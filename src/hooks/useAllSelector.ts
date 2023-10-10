import { Query } from "../App";
import useData from "./useData";

export interface Response {
  id: string;
  name: string;
}
const useAllSelector = (q:Query) =>{
  const {data , error} = useData<Response>({
    endpoint: q.endpoint,
    listname:q.listname,
    params:{limit: 17, offset:5, query:q.query },
  });
  return{data , error}
}

export default useAllSelector;
