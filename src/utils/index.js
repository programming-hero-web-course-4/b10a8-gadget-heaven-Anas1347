import { toast } from "react-toastify";

const getAllAddToCart = () => {
  const addCart = JSON.parse(localStorage.getItem("addCart"));
  return addCart ? addCart : [];
};

const addToCart = (item) => {
  const addCart = getAllAddToCart();

  const isExist = addCart.find(
    (cartItem) => cartItem.product_id === item.product_id
  );

  if (isExist) {
    toast.error("Item already added to cart");
    return;
  }

  addCart.push(item);
  localStorage.setItem("addCart", JSON.stringify(addCart));

  toast.success("Item successfully added to cart!");
};

const removeFromCart = (product_id) => {
  let addCart = getAllAddToCart();

  const itemExists = addCart.find(
    (cartItem) => cartItem.product_id === product_id
  );
  if (itemExists) {
    addCart = addCart.filter((cartItem) => cartItem.product_id !== product_id);
    localStorage.setItem("addCart", JSON.stringify(addCart));
  }
};

const clearCart = () => {
  localStorage.removeItem("addCart");

  toast.info("Cart has been cleared");
};

export { addToCart, getAllAddToCart, removeFromCart, clearCart };
