import { Anchor, Box, Text } from "grommet";
import Color from "color";
import { light } from "../_utils/colors";
import React from "react";
import Link from "next/link";

export const BrandText = () => (
  <Box direction={"row"}>
    <Text weight="bolder" size={"medium"} color={Color(light).hex()}>
      Rapid Riot
    </Text>
    <VerticalDivider />
    <Link href={"/"}>
      <Text weight="normal" size={"medium"} color={Color(light).hex()}>
        Explore
      </Text>
    </Link>
    <VerticalDivider />
    <Link href={"/profile"}>
      <Text weight="normal" size={"medium"} color={Color(light).hex()}>
        Plan Route
      </Text>
    </Link>
  </Box>
);

const VerticalDivider = () => {
  return (
    <Box
      margin={{ horizontal: "small" }}
      border={{
        side: "left",
        size: "small",
        color: Color(light).hex(),
      }}
    />
  );
};
