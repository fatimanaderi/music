import {  HStack, Icon, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import {SiApplemusic} from "react-icons/si"
const GenraList = () => {
  const {data , error} = useGenres()
  if(error) return null
  return (
    <>
      <List mx={1}>{data?.map((genra)=>(<ListItem key={genra.id}>
        <HStack my={4}>
          <Icon boxSize={"30px"} as={SiApplemusic} color={"purple.200"} />
          <Text>{genra.name}</Text>
        </HStack>
      </ListItem>))}</List>
    </>
  );
};
export default GenraList;
