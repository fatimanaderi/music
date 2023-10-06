import { CardBody, HStack, Heading } from "@chakra-ui/react";
import MusicCardIcon from "./MusicCardIcon";
import MusicCardLan from "./MusicCardLan";
import { IoMdMusicalNote } from "react-icons/io";
import { AiFillStar } from "react-icons/ai";

interface Props {
  title: string;
  name: string;
  type: string;
  lan: string;
}
const MusicCardBody = ({ title, name, type, lan }: Props) => {
  return (
    <CardBody>
      <Heading fontSize={"xl"}>{name}</Heading>
      <HStack justifyContent={"space-between"}>
        <HStack my={1}>
          <MusicCardIcon nameIcon={IoMdMusicalNote} valueName={title} />
          <MusicCardIcon nameIcon={AiFillStar} valueName={type} />
        </HStack>
        <MusicCardLan lan={lan} />
      </HStack>
    </CardBody>
  );
};
export default MusicCardBody;
