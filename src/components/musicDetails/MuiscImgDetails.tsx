import { Card } from "@chakra-ui/react";
import MusicImg from "../MusicImg";
interface Props {
    id:string
}
const MusicImgDetails = ({id}:Props) => {
  return (
    <Card
      width={{ base: "100%", sm: "60%", md: "100%" }}
      height={"initial"}
      overflow="hidden"
      _hover={{
        transform: "scale(1.03)",
        transition: "transform .15s ease-in",
      }}
      p={3}
      mx="auto"
      my="3"
      backgroundColor={"transparent"}
      shadow={"none"}
    >
      <MusicImg id={id} size="small" minHeight={"300px"} borderRadius={10}  />
    </Card>
  );
};
export default MusicImgDetails;
