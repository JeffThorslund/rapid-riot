import React from "react";
import { PageHeader } from "./components/PageHeader";
import { AppWrapper } from "./components/AppWrapper";
import { Router } from "./router";
import { FestivalInterface } from "./components/FestivalInterface";
import { Admin } from "./components/admin";

const App = () => {
  return (
    <AppWrapper>
      <PageHeader />
      <Router
        routes={[
          {
            path: "/",
            element: <FestivalInterface />,
          },
        ]}
        developmentRoutes={[
          {
            path: "/admin",
            element: <Admin />,
          },
        ]}
      />
    </AppWrapper>
  );
};

export default App;
