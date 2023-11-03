import useMusicQueryStore from "../store/musicStore";
import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

export interface Music {
  id: string;
  title: string;
  thumbnailsSmall: string;
  score: string;
  "artist-credit": { name: string }[];
  "release-group": {
    "primary-type": string;
  };
}

const useMusics = () => {
  const apiClient = new APIClient<Music>("release");
  const musicQuery = useMusicQueryStore((s) => s.musicQuery);
  let q=()=>{
    if(Object.keys(musicQuery).length != 0){
      if(Object.keys(musicQuery).includes("instrument")){
        return{"title" : Object.values(musicQuery)[0]}
      }
      return {...musicQuery}
    }
    return {release: ""}
  }
  const conf = {
    params: {
      ...q(),
      limit: 8,
    },
  };
  const { data, error, isLoading } = useQuery({
    queryKey: ["musics", musicQuery],
    queryFn: () => apiClient.getAll(conf, "releases"),
    staleTime: 24 * 60 * 60 * 1000,
  });

  return { data, error, isLoading };
};
export default useMusics;
