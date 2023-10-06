import { Center, SimpleGrid } from "@chakra-ui/react";
import MusicCard from "./MusicCard";
import useMusics from "../hooks/useMusics";

const MusicGrid = () => {
  const { data, error ,imageLoading } = useMusics();
  if(error) return null
  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding={10}
        spacing={8}
      >
        {data.map((music,index) => (
          <Center key={music.id}>
            <MusicCard music={music} imageStatus={imageLoading[index]}/>
          </Center>
          
        ))}
      </SimpleGrid>
    </>
  );
};
export default MusicGrid;
