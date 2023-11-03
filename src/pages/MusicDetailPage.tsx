import { useParams } from "react-router-dom";
import {Grid, GridItem } from "@chakra-ui/react";
import MusicImgDetails from "../components/musicDetails/MuiscImgDetails";
import MusicDetails from "../components/musicDetails/MusicDetails";

const MusicDetailPage = () => {
  const { id } = useParams();
  return (
    <Grid
      templateRows={{ base: "repeat(2, 1fr)", md: "repeat(1, 1fr)" }}
      templateColumns={"repeat(7, 1fr)"}
    >
      <GridItem colSpan={{ base: 7, md: 3 , lg:2}} width={"100%"}>
        <MusicImgDetails id={id!} />
      </GridItem>
      <GridItem colSpan={{ base: 7, md: 3 , lg:5}}>
        <MusicDetails id={id!}/>
      </GridItem>
    </Grid>
  );
};
export default MusicDetailPage;
