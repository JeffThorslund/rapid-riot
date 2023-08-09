"use client";

import { Anchor, Header, Nav } from "grommet";
import React from "react";
import { useSmallScreenDetection } from "../interface/_utils/useSmallScreenDetection";
import Color from "color";
import { brand, light } from "../_utils/colors";
import { BrandText } from "./BrandText";

export const NavBar = () => {
  const isSmall = useSmallScreenDetection();

  if (isSmall) return null;

  return (
    <Header background={Color(brand).hex()} pad="xsmall">
      <BrandText />
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
};
