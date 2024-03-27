import { HStack, Icon } from "@chakra-ui/react";

import { FaGamepad } from "react-icons/fa";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack
      justifyContent={"space-between"}
      padding={"5px 20px"}
      alignItems={"center"}
    >
      <Icon
        as={FaGamepad}
        boxSize="35px"
        padding={1.5}
        border={"2px solid"}
        borderRadius={"10px"}
      />

      {/* <Image src={logo} boxSize="40px" /> */}
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
