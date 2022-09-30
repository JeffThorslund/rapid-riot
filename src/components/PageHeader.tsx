import { Box, Header, Text, Nav, Anchor } from "grommet";
import React from "react";
import { useSmallScreenDetection } from "./interface/_utils/useSmallScreenDetection";
import Color from "color";
import { brand, light } from "./_utils/colors";

export function PageHeader() {
  const isSmall = useSmallScreenDetection();

  if (isSmall) return null;

  return (
    <Header background={Color(brand).hex()} pad="xsmall">
      <Box direction={"row"}>
        <Text weight="bolder" size={"medium"} color={light}>
          Rapid Riot
        </Text>
        <Box
          margin={{ horizontal: "small" }}
          border={{
            side: "left",
            size: "small",
            color: light,
          }}
        />
        <Text
          weight="normal"
          size={"medium"}
          color={Color(light).lighten(0).hex()}
        >
          Explore Whitewater Festivals
        </Text>
      </Box>
      <Nav direction="row">
        <Anchor
          target="_blank"
          rel="noopener noreferrer"
          label="Who Built This?"
          href="https://www.jeffreythorslund.com/"
          color={light}
        />
      </Nav>
    </Header>
  );
}
