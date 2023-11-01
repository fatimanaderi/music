import { Center, SimpleGrid } from "@chakra-ui/react";
import CustomSelector from "./CustomSelector";
import { QueryItem, queries } from "../data/query";

const AllSelector = () => {
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
          />
        </Center>
      ))}
    </SimpleGrid>
  );
};
export default AllSelector;
