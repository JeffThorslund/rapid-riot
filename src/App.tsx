import React from "react";
import { PageHeader } from "./components/PageHeader";
import { AppWrapper } from "./AppWrapper";
import { FestivalInterface } from "./components/FestivalInterface";

const App = () => {
  return (
    <AppWrapper>
      <PageHeader />
      <FestivalInterface />
    </AppWrapper>
  );
};

export default App;
