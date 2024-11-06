import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Card from "./Card";

const AllProducts = () => {
  const allProducts = useLoaderData();
  const [items, setItems] = useState(allProducts);

  useEffect(() => {
    document.title = "All Products - Shop Now";
  }, []);

  const handleSort = (sortBy) => {
    const sorted = [...items];

    if (sortBy === "price") {
      sorted.sort((a, b) => b.price - a.price);
    }

    setItems(sorted);
  };

  return (
    <div>
      <div className="flex justify-between container mx-auto items-center my-12">
        <div className="text-2xl">Sort Items</div>
        <div>
          <button onClick={() => handleSort("price")} className="btn">
            Sort By Price
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <Card key={item.product_id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
