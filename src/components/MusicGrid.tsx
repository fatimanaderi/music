import { Center, SimpleGrid } from "@chakra-ui/react";
import MusicCard from "./MusicCard";
import useMusics from "../hooks/useMusics";
interface Props{
  selectedGenre:string
}
const MusicGrid = ({selectedGenre}:Props) => {
  const { data, error ,imageLoading } = useMusics(selectedGenre);
  if(error) return null
  return (
      <SimpleGrid
        columns={{ sm: 1, md: 3, lg: 3, xl: 4 }}
        padding={10}
        spacing={4}
      >
        {data.map((music,index) => (
          <Center key={music.id}>
            <MusicCard music={music} imageStatus={imageLoading[index]}/>
          </Center>
          
        ))}
      </SimpleGrid>
  );
};
export default MusicGrid;
