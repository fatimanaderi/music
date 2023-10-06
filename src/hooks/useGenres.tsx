import useData from "./useData";

export interface Genre {
  id: string;
  name: string;
}
const useGenres = () =>
  useData<Genre>({
    endpoint: "/genre/all",
    limit: 17,
    offset: 17,
    listname:"genres"
  });

export default useGenres;
