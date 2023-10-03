import { SimpleGrid, Text } from "@chakra-ui/react";
import useMusics from "../hooks/useMusics";
import MusicCard from "./MusicCard";

const MusicGrid = () => {
  const {musics , error } = useMusics()
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{sm:1 , md:2 , lg:3 , xl:4}} padding={10} spacing={10}>
      {musics.map((music) =>(
        <MusicCard key={music.id} music={music}/>
        ))}
      </SimpleGrid>
    </>
  );
};
export default MusicGrid;
