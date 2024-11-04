const Card = ({ item }) => {
    const { product_title, product_image, price } = item;
  
    return (
      <div className="card bg-base-100 w-72 shadow-lg rounded-lg transition-transform transform hover:scale-105"> {/* Added hover effect */}
        <figure className="p-4">
          <img
            src={product_image}
            alt={product_title}
            className="h-40 w-full object-contain rounded-md" 
          />
        </figure>
        <div className="card-body p-4"> 
          <h2 className="card-title text-lg font-semibold">{product_title}</h2> 
          <p className="text-md font-semibold mb-4">${price}</p>
          <div className="card-actions justify-start">
            <button className="btn btn-primary hover:bg-blue-700">View Details</button> {/* Added hover effect for button */}
          </div>
        </div>
      </div>
    );
  };
  
  export default Card;
  