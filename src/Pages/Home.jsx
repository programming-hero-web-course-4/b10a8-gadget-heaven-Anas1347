import { Outlet } from "react-router-dom";
import Heading from "../components/Heading";
import Items from "../components/Items";


const Home = () => {
  return (
    <div className="container mx-auto">
      <div >
        <Heading title={"Explore Cutting Edge Gadgets"}></Heading>
      </div>

      <Items></Items>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
