import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import MusicGrid from "./components/MusicGrid";
import GenraList from "./components/GenraList";
import { useState } from "react";
import AllSelector from "./components/AllSelector";

export interface Query {
  endpoint: string;
  listname: string;
  query: string;
}
export interface MusicQuery {
  instrument: "";
  tag: "";
  label:"";
  area:"";
  [x:string] :""
}
const queries: Query[] = [
  {
    endpoint: "/instrument",
    listname: "instruments",
    query: "instrument",
  },
  {
    endpoint: "/label",
    listname: "labels",
    query: "label",
  },
  {
    endpoint: "/area",
    listname: "areas",
    query: "area",
  },
];

function App() {
  const [musicQuery, setMusicQuery] = useState<MusicQuery>({} as MusicQuery);
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
              selectedGenre={musicQuery.tag}
              onSelectedGenre={(tag) =>
                setMusicQuery({ ...musicQuery, tag } as MusicQuery)
              }
            />
          </GridItem>
        </Show>
        <GridItem area={"main"}>
          <HStack>
            {queries.map((query: Query) => (
              <AllSelector
                query={query}
                key={query.query}
                valueSelector={musicQuery[query.query]}
                onChangedValue={(value) => setMusicQuery({...musicQuery ,[query.query]:value} as MusicQuery)}
              />
            ))}
          </HStack>
          <MusicGrid musicQuery={musicQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
