import { Link } from "react-router-dom";

const Card = ({ item }) => {
  const { product_title, product_image, price, product_id } = item;

  return (
    <div className="container mx-auto card bg-base-100 w-[70%]  items-center shadow-lg rounded-lg transition-transform transform hover:scale-105 overflow-hidden ">
      <figure className="p-4">
        <img
          src={product_image}
          alt={product_title}
          className="h-48 w-full object-contain rounded-md"
        />
      </figure>
      <div className="card-body p-4 mt-8">
        <h2 className="card-title text-xl font-semibold line-clamp-2">{product_title}</h2>
        <p className="text-md font-semibold text-gray-800 mb-4">${price}</p>
        <div className="card-actions justify-start">
          <Link to={`/category/${product_id}`}>
            <button className="btn btn-primary hover:bg-blue-700 transition-colors duration-300">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
