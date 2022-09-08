import React from "react";
import { Grommet, Box } from "grommet";
import { theme } from "./grommetTheme";
import { PageHeader } from "./components/PageHeader";
import { MapGL } from "./components/map";
import { List } from "./components/list";
import { getFestivals } from "./database";

const App = () => {
  const festivals = getFestivals();

  return (
    <Grommet theme={theme}>
      <PageHeader />
      <Box direction="row" height={"500px"}>
        <Box width={"50%"}>
          <MapGL festivals={festivals} />
        </Box>
        <Box width={"50%"}>
          <List festivals={festivals} />
        </Box>
      </Box>
    </Grommet>
  );
};

export default App;
