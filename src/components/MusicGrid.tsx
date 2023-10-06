import { Center, SimpleGrid, Text } from "@chakra-ui/react";
import MusicCard from "./MusicCard";
import useMusics from "../hooks/useMusics";

const MusicGrid = () => {
  const { data, error ,imageLoading } = useMusics();
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding={10}
        spacing={8}
      >
        {data.map((music,index) => (
          <Center>
            <MusicCard key={music.id} music={music} imageStatus={imageLoading[index]}/>
          </Center>
          
        ))}
      </SimpleGrid>
    </>
  );
};
export default MusicGrid;
