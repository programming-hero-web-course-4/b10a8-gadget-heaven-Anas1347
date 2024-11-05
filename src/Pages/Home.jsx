import { Outlet, useLoaderData } from "react-router-dom";
import { useEffect } from "react"; 
import Heading from "../components/Heading";
import Items from "../components/Items";
import Banner from "../components/Banner";

const Home = () => {
  const items = useLoaderData();

  useEffect(() => {
    document.title = "Gadget & Heaven | Home"; 
  }, []); 

  return (
    <div>
      <Banner />
      <div className="container mx-auto">
        <div>
          <Heading title="Explore Cutting Edge Gadgets" />
        </div>
        <div>
          <Items items={items} />
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
