import { useState, useEffect } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Card from "./Card";

const ItemCards = () => {
  const navigate = useNavigate();
  const { category } = useParams();
  const allData = useLoaderData();
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (category) {
      const filtered = allData.filter((item) => item.category === category);
      setFilteredData(filtered);
    } else {
      setFilteredData(allData.slice(0, 9));
    }
  }, [allData, category]);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredData.length > 0 ? (
          filteredData.map((item) => <Card key={item.product_id} item={item} />)
        ) : (
          <p className="text-center">No products found in this category.</p>
        )}
      </div>
      <div className="flex justify-center mt-4">
        <button
          onClick={() => navigate("/all-products")}
          className="btn btn-success"
        >
          View All
        </button>
      </div>
    </div>
  );
};

export default ItemCards;
