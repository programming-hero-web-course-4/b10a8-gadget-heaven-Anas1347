import { Link } from "react-router-dom";

const Items = ({ items }) => {
  return (
    <div className="flex">
      <div
        role="tablist"
        className="tabs tabs-boxed flex flex-col items-center justify-center bg-white font-bold"
      >
        <Link
          to="/"
          className="tab mb-8  rounded-lg bg-gray-200 hover:bg-gray-300  transition w-full text-center capitalize"
        >
          All Products
        </Link>

        {items.map((item) => (
          <Link
            key={item.product_id}
            role="tab"
            className="tab mb-8  rounded-lg bg-gray-200 hover:bg-gray-300 transition w-full text-center capitalize"
            to={`/category/${item.category}`}
          >
            {item.category}
          </Link>
        ))}
      </div>

    
    </div>
  );
};

export default Items;
