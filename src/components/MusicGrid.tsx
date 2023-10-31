import { Center, SimpleGrid, Text } from "@chakra-ui/react";
import MusicCard from "./musicCard/MusicCard";
import useMusics from "../hooks/useMusics";
import useMusicQueryStore from "../store";

const MusicGrid = () => {
  const musicQuery = useMusicQueryStore(s=>s.musicQuery)
  const { data, error ,imageLoading } = useMusics(musicQuery);
  if(error) return null;
  return (
      <SimpleGrid
        columns={{ base :1 ,sm: 2, md: 3, lg: 3, xl: 4 }}
        padding={5}
        spacing={4}
      >
        {(data.length==0 && Object.keys(musicQuery).length != 0) && <Text>There is nothing here!</Text>}
        {data.map((music,index) => (
          <Center key={music.id}>
            <MusicCard music={music} imageStatus={imageLoading[index]}/>
          </Center>
          
        ))}
      </SimpleGrid>
  );
};
export default MusicGrid;
