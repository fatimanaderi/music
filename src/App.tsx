import { Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/navbar/NavBar";
import MusicGrid from "./components/MusicGrid";
import GenraList from "./components/aside/GenraList";
import { useState } from "react";
import AllSelector from "./components/selector/AllSelector";
import country from "./data/country.json"
import quality from "./data/quality.json"
import years from "./data/year"
import AllSelectorData from "./components/selector/AllSelectorData";
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
  country:"";
  quality:"";
  year:"";
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
const queriesData : QueryData[]=[
  {
    name : "country",
    data:country.slice(0,10)
  },
  {
    name:"quality",
    data:quality
  },
  {
    name : "year",
    data: years
  }
]
export interface QueryData {
  name: string;
  data: Data[];
}
export interface Data{
  name:string
}
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
          <Flex>
            {queries.map((query: Query) => (
              <AllSelector
                query={query}
                key={query.query}
                valueSelector={musicQuery[query.query]}
                onChangedValue={(value) => setMusicQuery({...musicQuery ,[query.query]:value} as MusicQuery)}
              />
            ))}
            {queriesData.map((item :QueryData) => (
              <AllSelectorData
                query={item}
                key={item.name}
                valueSelector={musicQuery[item.name]}
                onChangedValue={(value) => setMusicQuery({...musicQuery ,[item.name]:value} as MusicQuery)}
              />
            ))}
          </Flex>
          <MusicGrid musicQuery={musicQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
