import { useEffect, useState } from "react";
import { getAllAddToCart, removeFromCart } from "../utils";
import AddToCart from "./AddToCart";

const Dashboard = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const allItems = getAllAddToCart();
    setItems(allItems);
  }, []);

  const handleRemove = (product_id) => {
    removeFromCart(product_id);
    setItems(getAllAddToCart()); // Refresh the items after removing
  };

  return (
    <div>
      <div className="bg-purple-600 text-white text-center flex flex-col py-4">
        <h1 className="text-3xl">Dashboard</h1>
        <p>Here you can find all the information about the selected product.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <button className="btn btn-primary">Cart</button>
          <button className="btn btn-secondary">Wishlist</button>
        </div>
      </div>

      <div>
        {items.length > 0 ? (
          items.map((item) => (
            <AddToCart handleRemove={handleRemove} key={item.product_id} item={item} />
          ))
        ) : (
          <p className="text-center">Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
