import { Card, Center, Image, Skeleton } from "@chakra-ui/react";
import MusicCardBody from "./MusicCardBody";
import { Music } from "../../hooks/useMusics";
import useMusicImg from "../../hooks/useMusicImg";
import loadingImage from "../../assets/logo2.png";

interface Props {
  music: Music;
}
const MusicCard = ({ music }: Props) => {
  const { data: imgUrl, isError, isLoading } = useMusicImg(music.id);
  return (
    <Center>
      <Card
        width={"100%"}
        height={"initial"}
        borderRadius={10}
        overflow="hidden"
        mx={2}
        _hover={{
          transform: "scale(1.05)",
          transition: "transform .15s ease-in",
        }}
      >
        {isLoading && <Skeleton height={"250px"} />}
        {isError && <Image src={loadingImage} height={"inherit"} minHeight={"200px"} />}
        {imgUrl && <Image src={imgUrl} height={"inherit"} minHeight={"200px"} />}
        <MusicCardBody
          name={music["artist-credit"][0].name}
          type={music["release-group"]["primary-type"]}
          score={music.score}
          id={music.id}
        />
      </Card>
    </Center>
  );
};
export default MusicCard;
