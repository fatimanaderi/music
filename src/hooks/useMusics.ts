import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Music {
  id: string;
  name: string;
}
interface FetchMusicsResponse {
  genres: Music[];
}
const useMusics = () => {
  const [musics, setMusics] = useState<Music[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    // const controller = new AbortController();
    apiClient
      .get<FetchMusicsResponse>("/genre/all?limit=30&offset=30", 
    //   {signal: controller.signal}
        )
      .then((res) => setMusics(res.data.genres))
      .catch((err) => {
        // if (err instanceof CanceledError) return;
        setError(err.message);
      });
    // return () => controller.abort();
  }, []);
  return { musics, error };
};
export default useMusics;
