import React from "react";
import Items from "./Items";
import { useLoaderData } from "react-router-dom";

const ItemsLayout = () => {
  const category = useLoaderData();
  return (
    <div className="">
      <div>
        <Items category={category} />
      </div>
    </div>
  );
};

export default ItemsLayout;
