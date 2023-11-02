import queryUrl from "../services/queryUrl";
import useMusicQueryStore, { MusicQuery } from "../store/musicStore";
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
  let queryUrlStr = "";
  if (Object.keys(musicQuery).length != 0)
    queryUrlStr = queryUrl({ ...(musicQuery as MusicQuery) });
  const conf = {
    params: {
      limit: 8,
      query: queryUrlStr ? queryUrlStr : "release",
    },
  };
  const { data, error,isLoading } = useQuery({
    queryKey: ["musics", musicQuery],
    queryFn: () => apiClient.getAll(conf, "releases"),
    staleTime: 24 * 60 * 60 * 1000,
  });

  return { data, error ,isLoading};
};
export default useMusics;
