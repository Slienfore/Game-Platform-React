import { HStack, Image } from "@chakra-ui/react";
// import logo source
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    // HStack: used to stack elements in the horizontal direction
    <HStack justifyContent="space-between" padding="10px">
      {/* using the boxSize to change the size of the image */}
      <Image src={logo} boxSize="60px"></Image>

      {/* prop the data from father to children, and this component is a transfer station*/}
      <SearchInput onSearch={onSearch}></SearchInput>

      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default NavBar;
