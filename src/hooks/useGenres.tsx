import useData from "./useData";

export interface Genre {
  id: string;
  name: string;
}
const useGenres = () =>
  useData<Genre>({
    endpoint: "/genre/all",
    limit: 12,
    offset: 12,
    listname:"genres"
  });

export default useGenres;
