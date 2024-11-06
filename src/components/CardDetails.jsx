import React, { useEffect, useState } from "react";
import { useLoaderData, useParams, useNavigate } from "react-router-dom";
import { addToCart } from "../utils";
import { addToWishlist } from "../utils/wishlist";
import { FaRegHeart, FaShoppingCart } from "react-icons/fa";

const CardDetails = () => {
  const { product_id } = useParams();
  const allItems = useLoaderData();
  const navigate = useNavigate();
  const [item, setItem] = useState({});

  useEffect(() => {
    const singleData = allItems.find((item) => item.product_id == product_id);
    setItem(singleData);
  }, [allItems, product_id]);

  const handleAddToCart = (item) => {
    addToCart(item);
  };

  const handleAddToWishlist = (item) => {
    addToWishlist(item);
  };

  return (
    <div>
      <div className="bg-purple-600 text-white text-center h-72 flex flex-col py-4">
        <h1 className="text-3xl">Product Details</h1>
        <p>Here you can find all the information about the selected product.</p>
      </div>
      <div className="card card-side bg-base-100 shadow-xl w-11/12 max-w-3xl mx-auto -mt-36 mb-6">
        <figure className="w-1/3">
          {item.product_image && (
            <img
              src={item.product_image}
              alt={item.product_title}
              className="object-contain w-full h-full"
            />
          )}
        </figure>
        <div className="card-body w-2/3">
          <h2 className="card-title">{item.product_title}</h2>
          <p>
            <strong>Price:</strong> ${item.price}
          </p>
          <p>
            <strong>Description:</strong> {item.description}
          </p>
          <p>
            <strong>Specification:</strong>{" "}
            {item.Specification ? item.Specification.join(", ") : "N/A"}
          </p>
          <p>
            <strong>Rating:</strong> {item.rating} ⭐
          </p>
          <div className="card-actions justify-end">
            <button
              onClick={() => handleAddToCart(item)}
              className="btn btn-primary"
            >
              Add to Cart <FaShoppingCart></FaShoppingCart>
            </button>
            <button
              onClick={() => handleAddToWishlist(item)}
              className="btn btn-secondary ml-2"
            >
              <FaRegHeart></FaRegHeart> Wishlist
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center mb-12 gap-3">
        <button className="btn btn-outline" onClick={() => navigate("/")}>
          Back to Home
        </button>
        <button className="btn btn-outline " onClick={() => navigate("/dashboard")}>
          Go to Cart <FaShoppingCart></FaShoppingCart>
        </button>
      </div>
    </div>
  );
};

export default CardDetails;
