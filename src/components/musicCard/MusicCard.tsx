import { Card, Image, Skeleton } from "@chakra-ui/react";
import { Music } from "../../hooks/useMusics";
import MusicCardBody from "./MusicCardBody";
interface Props {
  music: Music;
  imageStatus: boolean;
}
const MusicCard = ({ music, imageStatus }: Props) => {
  return (
    <Card width={"250px"} height={"340px"} borderRadius={10} overflow="hidden" mx={1}>
      {imageStatus ? <Skeleton height={"250px"} />:<Image src={music.thumbnailsSmall} height={"250px"} />}  
      <MusicCardBody
        name={music["artist-credit"][0].name}
        type={music["release-group"]["primary-type"]}
        score={music.score}
      />
    </Card>
  );
};
export default MusicCard;
