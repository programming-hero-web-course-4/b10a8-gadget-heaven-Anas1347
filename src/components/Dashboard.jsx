import { useEffect, useState } from "react";
import { getAllAddToCart, removeFromCart } from "../utils";
import AddToCart from "./AddToCart";

const Dashboard = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch all items from the cart and set the state
    const allItems = getAllAddToCart();
    setItems(allItems);
  }, []);

  const handleRemove = (product_id) => {
    removeFromCart(product_id);
    // Update the state after removing an item
    const updatedItems = getAllAddToCart();
    setItems(updatedItems);
  };

  return (
    <div>
      <header className="bg-purple-600 text-white text-center flex flex-col py-4">
        <h1 className="text-3xl">Dashboard</h1>
        <p>Here you can find all the information about the selected product.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <button className="btn btn-primary">Cart</button>
          <button className="btn btn-secondary">Wishlist</button>
        </div>
      </header>

      <div className="mt-6">
        {items.length > 0 ? (
          items.map((item) => (
            <AddToCart
              key={item.product_id}
              item={item}
              handleRemove={handleRemove}
            />
          ))
        ) : (
          <p className="text-center text-gray-600">Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
