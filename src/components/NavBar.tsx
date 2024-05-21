import { HStack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
// import logo source
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    // HStack: used to stack elements in the horizontal direction
    <HStack justifyContent="space-between" padding="10px">
      <Link to="/">
        {/* using the boxSize to change the size of the image */}
        <Image src={logo} boxSize="60px" objectFit="cover"></Image>
      </Link>

      <SearchInput></SearchInput>

      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default NavBar;
