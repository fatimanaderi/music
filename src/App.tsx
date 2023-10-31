import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/navbar/NavBar";
import MusicGrid from "./components/MusicGrid";
import GenraList from "./components/GenraList";
import Main from "./components/Main";

function App() {
  return (
    <>
      <Grid
        templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
        templateColumns={{ base: "1fr", lg: "230px" }}
      >
        <GridItem area={"nav"}>
          <NavBar />
        </GridItem>
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
    </>
  );
}

export default App;
