import { useEffect, useState } from "react";
import { Response, axiosInstance } from "../services/api-client";

interface Props {
  endpoint: string;
  listname: string;
  params: {};
  deps?: {};
}

const useData = <T>({
  endpoint,
  params,
  listname,
  deps = [],
}: Props) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get<Response<T>>(`${endpoint}`, { params:{...params}})
      .then((res) => {
        setData(res.data[listname]);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [JSON.stringify(deps)]);
  return { data, error, isLoading, setData };
};

export default useData;
