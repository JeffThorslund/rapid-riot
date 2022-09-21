import React from "react";
import { PageHeader } from "./components/PageHeader";
import { AppWrapper } from "./components/AppWrapper";
import { FestivalInterface } from "./components/interface";
import { Geotagging } from "./components/modal/geotagging";

const App = () => {
  return (
    <AppWrapper>
      <Geotagging />
      {/*<PageHeader />*/}
      {/*<FestivalInterface />*/}
    </AppWrapper>
  );
};

export default App;
