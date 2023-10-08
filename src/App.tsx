import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import MusicGrid from "./components/MusicGrid";
import GenraList from "./components/GenraList";
import { useState } from "react";
import MusicInstrumentSelector from "./components/MusicInstrumentSelector";

function App() {
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedInstrument, setSelectedInstrument] = useState("");
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
            <GenraList
              selectedGenre={selectedGenre}
              onSelectedGenre={(genre) => setSelectedGenre(genre)}
            />
          </GridItem>
        </Show>
        <GridItem area={"main"}>
          <MusicInstrumentSelector
          selectedInstrument ={selectedInstrument}
            onSelectedInstrument={(instrument) =>
              setSelectedInstrument(instrument)
            }
          />
          <MusicGrid selectedGenre={selectedGenre} selectedInstrument={selectedInstrument} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
