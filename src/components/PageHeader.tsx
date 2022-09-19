import { Box, Header, Text } from "grommet";
import React from "react";
import { useSmallScreenDetection } from "./interface/_utils/useSmallScreenDetection";

export function PageHeader() {
  const isSmall = useSmallScreenDetection();

  if (isSmall) return null;

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
