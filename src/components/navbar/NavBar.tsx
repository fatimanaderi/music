import { HStack, Image } from "@chakra-ui/react";
import logo from "./../../assets/musiclogo1.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize={"50px"}></Image>
      <SearchInput/>
      <ColorModeSwitch />
    </HStack>
  );
};
export default NavBar;
