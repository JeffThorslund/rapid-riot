import React from "react";
import { Grommet } from "grommet";
import { theme } from "./grommetTheme";
import { PageHeader } from "./PageHeader";

const App = () => {
  return (
    <Grommet theme={theme}>
      <PageHeader />
    </Grommet>
  );
};

export default App;
