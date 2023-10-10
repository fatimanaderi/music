import { Wrap } from "@chakra-ui/react";
import AllSelector from "../selector/AllSelector";
import AllSelectorData from "../selector/AllSelectorData";
import country from "./../../data/country.json";
import quality from "./../../data/quality.json";
import years from "./../../data/year";
export interface Query {
  endpoint: string;
  listname: string;
  query: string;
}
export interface MusicQuery {
  instrument: "";
  tag: "";
  label: "";
  area: "";
  country: "";
  quality: "";
  year: "";
  title:"";
  [x: string]: "";
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
const queriesData: QueryData[] = [
  {
    name: "country",
    data: country.slice(0, 10),
  },
  {
    name: "quality",
    data: quality,
  },
  {
    name: "year",
    data: years,
  },
];
export interface QueryData {
  name: string;
  data: Data[];
}
export interface Data {
  name: string;
}
interface Props{
    musicQuery:MusicQuery;
    setQuery:(value:MusicQuery)=>void;
}
const Main = ({musicQuery,setQuery}:Props) => {
  return (
    <Wrap ml={6}>
      {queries.map((query: Query) => (
        <AllSelector
          query={query}
          key={query.query}
          valueSelector={musicQuery[query.query]}
          onChangedValue={(value) =>
            setQuery({ ...musicQuery, [query.query]: value } as MusicQuery)
          }
        />
      ))}
      {queriesData.map((item: QueryData) => (
        <AllSelectorData
          query={item}
          key={item.name}
          valueSelector={musicQuery[item.name]}
          onChangedValue={(value) =>
            setQuery({ ...musicQuery, [item.name]: value } as MusicQuery)
          }
        />
      ))}
    </Wrap>
  );
};
export default Main;
