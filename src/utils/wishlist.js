import { toast } from "react-toastify";

const getAllWishlistItems = () => {
  const wishlist = JSON.parse(localStorage.getItem("wishlist"));
  return wishlist ? wishlist : [];
};

const addToWishlist = (item) => {
  const wishlist = getAllWishlistItems();

  const isExist = wishlist.find((wishlistItem) => wishlistItem.product_id === item.product_id);

  if (isExist) {
    toast.error("Item already added to wishlist");
    return;
  }

  wishlist.push(item);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));

  // Use toast instead of alert
  toast.success("Item successfully added to wishlist!");
};

const removeFromWishlist = (product_id) => {
  let wishlist = getAllWishlistItems();

  // Filter out the item to be removed
  wishlist = wishlist.filter((wishlistItem) => wishlistItem.product_id !== product_id);
  
  localStorage.setItem("wishlist", JSON.stringify(wishlist));

  // Optional: Notify when an item is removed
  toast.info("Item removed from wishlist");
};

const clearWishlist = () => {
  localStorage.removeItem("wishlist");
  
  // Notify when wishlist is cleared
  toast.info("Wishlist has been cleared");
};

export { addToWishlist, getAllWishlistItems, removeFromWishlist, clearWishlist };
