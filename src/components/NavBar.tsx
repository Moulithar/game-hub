import { HStack, Image } from "@chakra-ui/react";

import logo from "../assets/react.svg";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} padding={"0px 20px"}>
      <Image src={logo} boxSize="40px" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
