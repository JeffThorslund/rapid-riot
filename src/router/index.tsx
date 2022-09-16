import React from "react";
import { createBrowserRouter, RouteObject } from "react-router-dom";
import { RouterProvider } from "react-router";
import { compileRoutes } from "./compileRoutes";

interface Props {
  routes: RouteObject[];
  developmentRoutes: RouteObject[];
}

export const Router = (props: Props) => {
  const compiledRoutes = compileRoutes(props.routes, props.developmentRoutes);

  const router = createBrowserRouter(compiledRoutes);

  return <RouterProvider router={router} />;
};
