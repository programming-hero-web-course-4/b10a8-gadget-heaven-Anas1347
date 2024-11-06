import { NavLink } from "react-router-dom";

const Items = ({ items }) => {
  return (
    <div>
      <div
        role="tablist"
        className="tabs tabs-boxed gap-8 bg-gray-200 font-bold overflow-x-auto sm:flex-col sm:overflow-x-hidden sm:overflow-y-hidden sm:w-full sm:px-2"
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            `tab rounded-lg transition w-full capitalize ${
              isActive ? "tab-active" : ""
            }`
          }
        >
          All
        </NavLink>

        {items.map((item) => (
          <NavLink
            key={item.product_id}
            role="tab"
            to={`/categories/${item.category}`}
            className={({ isActive }) =>
              `tab capitalize ${
                isActive ? "tab-active" : " "
              }`
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
