import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

const Layout = () => {
  return (
    <div>
      <Nav />
      <div className="w-[90%] mx-auto">
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
};

export default Layout;
