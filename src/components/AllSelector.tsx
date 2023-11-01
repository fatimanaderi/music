import { Center, SimpleGrid } from "@chakra-ui/react";
import CustomSelector from "./CustomSelector";
import { QueryItem, queries } from "../data/query";
import useMusicQueryStore from "../store";

const AllSelector = () => {
  const setQuerySelector = useMusicQueryStore((s) => s.setQuerySelector);
  const musicQuery = useMusicQueryStore((s) => s.musicQuery);
  return (
    <SimpleGrid
      margin={3}
      spacing={3}
      columns={{ base: 2, sm: 3, md: 4, lg: 6 }}
    >
      {queries.map((queryItem: QueryItem) => (
        <Center key={queryItem.name}>
          <CustomSelector
            queryItem={queryItem}
            valueSelector={musicQuery[queryItem.name]}
            onChangedValue={(value) => setQuerySelector(value, queryItem.name)}
          />
        </Center>
      ))}
    </SimpleGrid>
  );
};
export default AllSelector;
