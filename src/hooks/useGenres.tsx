import useData from "./useData";

export interface Genre {
  id: string;
  name: string;
}

const useGenres = () =>
  useData<Genre>({
    endpoint: "/genre/all",
    listname:"genres",
    params:{limit: 17}
  });

export default useGenres;
