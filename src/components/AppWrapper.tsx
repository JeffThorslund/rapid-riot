import { Grommet } from "grommet";
import { theme } from "../grommetTheme";
import { MapProvider } from "react-map-gl";
import React from "react";

interface Props {
  children: React.ReactNode;
}

export const AppWrapper = (props: Props) => {
  return (
    <Grommet theme={theme}>
      <MapProvider>{props.children}</MapProvider>
    </Grommet>
  );
};
