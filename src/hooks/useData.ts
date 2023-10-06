import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface Props{
    endpoint : string;
    offset:number;
    limit:number;
    listname:string;
    query?:string
}
interface R<S>{
  [x:string] : S[]
}

const useData = <T>({endpoint , offset , limit , listname  = "",query}:Props)=>{
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading , setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        apiClient
          .get<R<T>>(`${endpoint}?query=${query}&limit=${limit}&offset=${offset}`)
          .then((res) => {
            setData(res.data[listname]);
            setLoading(false)
          })
          .catch((err) => {
            setError(err.message);
            setLoading(false)
          });
      }, []);
    return { data, error ,isLoading,setData};
};

export default useData;