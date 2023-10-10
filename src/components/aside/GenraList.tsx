import { Button, HStack, Icon, List, ListItem } from "@chakra-ui/react";
import { SiApplemusic } from "react-icons/si";
import useGenres from "../../hooks/useGenres";

interface Props {
  onSelectedGenre: (genreName: string) => void;
  selectedGenre:string
}
const GenraList = ({ onSelectedGenre,selectedGenre }: Props) => {
  const { data, error } = useGenres();
  if (error) return null;
  return (
    <List mx={4} >
      {data.map((genra) => (
        <ListItem key={genra.id}>
          <HStack my={3}>
            <Icon boxSize={"30px"} as={SiApplemusic} color={"purple.200"} />
            <Button
              onClick={() => onSelectedGenre(genra.name)}
              px={1}
              colorScheme={selectedGenre === genra.name?"purple":""}
              variant="link"
            >
              {genra.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};
export default GenraList;
