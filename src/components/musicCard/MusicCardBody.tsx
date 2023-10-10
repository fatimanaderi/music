import { CardBody, HStack, Heading } from "@chakra-ui/react";
import MusicCardIcon from "./MusicCardIcon";
import MusicCardScore from "./MusicCardScore";
import { AiFillStar } from "react-icons/ai";

interface Props {
  name: string;
  type: string;
  score: string;
}
const MusicCardBody = ({ name, type, score }: Props) => {
  return (
    <CardBody>
      <Heading fontSize={"lg"}>{name}</Heading>
      <HStack justifyContent={"space-between"}>
        <HStack my={1}>
          <MusicCardIcon nameIcon={AiFillStar} valueName={type} />
        </HStack>
        <MusicCardScore score={score} />
      </HStack>
    </CardBody>
  );
};
export default MusicCardBody;
