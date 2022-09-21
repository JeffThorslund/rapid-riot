import { Box, Spinner } from "grommet";
import React from "react";

export const LoadingIndicator = () => {
  return (
    <Box
      justify={"center"}
      align={"center"}
      pad={"large"}
      style={{ overflow: "hidden" }}
    >
      <Spinner size={"medium"} />
    </Box>
  );
};
