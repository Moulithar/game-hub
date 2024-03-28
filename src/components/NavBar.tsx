import { HStack, Icon } from "@chakra-ui/react";

import { FaGamepad } from "react-icons/fa";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({onSearch}: Props) => {
  return (
    <HStack padding={"10px"} alignItems={"center"}>
      <Icon
        as={FaGamepad}
        boxSize="35px"
        padding={1.5}
        border={"2px solid"}
        borderRadius={"10px"}
      />
      <SearchInput onSearch={onSearch} />

      {/* <Image src={logo} boxSize="40px" /> */}
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
