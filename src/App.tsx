import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/navbar/NavBar";
import MusicGrid from "./components/MusicGrid";
import GenraList from "./components/aside/GenraList";
import { useState } from "react";
import Main, { MusicQuery } from "./components/main/Main";

function App() {
  const [musicQuery, setMusicQuery] = useState<MusicQuery>({} as MusicQuery);
  return (
    <>
      <Grid
        templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
        templateColumns={{ base: "1fr", lg: "230px" }}
      >
        <GridItem area={"nav"}>
          <NavBar onSearch={(title)=>setMusicQuery({ ...musicQuery, title } as MusicQuery)}/>
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"}>
            <GenraList
              selectedGenre={musicQuery.tag}
              onSelectedGenre={(tag) =>
                setMusicQuery({ ...musicQuery, tag } as MusicQuery)
              }
            />
          </GridItem>
        </Show>
        <GridItem area={"main"}>
          <Main
            musicQuery={musicQuery}
            setQuery={(value) => setMusicQuery(value)}
          />
          <MusicGrid musicQuery={musicQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
