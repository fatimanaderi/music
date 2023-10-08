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

interface Props {
  onSelectedInstrument: (instrument: string) => void;
  selectedInstrument:string
}

const MusicInstrumentSelector = ({ onSelectedInstrument,selectedInstrument }: Props) => {
  const { data, error } = useInstruments();
  if (error) return null;
  return (
    <HStack ml={5}>
      <Menu>
        <MenuButton as={Button} rightIcon={<FiChevronDown />}>
          {selectedInstrument ||"Instrument"}
        </MenuButton>
        <MenuList>
          {data.map((instrument) => (
            <MenuItem
              onClick={() => onSelectedInstrument(instrument.name)}
              key={instrument.id}
            >
              {instrument.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </HStack>
  );
};
export default MusicInstrumentSelector;
