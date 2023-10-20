import { Wrap } from "@chakra-ui/react";
import AllSelector from "../selector/AllSelector";
import { QueryItem, queries } from "../../data/query";

export interface MusicQuery {
  instrument: "";
  tag: "";
  label: "";
  area: "";
  country: "";
  quality: "";
  year: "";
  title: "";
  [x: string]: "";
}
interface Props {
  musicQuery: MusicQuery;
  setQuery: (value: MusicQuery) => void;
}
const Main = ({ musicQuery, setQuery }: Props) => {
  return (
    <Wrap ml={6}>
      {queries.map((queryItem: QueryItem) => (
        <AllSelector
        queryItem={queryItem}
          key={queryItem.name}
          valueSelector={musicQuery[queryItem.name]}
          onChangedValue={(value) =>
            setQuery({ ...musicQuery, [queryItem.name]: value } as MusicQuery)
          }
        />
      ))}
    </Wrap>
  );
};
export default Main;
