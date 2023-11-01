import {
  Menu,
  MenuItem,
  MenuButton,
  MenuList,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { QueryItem } from "../data/query";
import useAllSelector from "../hooks/useAllSelector";
import { FiChevronDown } from "react-icons/fi";
import { useState } from "react";
interface Props {
  valueSelector: string;
  onChangedValue: (value: string) => void;
  queryItem: QueryItem;
}
const AllSelector = ({ valueSelector, onChangedValue, queryItem }: Props) => {
  const { data, error } = useAllSelector(queryItem);
  const [menuStatus, setMenuStatus] = useState(false);
  const [menuData, setMenuData] = useState(data);
  const [inputText, setInputText] = useState(valueSelector || queryItem.name);
  if (error) return null;
  const handleSelectEvent = (name: string) => {
    onChangedValue(name);
    setMenuStatus(false);
    setInputText(name);
  };
  const changeInputEvent = (name: string) => {
    let result = data?.filter((item) => item.name.includes(name));
    setMenuData(result);
    setMenuStatus(true);
    setInputText(name);
  };
  const handleShowData = () => {
    setMenuStatus(true);
    setMenuData(data);
  };
  return (
    <Menu isOpen={menuStatus}>
      <InputGroup width={"100%"}>
        <Input
          value={inputText}
          onChange={(e) => changeInputEvent(e.target.value)}
        />
        <InputRightElement>
          <FiChevronDown color="gray.500" onClick={() => handleShowData()} />
        </InputRightElement>
      </InputGroup>
      <MenuButton marginTop={6}></MenuButton>
      <MenuList >
        {/* this && does not render menu list ==> it renders by default chakra ui */}
        {menuStatus && menuData?.map((val, index) => (
          <MenuItem onClick={() => handleSelectEvent(val.name)} key={index}>
            {val.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
export default AllSelector;
