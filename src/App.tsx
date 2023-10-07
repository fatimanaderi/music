import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import MusicGrid from "./components/MusicGrid";
import GenraList from "./components/GenraList";
import { useState } from "react";

function App() {
  const [selectedGenre , setSelectedGenre] = useState("")
  return (
    <>
      <Grid
        templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
        templateColumns={{ base: "1fr", lg: "250px" }}
      >
        <GridItem area={"nav"}>
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"} >
            <GenraList onSelectedGenre={(genre)=>setSelectedGenre(genre)}/>
          </GridItem>
        </Show>
        <GridItem  area={"main"}>
          <MusicGrid selectedGenre={selectedGenre}/>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
