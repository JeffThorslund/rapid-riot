import React from "react";
import { Box } from "grommet";
import { Festival } from "../../types";

interface Props {
  festivals: Festival[];
}

export const List = (props: Props) => {
  return (
    <Box>
      {props.festivals.map((fest) => {
        return <div key={fest.title}>{fest.title}</div>;
      })}
    </Box>
  );
};
