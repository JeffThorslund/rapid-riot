import React, { useContext } from "react";
import { Box, ResponsiveContext } from "grommet";
import { Resizable } from "re-resizable";
import { useMap } from "react-map-gl";
import { useLocalStorage } from "@mantine/hooks";
import { FaGripLinesVertical } from "react-icons/fa";
import { dark } from "../_utils/colors";

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
  const [mapWidth, setMapWidth] = useLocalStorage({ key: 'map-width', defaultValue: 600 });

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
      handleComponent={{ right: <Handle /> }}
    >
      {props.map}
    </Resizable>
    <Box width={"100%"} height={"auto"}>
      {props.cards}
    </Box>
  </Box>
}

const Handle = () => <Box height="100%" justify="center" align="center">
  <FaGripLinesVertical size={24} color={dark} />
</Box>

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
