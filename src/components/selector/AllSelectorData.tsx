import {
  Button,
  Flex,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { FiChevronDown } from "react-icons/fi";
import { QueryData } from "../../App";

interface Props {
  valueSelector: string;
  onChangedValue: (value: string) => void;
  query: QueryData;
}
const AllSelectorData = ({ valueSelector, onChangedValue, query }: Props) => {
  return (
    <Wrap ml={5}>
      <WrapItem>
      <Menu>
        <MenuButton as={Button} rightIcon={<FiChevronDown />}>
          {valueSelector || query.name}
        </MenuButton>
        <MenuList>
          {query.data.map((val) => (
            <MenuItem onClick={() => onChangedValue(val.name)} key={val.name}>
              {val.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
      </WrapItem>
    </Wrap>
  );
};
export default AllSelectorData;
