import axios from "axios";
import useData from "./useData";
import { useEffect, useState } from "react";
import loadingImage from "../assets/logo2.png";
import queryUrl from "../services/queryUrl";
import { MusicQuery } from "../components/main/Main";

export interface Music {
  id: string;
  title: string;
  thumbnailsSmall: string;
  score: string;
  "artist-credit": {name: string}[];
  "release-group": {
    "primary-type": string;
  };
}

const useMusics = (musicQuery: MusicQuery) => {
  const [imageLoading, setImageLoading] = useState<boolean[]>(
    Array(8).fill(true)
  );
  let queryUrlString = "";
  if (Object.keys(musicQuery).length != 0) {
    queryUrlString = queryUrl({ ...(musicQuery as MusicQuery) });
  }
  const { data, error, setData } = useData<Music>({
    endpoint: "/release",
    listname: "releases",
    params: {
      limit: 8,
      query: queryUrlString ? queryUrlString : "release",
    },
    deps: [musicQuery],
  });

  const setUrlCover = (url: string, id: string, index: number) => {
    setData((data) =>
      data.map((preMusic) =>
        preMusic.id === id
          ? {
              ...preMusic,
              thumbnailsSmall: url,
            }
          : preMusic
      )
    );
    setImageLoading((imageLoading) => {
      const newImageLoading = [...imageLoading];
      newImageLoading[index] = false;
      return newImageLoading;
    });
  };

  const getCoverImage = (id: string, index: number) => {
    axios
      .get("http://coverartarchive.org/release/" + id, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) =>
        setUrlCover(res.data.images[0].thumbnails["small"], id, index)
      )
      .catch(() => setUrlCover(loadingImage, id, index));
  };

  useEffect(() => {
    data.forEach((music, index) => getCoverImage(music.id, index));
  }, [JSON.stringify(data)]);

  return { data, error, imageLoading };
};
export default useMusics;
