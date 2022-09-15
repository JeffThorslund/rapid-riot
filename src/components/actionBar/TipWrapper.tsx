import { Box } from "grommet";
import React from "react";

export const TipWrapper = (props: { text: string }) => {
  return (
    <Box pad={{ horizontal: "medium", top: "medium", bottom: "small" }}>
      {props.text}
    </Box>
  );
};
