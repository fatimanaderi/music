import { Image, Skeleton } from "@chakra-ui/react";
import useMusicImg from "../hooks/useMusicImg";
import loadingImage from "../assets/logo2.png";

interface Props {
  id: string;
  size: string;
  minHeight:string;
  borderRadius?:number;
  height?:string
}

const MusicImg = ({ id, size ,minHeight,height="initial" ,borderRadius=0}: Props) => {
  const { data: imgUrl, isError, isLoading } = useMusicImg(id, size);
  return (
    <>
      {isLoading && <Skeleton height={"inherit"} borderRadius={borderRadius} minHeight={minHeight} />}
      {isError && (
        <Image src={loadingImage} height={"inherit"} borderRadius={borderRadius} minHeight={height}/>
      )}
      {imgUrl && <Image src={imgUrl} height={"inherit"} borderRadius={borderRadius} minHeight={height}/>}
    </>
  );
};
export default MusicImg;
