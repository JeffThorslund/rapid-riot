import React from "react";
import { Position } from "../../types";
import { Box } from "grommet";
import { getCardStyle } from "../cards/_utils/getCardStyle";

export const ActionBarWrapper = (props: {
  children: React.ReactNode;
  positionPlacement: Partial<Position>;
}) => {
  return (
    <Box
      background={"#444444"}
      round={"medium"}
      style={{
        position: "absolute",
        zIndex: Number.MAX_SAFE_INTEGER,
        ...props.positionPlacement,
        ...getCardStyle(false),
      }}
    >
      {props.children}
    </Box>
  );
};
