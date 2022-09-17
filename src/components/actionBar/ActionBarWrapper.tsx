import React from "react";
import { Position } from "../../types";
import { Box } from "grommet";
import { getCardStyle } from "../cards/_utils/getCardStyle";

export const ActionBarWrapper = (props: {
  children: React.ReactNode;
  positionPlacement: Partial<Position>;
  isHidden: boolean;
}) => {
  return (
    <Box
      background={"#444444"}
      round={"large"}
      style={{
        position: "absolute",
        zIndex: Number.MAX_SAFE_INTEGER,
        ...props.positionPlacement,
        ...getCardStyle(false),
        visibility: props.isHidden ? "hidden" : "visible",
        opacity: props.isHidden ? 0 : 1,
        transition: props.isHidden
          ? "visibility 0s 0.1s, opacity 0.1s linear"
          : "opacity 0.1s linear",
      }}
    >
      {props.children}
    </Box>
  );
};
