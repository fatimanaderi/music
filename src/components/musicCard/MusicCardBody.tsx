import { CardBody, HStack, Heading } from "@chakra-ui/react";
import MusicCardIcon from "./MusicCardIcon";
import MusicCardScore from "./MusicCardScore";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

interface Props {
  name: string;
  type: string;
  score: string;
  id:string
}
const MusicCardBody = ({ name, type, score,id }: Props) => {
  return (
    <CardBody>
      <Heading fontSize={"lg"}><Link to={'/music/'+ id}>{name}</Link></Heading>
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
