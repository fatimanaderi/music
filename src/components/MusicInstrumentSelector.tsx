import {
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { FiChevronDown } from "react-icons/fi";
import useInstruments from "../hooks/useInstruments";

const MusicInstrumentSelector = () => {
    const { data , error} =useInstruments();
    if (error) return null
  return (
    <HStack ml={5}>
      <Menu>
        <MenuButton as={Button} rightIcon={<FiChevronDown />}>
          Instrument
        </MenuButton>
        <MenuList>
            {data.map(instrument =><MenuItem key={instrument.id}>{instrument.name}</MenuItem> )}
        </MenuList>
      </Menu>
    </HStack>
  );
};
export default MusicInstrumentSelector;
