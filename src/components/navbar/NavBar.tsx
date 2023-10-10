import { HStack, Image } from "@chakra-ui/react";
import logo from "./../../assets/musiclogo1.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
interface Props{
  onSearch:(title : string)=>void
}
const NavBar = ({onSearch} :Props) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize={"50px"}></Image>
      <SearchInput onSearch={(title)=>onSearch(title)}/>
      <ColorModeSwitch />
    </HStack>
  );
};
export default NavBar;
