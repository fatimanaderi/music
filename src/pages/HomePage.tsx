import { Grid, GridItem, Show } from "@chakra-ui/react";
import GenraList from "../components/GenraList";
import Main from "../components/Main";
import MusicGrid from "../components/MusicGrid";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{ base: `"main"`, lg: `"aside main"` }}
      templateColumns={{ base: "1fr", lg: "230px" }}
    >
      <Show above="lg">
        <GridItem area={"aside"}>
          <GenraList />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <Main />
        <MusicGrid />
      </GridItem>
    </Grid>
  );
};
export default HomePage;
