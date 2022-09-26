import { Box, Header, Text } from "grommet";
import React from "react";
import { useSmallScreenDetection } from "./interface/_utils/useSmallScreenDetection";
import Color from "color";
import { brand } from "./_utils/colors";

export function PageHeader() {
  const isSmall = useSmallScreenDetection();

  if (isSmall) return null;

  return (
    <Header background={Color(brand).hex()} pad="xsmall">
      <Box>
        <Text weight="bolder" size={"large"}>
          Rapid Riot
        </Text>
      </Box>
      <Box>Whitewater Festival Database</Box>
    </Header>
  );
}
