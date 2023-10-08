import useData from "./useData";

export interface Genre {
  id: string;
  name: string;
}

const useGenres = () =>{
  const {data , error} = useData<Genre>({
    endpoint: "/genre/all",
    listname:"genres",
    params:{limit: 17,fmt:"json"}
  });
  return{data , error}
}

export default useGenres;
