import React from "react";
import { Grommet } from "grommet";
import { theme } from "./grommetTheme";
import { PageHeader } from "./PageHeader";
import { Map } from "./components/map";

const App = () => {
  return (
    <Grommet theme={theme}>
      <PageHeader />
      <Map />
    </Grommet>
  );
};

export default App;
