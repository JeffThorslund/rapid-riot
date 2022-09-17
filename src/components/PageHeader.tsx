import { Box, Header, Text } from "grommet";
import React from "react";

export function PageHeader() {
  return (
    <Header background={"brand"} pad="small">
      <Box>
        <Text weight="bolder" size={"large"}>
          Rapid Riot
        </Text>
      </Box>
      <Box>Whitewater Festival Database</Box>
    </Header>
  );
}
