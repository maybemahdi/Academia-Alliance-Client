import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import Headroom from "react-headroom";
import ScrollToTop from "react-scroll-to-top";

const Layout = () => {
  return (
    <div>
      <Headroom>
        <Nav />
      </Headroom>
      <div className="w-[90%] mx-auto">
        <Outlet />
      </div>
      <ScrollToTop
        smooth
        style={{
          textAlign: "center",
          fontFamily: "Poppins",
          fontWeight: "bold",
          padding: "5px",
          paddingLeft: "5.9px",
          borderRadius: "50%",
          background: "white",
          boxShadow: "2px 1px 12px 1px rgba(117,110,117,1)",
        }}
        color="#A87676"
      />
      <Footer />
    </div>
  );
};

export default Layout;
