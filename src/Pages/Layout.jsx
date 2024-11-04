import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div>
      <div className="h-16 ">
      <Navbar></Navbar>
      </div>
      <div style={{ minHeight: "calc(100vh - 288px)" }}>
        <Outlet />
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Layout;
