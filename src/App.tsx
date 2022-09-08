import React from "react";
import { Grommet, Box } from "grommet";
import { theme } from "./grommetTheme";
import { PageHeader } from "./components/PageHeader";
import { MapGL } from "./components/map";
import { List } from "./components/list";

const App = () => {
  return (
    <Grommet theme={theme}>
      <PageHeader />

      <Box direction="row" height={"500px"}>
        <Box width={"50%"}>
          <MapGL />
        </Box>
        <Box width={"50%"}>
          <List />
        </Box>
      </Box>
    </Grommet>
  );
};

export default App;
