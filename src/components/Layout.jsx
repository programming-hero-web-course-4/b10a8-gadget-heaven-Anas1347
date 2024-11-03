import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";


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
