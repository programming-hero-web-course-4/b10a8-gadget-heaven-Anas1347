const getAllAddToCart = () => {
    const addCart = JSON.parse(localStorage.getItem("addCart"));
    return addCart ? addCart : [];
  };
  
  const addToCart = (item) => {
    const addCart = getAllAddToCart();
    const isExist = addCart.find((cartItem) => cartItem.product_id === item.product_id);
    
    if (isExist) return alert("Already added to cart");
    
    addCart.push(item);
    localStorage.setItem("addCart", JSON.stringify(addCart));
  };
  
  const removeFromCart = (product_id) => {
    let addCart = getAllAddToCart();
    
    addCart = addCart.filter((cartItem) => cartItem.product_id !== product_id);
    
    localStorage.setItem("addCart", JSON.stringify(addCart));
  };
  
  export { addToCart, getAllAddToCart, removeFromCart };
  