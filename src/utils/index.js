const getAllAddToCart = () => {
    const addCart = JSON.parse(localStorage.getItem("addCart"));
    return addCart ? addCart : []; 
  };
  
  const addToCart = (item) => {
    const addCart = getAllAddToCart();
    
    const isExist = addCart.find((cartItem) => cartItem.product_id === item.product_id);
  
    if (isExist) {
      alert("Item already added to cart");
      return; 
    }
  
    // Item is being added for the first time
    addCart.push(item);
    localStorage.setItem("addCart", JSON.stringify(addCart));
    
    // Show success alert
    alert("Item successfully added to cart!");
  };
  
  const removeFromCart = (product_id) => {
    let addCart = getAllAddToCart();
    
    addCart = addCart.filter((cartItem) => cartItem.product_id !== product_id);
    
    localStorage.setItem("addCart", JSON.stringify(addCart));
  };
  
  const clearCart = () => {
    localStorage.removeItem("addCart");
  };
  
  export { addToCart, getAllAddToCart, removeFromCart, clearCart };
  