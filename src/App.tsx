import React from "react";
import { PageHeader } from "./components/PageHeader";
import { AppWrapper } from "./components/AppWrapper";
import { Router } from "./router";

const App = () => {
  return (
    <AppWrapper>
      <PageHeader />
      <Router />
    </AppWrapper>
  );
};

export default App;
