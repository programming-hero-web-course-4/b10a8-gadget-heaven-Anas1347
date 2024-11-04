import { NavLink } from "react-router-dom";

const Items = ({ items }) => {
  return (
    <div className=" ">
      <div
        role="tablist"
        className="tabs tabs-boxed  gap-8 bg-gray-200 font-bold"
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            `tab rounded-lg transition w-full  capitalize ${
              isActive ? "tab-active " : ""
            }`
          }
        >
          All Products
        </NavLink>

        {items.map((item) => (
          <NavLink
            key={item.product_id}
            role="tab"
            to={`/categories/${item.category}`}
            className={({ isActive }) =>
              `tab capitalize ${isActive ? "tab-active " : " "}`
            }
          >
            {item.category}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Items;
