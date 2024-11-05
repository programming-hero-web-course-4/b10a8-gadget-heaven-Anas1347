import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import Dashboard from "../components/Dashboard";
import Statistics from "../components/Statistics";
import Layout from "../Pages/Layout";
import ItemCards from "../components/ItemCards";
import AllProducts from "../components/AllProducts";
import CardDetails from "../components/CardDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("../category.json"),
        children: [
          {
            path: "/",
            element: <ItemCards></ItemCards>,
            loader: () => fetch("../allData.json"),
          },
          {
            path: "/",
            element: <ItemCards></ItemCards>,
            loader: () => fetch("../allData.json"),
          },
          {
            path: "categories/:category",
            element: <ItemCards></ItemCards>,
            loader: () => fetch("../allData.json"),
          },
        ],
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "statistics",
        element: <Statistics />,
      },
      {
        path: "all-products",
        element: <AllProducts />,
        loader: () => fetch("../allData.json"),
      },
      {
        path: "/category/:product_id",
        element: <CardDetails />,
        loader: () => fetch("../allData.json"),
      },
    ],
  },
]);

export default router;
