import axios from "axios";
import useData from "./useData";
import { useEffect, useState } from "react";
import loadingImage from "../assets/loadingImage.png"

export interface Music {
  id: string;
  title: string;
  thumbnailsSmall: string;
  "primary-type": string;
  "score": string;
  "artist-credit":ArtistCredit[]
  releases:Release[]
}
interface ArtistCredit{
    name:string
}
interface Release{
  id:string
}
const useMusics = () => {
  const [imageLoading , setImageLoading] = useState<boolean[]>(Array(8).fill(true));
  const {data, error,setData } = useData<Music>({
    endpoint: "release-group",
    limit: 8,
    offset: 8,
    query:"release",
    listname: "release-groups",
  });
  
  const setUrlCover =(url:string , id:string , index:number)=>{
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
    setImageLoading((imageLoading)=>{
      const newImageLoading = [...imageLoading];
      newImageLoading[index] = false;
      return newImageLoading;
    })
  }

  const getCoverImage = (id: string , index:number) => {
    axios
      .get("http://coverartarchive.org/release-group/" + id, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        setUrlCover(res.data.images[0].thumbnails["small"] ,id , index)
      })
      .catch((err) => {
        setUrlCover(loadingImage ,id , index)
      });
  };
  useEffect(() => {
    data.forEach((music , index) => getCoverImage(music.id , index))
  },[JSON.stringify(data)]);
  return {data , error , imageLoading }
};
export default useMusics;
