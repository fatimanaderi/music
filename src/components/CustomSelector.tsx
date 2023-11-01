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
import useMusicQueryStore from "../store/musicStore";
interface Props {
  queryItem: QueryItem;
}
const AllSelector = ({ queryItem }: Props) => {
  const { data, error } = useAllSelector(queryItem);
  const [menuStatus, setMenuStatus] = useState(false);
  const [menuData, setMenuData] = useState(data);
  if (error) return null;

  const setQuerySelector = useMusicQueryStore((s) => s.setQuerySelector);
  const [inputText, setInputText] = useState("");

  const handleSelectEvent = (value: string) => {
    setQuerySelector(value, queryItem.name);
    setMenuStatus(false);
    setInputText(value);
  };
  const changeInputEvent = (value: string) => {
    let result = data?.filter((item) => {
      let upperCase = item.name.toLowerCase();
      return upperCase.includes(value.toLowerCase());
    });
    setInputText(value);
    setMenuData(result);
    setMenuStatus(true);
  };
  return (
    <Menu isOpen={menuStatus} isLazy={true}>
      <MenuButton mt={7}></MenuButton>
      <InputGroup
        width={"100%"}
        onClick={() => {
          setMenuStatus(!menuStatus);
          setMenuData(data);
        }}
      >
        <Input
          value={inputText}
          placeholder={queryItem.name}
          onChange={(e) => changeInputEvent(e.target.value)}
        />
        <InputRightElement>
          <FiChevronDown />
        </InputRightElement>
      </InputGroup>
      <MenuList className="selector-height">
        {menuData?.map((val, index) => (
          <MenuItem onClick={() => handleSelectEvent(val.name)} key={index}>
            {val.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
export default AllSelector;
