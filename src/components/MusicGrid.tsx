import { SimpleGrid, Text } from "@chakra-ui/react";
import useMusics from "../hooks/useMusics";
import MusicCard from "./MusicCard";
import MusicCardSkeleton from "./MusicCardSkeleton";

const MusicGrid = () => {
  const {musics , error ,isLoading} = useMusics()
  const skeletons =[1,2,3,4,5,6,7,8]
 
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{sm:1 , md:2 , lg:3 , xl:4}} padding={10} spacing={10}>
      {isLoading && skeletons.map(skeleton => <MusicCardSkeleton key={skeleton}/>)}
      {musics.map((music) =>(
        <MusicCard key={music.id} music={music}/>
        ))}
      </SimpleGrid>
    </>
  );
};
export default MusicGrid;
