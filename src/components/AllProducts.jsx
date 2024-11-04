import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from './Card';

const AllProducts = () => {
    const allProducts = useLoaderData()
    return (
        <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {allProducts.map((item) => (
            <Card key={item.product_id} item={item} />
          ))}
        </div>
       
      </div>
    );
};

export default AllProducts;