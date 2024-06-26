import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Box } from "@chakra-ui/react";

const Layout = () => {
  return (
    <>
      {/* Nav View */}
      <NavBar></NavBar>

      {/* Home View */}
      <Box padding={5}>
        <Outlet></Outlet>
      </Box>
    </>
  );
};

export default Layout;
