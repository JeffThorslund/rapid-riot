import { RouteObject } from "react-router-dom";
import { FestivalInterface } from "../components/FestivalInterface";
import React from "react";
import { Admin } from "../components/admin";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <FestivalInterface />,
  },
];

export const developmentRoutes: RouteObject[] = [
  {
    path: "/admin",
    element: <Admin />,
  },
];
