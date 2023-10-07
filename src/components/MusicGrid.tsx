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
        columns={{ base :1 ,sm: 2, md: 3, lg: 3, xl: 4 }}
        padding={5}
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
