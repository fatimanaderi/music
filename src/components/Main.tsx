import { Wrap } from "@chakra-ui/react";
import AllSelector from "./AllSelector";
import { QueryItem, queries } from "../data/query";
import useMusicQueryStore from "../store";

const Main = () => {
  const setQuerySelector = useMusicQueryStore((s) => s.setQuerySelector);
  const musicQuery = useMusicQueryStore(s=>s.musicQuery);
  return (
    <Wrap ml={6}>
      {queries.map((queryItem: QueryItem) => (
        <AllSelector
          queryItem={queryItem}
          key={queryItem.name}
          valueSelector={musicQuery[queryItem.name]}
          onChangedValue={(value) => setQuerySelector(value, queryItem.name)}
        />
      ))}
    </Wrap>
  );
};
export default Main;
