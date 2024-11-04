import React from "react";

const AddToCart = ({ item, handleRemove }) => {
  const { product_title, product_image, price, description, product_id } = item;

  return (
    <div className="container mx-auto">
      <div className="flex items-center mb-6 mt-2 bg-base-100 w-full shadow-lg rounded-lg p-4 space-x-4">
        <figure className="w-1/4">
          <img
            src={product_image || '/path/to/fallback/image.jpg'} 
            alt={product_title}
            className="h-32 w-full object-contain rounded-md"
          />
        </figure>

        <div className="flex-1">
          <h2 className="text-lg font-semibold">{product_title}</h2>
          <p className="text-sm text-gray-600 mb-2">{description}</p>
          <p className="text-md font-semibold">Price: ${price}</p>
        </div>

        <button 
          onClick={() => handleRemove(product_id)} 
          className="btn btn-error text-white"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default AddToCart;
