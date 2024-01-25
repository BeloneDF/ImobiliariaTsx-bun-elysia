import { createBrowserRouter, Navigate } from "react-router-dom";

import { HomePage } from "../pages/home/home.index";
import Header from "./../components/header/header.main";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <HomePage />
      </>
    ),
  },
  {
    path: "*",
    element: <Navigate to="/notfound" />,
  },
  {
    path: "/notfound",
    element: <h1>404</h1>,
  },
]);

export default router;
