import { createBrowserRouter, Navigate } from "react-router-dom";

import { HomePage } from "../pages/home/home.index";
import Header from "./../components/header/header.main";
import { PropertiesPage } from "../pages/properties/properties.index";
import { PropertiesInfoPage } from "../pages/properties-info/properties-info.index";

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
    path: "/properties",
    element: (
      <>
        <Header />
        <PropertiesPage />
      </>
    ),
  },
  {
    path: `/properties/:id`,
    element: (
      <>
        <Header />
        <PropertiesInfoPage />
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
