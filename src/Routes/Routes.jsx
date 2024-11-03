import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      errorElement :<ErrorPage></ErrorPage>,
    },
  ]);
  export default router;