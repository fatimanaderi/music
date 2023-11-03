import { Image, Skeleton } from "@chakra-ui/react";
import useMusicImg from "../hooks/useMusicImg";
import loadingImage from "../assets/logo2.png";

interface Props {
  id: string;
  size: string;
  minHeight:string;
}

const MusicImg = ({ id, size ,minHeight}: Props) => {
  const { data: imgUrl, isError, isLoading } = useMusicImg(id, size);
  return (
    <>
      {isLoading && <Skeleton height={"inherit"} minHeight={minHeight} />}
      {isError && (
        <Image src={loadingImage} height={"inherit"} minHeight={minHeight} />
      )}
      {imgUrl && <Image src={imgUrl} height={"inherit"} minHeight={minHeight} />}
    </>
  );
};
export default MusicImg;
