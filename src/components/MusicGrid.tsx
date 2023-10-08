import { Center, SimpleGrid, Text } from "@chakra-ui/react";
import MusicCard from "./MusicCard";
import useMusics from "../hooks/useMusics";
interface Props{
  selectedGenre:string ;
  selectedInstrument:string
}

const MusicGrid = ({selectedGenre , selectedInstrument}:Props) => {
  const { data, error ,imageLoading } = useMusics(selectedGenre , selectedInstrument);
  if(error) return null;
  return (
      <SimpleGrid
        columns={{ base :1 ,sm: 2, md: 3, lg: 3, xl: 4 }}
        padding={5}
        spacing={4}
      >
        {(data.length==0 && selectedInstrument!="") && <Text>There is nothing here!</Text>}
        {data.map((music,index) => (
          <Center key={music.id}>
            <MusicCard music={music} imageStatus={imageLoading[index]}/>
          </Center>
          
        ))}
      </SimpleGrid>
  );
};
export default MusicGrid;
