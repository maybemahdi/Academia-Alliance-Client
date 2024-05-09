import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav";

const Layout = () => {
  return (
    <div>
      <Nav />
      <div className="w-[90%] mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
