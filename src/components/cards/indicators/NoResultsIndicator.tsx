import { Box, Text } from "grommet";
import React from "react";

export function NoResultsIndicator() {
  return (
    <Box align={"center"} pad={"large"}>
      <Text size={"large"}>No Results</Text>
    </Box>
  );
}
