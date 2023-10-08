import {
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { FiChevronDown } from "react-icons/fi";

const SortSelector = () => {
  return (
    <HStack ml={5}>
      <Menu>
        <MenuButton as={Button} rightIcon={<FiChevronDown />}>
          Sort By
        </MenuButton>
        <MenuList>
            <MenuItem>Date Release</MenuItem>
            <MenuItem>Score</MenuItem>
          
          {/* {data.map((instrument) => (
            <MenuItem
              onClick={() => onSelectedInstrument(instrument.name)}
              key={instrument.id}
            >
              {instrument.name}
            </MenuItem>
          ))} */}
        </MenuList>
      </Menu>
    </HStack>
  );
};
export default SortSelector;
