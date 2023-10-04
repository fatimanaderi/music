import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface FetchGenreResponse{
    genres:Genre[]
}
interface Genre{
    id : string;
    name: string
}

const useGenras = ()=>{
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState("");
    const [isLoading , setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        apiClient
          .get<FetchGenreResponse>(
            "/genre/all?limit=24&offset=24"
          )
          .then((res) => {
            setGenres(res.data.genres);
            setLoading(false)
          })
          .catch((err) => {
            setError(err.message);
            setLoading(false)
          });
      }, []);
      return { genres, error ,isLoading};
};

export default useGenras;