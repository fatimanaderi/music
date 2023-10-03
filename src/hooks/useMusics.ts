import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import axios from "axios";

export interface Music {
  id: string;
  title: string;
  image: string;
  thumbnailsSmall:string;
}
interface FetchMusicsResponse {
  releases: Music[];
}

const useMusics = () => {
  const [musics, setMusics] = useState<Music[]>([]);
  const [error, setError] = useState("");

  const getCoverImage = (id : string) => {
    axios
      .get("http://coverartarchive.org/release/" + id, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        setMusics((musics) =>
          musics.map((prevMusic) =>
            prevMusic.id === id 
              ? {
                  ...prevMusic,
                  image: res.data.images[0].image,
                  thumbnailsSmall:  res.data.images[0].thumbnails.small,
                }
              : prevMusic
          )
        );
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    apiClient
      .get<FetchMusicsResponse>(
        "/release?label=47e718e1-7ee4-460c-b1cc-1192a841c6e5&limit=6&offset=6"
      )
      .then((res) => {
        setMusics(res.data.releases);
        res.data.releases.map((music) => {
          getCoverImage(music.id);
        });
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);
  return { musics, error };
};
export default useMusics;
