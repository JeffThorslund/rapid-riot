import React from "react";
import { PageHeader } from "./components/PageHeader";
import { AppWrapper } from "./components/AppWrapper";
import { FestivalInterface } from "./components/interface";

const App = () => {
  return (
    <AppWrapper>
      <PageHeader />
      <FestivalInterface />
    </AppWrapper>
  );
};

export default App;
