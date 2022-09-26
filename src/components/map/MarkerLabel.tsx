import React from "react";
import { Box } from "grommet";
import Color from "color";
import { brand } from "../_utils/colors";

interface Props {
  label: string;
}

export function MarkerLabel(props: Props) {
  return (
    <Box
      background={Color(brand).lighten(0.7).hex()}
      elevation={"xsmall"}
      round={"xsmall"}
      pad={"xsmall"}
      margin={"xxsmall"}
    >
      {props.label}
    </Box>
  );
}
