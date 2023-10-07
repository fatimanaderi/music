import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface Props{
    endpoint : string;
    listname:string;
    params:{
      limit:number;
      query?:string;
    }
    deps? : string[]
}
interface R<S>{
  [x:string] : S[]
}

const useData = <T>({endpoint ,params , listname ,deps =[]}:Props)=>{
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading , setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        apiClient
          .get<R<T>>(endpoint , {params})
          .then((res) => {
            setData(res.data[listname]);
            setLoading(false)
          })
          .catch((err) => {
            setError(err.message);
            setLoading(false)
          });
      }, [...deps]);
    return { data, error ,isLoading,setData};
};

export default useData;