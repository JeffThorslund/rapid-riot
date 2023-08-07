import React, { useContext, useState } from "react";
import { Box, ResponsiveContext } from "grommet";
import { Resizable } from "re-resizable";
import { useMap } from "react-map-gl";

interface ResponsiveContainerProps {
  map: React.ReactNode;
  cards: React.ReactNode;
}

export const ResponsiveContainer = (props: ResponsiveContainerProps) => {
  const size = useContext(ResponsiveContext);
  const mapRef = useMap();

  return size === "small" ? <SmallContainer
    map={props.map}
    cards={props.cards}
  /> : <LargeContainer
    map={props.map}
    cards={props.cards}
    resizeMapToParent={mapRef.default?.resize}
  />

};

const LargeContainer = (props: ResponsiveContainerProps & { resizeMapToParent: (() => void) | undefined }) => {
  const [mapWidth, setMapWidth] = useState<number>(600);

  return <Box direction={"row"} height={"100%"}>
    <Resizable
      size={{
        width: mapWidth,
        height: "auto",
      }}
      onResizeStop={(e, dir, ref, delta) => {
        setMapWidth((prevWidth) => prevWidth + delta.width);
        props.resizeMapToParent && props.resizeMapToParent();
      }}
      enable={{
        ...defaultFalseDirections,
        right: true,
      }}
    >
      {props.map}
    </Resizable>
    <Box width={"100%"} height={"auto"}>
      {props.cards}
    </Box>
  </Box>
}

const defaultFalseDirections = {
  top: false,
  right: false,
  bottom: false,
  left: false,
  topRight: false,
  bottomRight: false,
  bottomLeft: false,
  topLeft: false,
};

const SmallContainer = (props: ResponsiveContainerProps) => {
  return <Box direction={"column"} height={"100%"}>
    <Box width={"100%"} height={"60%"}>
      {props.map}
    </Box>
    <Box width={"100%"} height={"40%"}>
      {props.cards}
    </Box>
  </Box>
}
