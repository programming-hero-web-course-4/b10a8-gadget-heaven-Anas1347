import { toast } from "react-toastify";

const getAllAddToCart = () => {
  const addCart = JSON.parse(localStorage.getItem("addCart"));
  return addCart ? addCart : [];
};

const addToCart = (item) => {
  const addCart = getAllAddToCart();

  const isExist = addCart.find((cartItem) => cartItem.product_id === item.product_id);

  if (isExist) {
    toast.error("Item already added to cart");
    return;
  }

  addCart.push(item);
  localStorage.setItem("addCart", JSON.stringify(addCart));

  // Use toast instead of alert
  toast.success("Item successfully added to cart!");
};

const removeFromCart = (product_id) => {
  let addCart = getAllAddToCart();

  addCart = addCart.filter((cartItem) => cartItem.product_id !== product_id);

  localStorage.setItem("addCart", JSON.stringify(addCart));

  // Optional: Notify when an item is removed
  toast.info("Item removed from cart");
};

const clearCart = () => {
  localStorage.removeItem("addCart");
  
  // Notify when cart is cleared
  toast.info("Cart has been cleared");
};

export { addToCart, getAllAddToCart, removeFromCart, clearCart };
