import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <div className="flex items-center justify-center h-screen bg-base-200">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-error animate-pulse">404</h1>
          <h2 className="text-3xl mt-4 font-extrabold">Oops! Page not found.</h2>
          <Link to="/" className="text-2xl btn btn-outline btn-error mt-4 font-extrabold ">
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
