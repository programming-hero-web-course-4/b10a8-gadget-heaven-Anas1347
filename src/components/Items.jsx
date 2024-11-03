import { Link } from "react-router-dom";

const Items = ({ items }) => {
  return (
    <div className="flex">
      <div
        role="tablist"
        className="tabs tabs-boxed flex flex-col gap-8 bg-gray-400 font-bold"
      >
        <Link
           to="/"
          className="tab rounded-lg bg-gray-200 hover:bg-gray-300 transition w-full text-left capitalize"
        >
          All Products
        </Link>

        {items.map((item) => (
          <Link
            key={item.product_id}
            role="tab"
            className="tab rounded-lg bg-gray-200 hover:bg-gray-300 transition w-full text-left capitalize"
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
