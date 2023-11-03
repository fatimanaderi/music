import { Card, Center } from "@chakra-ui/react";
import MusicCardBody from "./MusicCardBody";
import { Music } from "../../hooks/useMusics";
import MusicImg from "../MusicImg";

interface Props {
  music: Music;
}
const MusicCard = ({ music }: Props) => {
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
        <MusicImg size="small" id={music.id} minHeight={"200px"}/>
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
