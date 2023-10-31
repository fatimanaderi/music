import {
  Button,
  Menu,
  MenuItem,
  MenuButton,
  MenuList,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { QueryItem } from "../../data/query";
import useAllSelector from "../../hooks/useAllSelector";
import { FiChevronDown } from "react-icons/fi";
interface Props {
  valueSelector: string;
  onChangedValue: (value: string) => void;
  queryItem: QueryItem;
}
const AllSelector = ({ valueSelector, onChangedValue, queryItem }: Props) => {
  const { data, error } = useAllSelector(queryItem);
  if (error) return null;
  return (
    <Wrap>
      <WrapItem mx={2}>
        <Menu>
          <MenuButton as={Button} rightIcon={<FiChevronDown />}>
            {valueSelector || queryItem.name}
          </MenuButton>
          <MenuList>
            {data?.map((val, index) => (
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
export default AllSelector;
