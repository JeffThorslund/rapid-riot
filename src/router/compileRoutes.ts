import { RouteObject } from "react-router-dom";

export const compileRoutes = (
  routes: RouteObject[],
  developmentRoutes: RouteObject[]
) => {
  if (process.env.NODE_ENV === "development") {
    return routes.concat(developmentRoutes);
  }

  return routes;
};
