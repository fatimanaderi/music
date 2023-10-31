import { Button, HStack, Icon, List, ListItem } from "@chakra-ui/react";
import { SiApplemusic } from "react-icons/si";
import useGenres from "../../hooks/useGenres";
import useMusicQueryStore from "../../store";

const GenraList = () => {
  const { data, error } = useGenres();
  if (error) return null;
  const tagName = useMusicQueryStore((s) => s.musicQuery.tag);
  const setGenreName = useMusicQueryStore((s) => s.setGenreName);
  return (
    <List mx={4}>
      {data?.map((genra) => (
        <ListItem key={genra.id}>
          <HStack my={3}>
            <Icon boxSize={"30px"} as={SiApplemusic} color={"purple.200"} />
            <Button
              onClick={() => setGenreName(genra.name)}
              px={1}
              colorScheme={tagName === genra.name ? "purple" : ""}
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
