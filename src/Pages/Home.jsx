import { Outlet, useLoaderData } from "react-router-dom";
import Heading from "../components/Heading";
import Items from "../components/Items";
import Card from "../components/Card";

const Home = () => {
  const items = useLoaderData(); 
console.log(items);
  return (
    <div className="container mx-auto">
      <div>
        <Heading title={"Explore Cutting Edge Gadgets"} />
      </div>
      <div><Items items={items} /> 
      
 
      
      </div>
      <Outlet />
    </div>
  );
};

export default Home;
