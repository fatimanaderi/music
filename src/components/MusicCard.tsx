import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Music } from "../hooks/useMusics";
import { MdHighQuality } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import MusicCardIcon from "./MusicCardIcon";
import MusicCardLan from "./MusicCardLan";
interface Props {
  music: Music;
}
const MusicCard = ({ music }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={music.thumbnailsSmall} />
      <CardBody>
        <Heading fontSize={"xl"}>{music.title}</Heading>
        <HStack justifyContent={"space-between"}>
          <HStack my={1}>
            <MusicCardIcon
              nameIcon={MdHighQuality}
              valueName={music.quality}
            />
            <MusicCardIcon
              nameIcon={AiFillStar}
              valueName={music.status}
            />
          </HStack>
          <MusicCardLan lan={music["text-representation"].language} />
        </HStack>
      </CardBody>
    </Card>
  );
};
export default MusicCard;
