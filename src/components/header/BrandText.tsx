import { Box, Text } from "grommet";
import Color from "color";
import { light } from "../_utils/colors";
import React from "react";

export const BrandText = () => (
  <Box direction={"row"}>
    <Text weight="bolder" size={"medium"} color={Color(light).hex()}>
      Rapid Riot
    </Text>
    <Box
      margin={{ horizontal: "small" }}
      border={{
        side: "left",
        size: "small",
        color: Color(light).hex(),
      }}
    />
    <Text weight="normal" size={"medium"} color={Color(light).hex()}>
      Explore Whitewater Festivals
    </Text>
  </Box>
);
