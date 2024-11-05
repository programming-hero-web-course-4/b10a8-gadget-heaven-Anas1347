import { useEffect, useState } from "react";
import { getAllAddToCart, removeFromCart } from "../utils";
import AddToCart from "./AddToCart";
import AddToWishlist from "./AddToWishlist";
import { getAllWishlistItems } from "../utils/wishlist";
import { toast } from "react-toastify";

const Dashboard = () => {
  const [items, setItems] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showCart, setShowCart] = useState(true);
  const [sortOrder, setSortOrder] = useState("asc");
  const [purchasePrice, setPurchasePrice] = useState(0);

  useEffect(() => {
    const allItems = getAllAddToCart() || [];
    setItems(allItems);
    calculateTotalPrice(allItems);

    const allWishlistItems = getAllWishlistItems() || [];
    setWishlist(allWishlistItems);
  }, []);

  useEffect(() => {
    document.title = showCart ? "Dashboard | Cart" : "Dashboard | Wishlist";
  }, [showCart]);

  const calculateTotalPrice = (cartItems) => {
    const total = cartItems.reduce((acc, item) => acc + item.price, 0);
    setTotalPrice(total);
  };

  const handleRemoveFromCart = (product_id) => {
    removeFromCart(product_id);
    const updatedItems = items.filter((item) => item.product_id !== product_id);
    setItems(updatedItems);
    calculateTotalPrice(updatedItems);
    toast.info("Item removed from cart");
  };

  const handleAddToWishlist = (item) => {
    if (!wishlist.some((wishItem) => wishItem.product_id === item.product_id)) {
      const updatedWishlist = [...wishlist, item];
      setWishlist(updatedWishlist);
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      toast.success("Item added to wishlist!");
    } else {
      toast.error("Item is already in the wishlist!");
    }
  };

  const handleRemoveFromWishlist = (product_id) => {
    const updatedWishlist = wishlist.filter(
      (item) => item.product_id !== product_id
    );
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    toast.info("Item removed from wishlist");
  };

  const handlePurchase = () => {
    if (items.length === 0) {
      toast.error("No items in cart to purchase!");
      return;
    }

    const priceToShow = totalPrice;

    localStorage.removeItem("addCart");

    setItems([]);
    setTotalPrice(0);
    setPurchasePrice(priceToShow);
    setShowModal(true);

    toast.success("Purchase successful!");
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSort = () => {
    const sortedItems = [...items].sort((a, b) => {
      return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
    });
    setItems(sortedItems);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <div>
      <header className="bg-purple-600 text-white text-center flex flex-col py-4">
        <h1 className="text-3xl">Dashboard</h1>
        <p>Here you can find all the information about the selected product.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <button
            className={`btn ${showCart ? "btn-primary" : "btn-secondary"}`}
            onClick={() => setShowCart(true)}
          >
            Cart
          </button>
          <button
            className={`btn ${showCart ? "btn-secondary" : "btn-primary"}`}
            onClick={() => setShowCart(false)}
          >
            Wishlist
          </button>
        </div>
      </header>

      <div className="container mx-auto flex justify-between mt-4">
        <h1 className="text-xl font-semibold">
          {showCart ? "Cart" : "Wishlist"}
        </h1>
        {showCart && (
          <div className="flex justify-center items-center gap-8">
            <h1>Total Cost: ${totalPrice}</h1>
            <button className="btn btn-warning" onClick={handleSort}>
              Sort By Price {sortOrder === "asc" ? "🔼" : "🔽"}
            </button>
            <button className="btn btn-success" onClick={handlePurchase}>
              Purchase
            </button>
          </div>
        )}
      </div>

      <div className="mt-6">
        {showCart ? (
          items.length > 0 ? (
            items.map((item) => (
              <AddToCart
                key={item.product_id}
                item={item}
                handleRemove={handleRemoveFromCart}
                handleWishlist={handleAddToWishlist}
              />
            ))
          ) : (
            <p className="text-center text-gray-600">Your cart is empty.</p>
          )
        ) : wishlist.length > 0 ? (
          wishlist.map((item) => (
            <AddToWishlist
              key={item.product_id}
              item={item}
              handleRemove={handleRemoveFromWishlist}
            />
          ))
        ) : (
          <p className="text-center text-gray-600">Your wishlist is empty.</p>
        )}
      </div>

      {showModal && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white p-5 rounded-md shadow-md">
            <h2 id="modal-title" className="text-lg font-semibold">
              Purchase Successful!
            </h2>
            <p>Thank you for your purchase!</p>
            <h1>Total Cost: ${purchasePrice}</h1>{" "}
            <button className="btn btn-primary mt-4" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
