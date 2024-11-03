import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div style={{ minHeight: "calc(100vh - 288px)" }}>
        <Outlet />
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Layout;
