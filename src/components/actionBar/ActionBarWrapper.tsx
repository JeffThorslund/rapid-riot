import React from "react";
import { Position } from "../../types";
import { Box } from "grommet";

export const ActionBarWrapper = (props: {
  children: React.ReactNode;
  positionPlacement: Partial<Position>;
  isHidden: boolean;
}) => {
  return (
    <Box
      background={"#444444"}
      round={"large"}
      elevation={"medium"}
      style={{
        position: "absolute",
        zIndex: Number.MAX_SAFE_INTEGER,
        ...props.positionPlacement,
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
