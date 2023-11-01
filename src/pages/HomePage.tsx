import { Grid, GridItem, Show } from "@chakra-ui/react";
import GenraList from "../components/GenraList";
import AllSelector from "../components/AllSelector";
import MusicGrid from "../components/MusicGrid";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{ base: `"main"`, lg: `"aside main"` }}
      templateColumns={{ base: "1fr", lg: "initial" }}
    >
      <Show above="lg">
        <GridItem area={"aside"}>
          <GenraList />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <AllSelector />
        <MusicGrid />
      </GridItem>
    </Grid>
  );
};
export default HomePage;
