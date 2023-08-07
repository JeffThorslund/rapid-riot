import { Box } from "grommet";
import { MapProvider } from "react-map-gl";
import React from "react";

interface Props {
  children: React.ReactNode;
}

export const AppWrapper = (props: Props) => {
  return (
    <MapProvider>
      <Box height={"100vh"}>{props.children}</Box>
    </MapProvider>
  );
};
