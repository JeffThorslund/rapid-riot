import React from "react";
import { Grommet, Box } from "grommet";
import { theme } from "./grommetTheme";
import { PageHeader } from "./PageHeader";
import { Map } from "./components/map";
import { List } from "./components/list";

const App = () => {
  return (
    <Grommet theme={theme}>
      <PageHeader />
      <Box direction="row">
        <Box width={"50%"}>
          <Map />
        </Box>

        <Box width={"50%"}>
          <List />
        </Box>
      </Box>
    </Grommet>
  );
};

export default App;
