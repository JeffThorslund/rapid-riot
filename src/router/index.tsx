import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { routes, developmentRoutes } from "./routes";
import { RouterProvider } from "react-router";
import { compileRoutes } from "./compileRoutes";

export const Router = () => {
  const compiledRoutes = compileRoutes(routes, developmentRoutes);

  const router = createBrowserRouter(compiledRoutes);

  return <RouterProvider router={router} />;
};
