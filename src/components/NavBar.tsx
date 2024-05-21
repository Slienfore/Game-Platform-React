import { Box, HStack, Image } from "@chakra-ui/react";
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
        {/* Link 无法被 Image 撑开 */}
        <Box boxSize="60px">
          <Image src={logo} boxSize="60px" />
        </Box>
      </Link>

      <SearchInput></SearchInput>

      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default NavBar;
