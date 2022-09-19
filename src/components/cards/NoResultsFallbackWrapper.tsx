import React from "react";
import { Box } from "grommet";
import { NoResultsIndicator } from "./NoResultsIndicator";

interface NoResultsWrapperProps {
  numberOfItems: number;
  children: React.ReactNode;
}

export const NoResultsFallbackWrapper = (props: NoResultsWrapperProps) => {
  return (
    <Box>
      {props.numberOfItems === 0 ? <NoResultsIndicator /> : props.children}
    </Box>
  );
};
