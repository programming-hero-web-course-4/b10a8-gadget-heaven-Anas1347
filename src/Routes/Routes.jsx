import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import Dashboard from "../components/Dashboard";
import Statistics from "../components/Statistics";
import Layout from "../components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, 
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/", 
        element: <Home />,
      },
      {
        path: "dashboard", 
        element: <Dashboard />,
      },
      {
        path: "statistics", 
        element: <Statistics />,
      },
    ],
  },
]);

export default router;
