import { SimpleGrid, Text } from "@chakra-ui/react";
import useMusics from "../hooks/useMusics";
import MusicCard from "./musicCard/MusicCard";

const MusicGrid = () => {
  const { data, error } = useMusics();
  if (error) return null;
  return (
    <SimpleGrid
      columns={{ base: 1, sm: 2, md: 3, xl: 4 }}
      padding={5}
      spacing={4}
    >
      {data?.length == 0 && <Text>There is nothing here!</Text>}
      {data?.map((music) => (
        <MusicCard key={music.id} music={music} />
      ))}
    </SimpleGrid>
  );
};
export default MusicGrid;
