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
          borderRadius: "20%",
          background: "white",
          boxShadow: "0px 18px 93px 5px rgba(61,54,61,1)",
        }}
        color="#A87676"
      />
      <Footer />
    </div>
  );
};

export default Layout;
