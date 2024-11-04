import bannerImage from "../assets/banner.jpg";
const Banner = () => {
    return (
        <div>
             <div className="flex flex-col items-center text-white bg-purple-400 p-4 h-[400px]">
        <h1 className="text-4xl font-bold mb-2">
          Upgrade Your Tech Accessories
        </h1>
        <h2 className="text-2xl mb-4">Gadget Heaven Accessories</h2>
        <p className="mb-4 text-center">
          Discover the latest and greatest in tech accessories. From chargers to
          cases, we have everything you need to enhance your tech experience.
        </p>
        <button className="btn btn-primary mb-4">Shop Now</button>
      </div>

      <div className="flex justify-center mb-4 -mt-32 ">
        <div className="border-8 rounded-lg ">
          <img
            src={bannerImage}
            alt="Tech Accessories"
            className="w-[1000px] h-[400px] object-cover rounded-lg "
          />
        </div>
      </div>
        </div>
    );
};

export default Banner;