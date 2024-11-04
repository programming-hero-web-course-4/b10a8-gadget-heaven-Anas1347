import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const CardDetails = () => {
  const { product_id } = useParams();
  const allItems = useLoaderData();
  const [item, setItem] = useState({});

  useEffect(() => {
    const singleData = allItems.find((item) => item.product_id == product_id);
    setItem(singleData);
  }, [allItems, product_id]);

  const {
    product_title,
    product_image,
    price,
    description,
    Specification,
    rating,
  } = item;

  return (
    <div >
      <div className="bg-purple-600 text-white text-center h-72 flex flex-col py-4">
        <h1 className="text-3xl">Product Details</h1>
        <p>Here you can find all the information about the selected product.</p>
      </div>
      <div className="card card-side bg-base-100 shadow-xl w-11/12 max-w-3xl mx-auto -mt-36 mb-20">
        <figure className="w-1/3">
          {product_image && (
            <img
              src={product_image}
              alt={product_title}
              className="object-contain w-full h-full "
            />
          )}
        </figure>
        <div className="card-body w-2/3">
          <h2 className="card-title">{product_title || "Loading..."}</h2>
          <p>
            <strong>Price:</strong> ${price}
          </p>
          <p>
            <strong>Description:</strong> {description}
          </p>
          <p>
            <strong>Specification:</strong>{" "}
            {Specification ? Specification.join(", ") : "N/A"}
          </p>
          <p>
            <strong>Rating:</strong> {rating} ⭐
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Add to Cart</button>
            <button className="btn btn-secondary ml-2">❤️ Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
