import {
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { FiChevronDown } from "react-icons/fi";
import useAllSelector from "../hooks/useAllSelector";
import { Query } from "../App";
interface Props{
  valueSelector:string;
  onChangedValue:(value:string)=>void;
  query:Query;
}
const AllSelector = ({valueSelector,onChangedValue,query}:Props) => {
  const { data, error } = useAllSelector(query);
  if (error) return null;
  return (
    <HStack ml={5}>
      <Menu>
        <MenuButton as={Button} rightIcon={<FiChevronDown />}>
        {valueSelector || query.query}
        </MenuButton>
        <MenuList>
          {data.map((val) => (
            <MenuItem
              onClick={() => onChangedValue(val.name)}
              key={val.id}
            >
              {val.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </HStack>
  );
};
export default AllSelector;
