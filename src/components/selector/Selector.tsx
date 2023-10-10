import { Button, Menu, MenuItem,MenuButton, MenuList, Wrap, WrapItem } from "@chakra-ui/react";
import { FiChevronDown } from "react-icons/fi";
interface Props{
  valueSelector:string;
  onChangedValue:(value:string)=>void;
  name:string;
  data:Data[];
}
interface Data{
  name:string
}
const Selector = ({valueSelector,data,onChangedValue,name}:Props) => {
  return (
    <Wrap >
      <WrapItem mx={2}>
          <Menu>
            <MenuButton as={Button} rightIcon={<FiChevronDown />}>
              {valueSelector || name}
            </MenuButton>
            <MenuList>
              {data.map((val,index) => (
                <MenuItem onClick={() => onChangedValue(val.name)} key={index}>
                  {val.name}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
      </WrapItem>
    </Wrap>
  );
};
export default Selector;
