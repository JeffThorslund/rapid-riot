import { Box, Header, Text } from "grommet";
import React from "react";

export function PageHeader() {
  return (
    <Header background={"light-1"} pad="small">
      <Box>
        <Text weight={"bold"}>Rapid Riot</Text>
      </Box>
      <Box>Whitewater Festival Database</Box>
    </Header>
  );
}
