import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Layout = () => {
  return (
    <>
      {/* Nav View */}
      <NavBar></NavBar>

      {/* Home View */}
      <Outlet></Outlet>
    </>
  );
};

export default Layout;
