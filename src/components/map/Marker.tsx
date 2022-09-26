import { Marker as ReactMapGlMarker } from "react-map-gl";
import { FaMapMarkerAlt } from "react-icons/fa";
import React from "react";
import { Box } from "grommet";
import { Coordinate } from "../../types";
import { MarkerLabel } from "./MarkerLabel";

export interface MarkerProps {
  coordinates: Coordinate;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClick: () => void;
  size: string;
  color: string;
  label?: string;
  zIndex: number | string;
}

export const Marker = (props: MarkerProps) => {
  return (
    <ReactMapGlMarker
      longitude={props.coordinates.lng}
      latitude={props.coordinates.lat}
      anchor="bottom"
      style={{ zIndex: props.zIndex }}
    >
      <Box direction={"column"} align={"center"}>
        {props.label && <MarkerLabel label={props.label} />}
        <FaMapMarkerAlt
          onMouseEnter={props.onMouseEnter}
          onMouseLeave={props.onMouseLeave}
          onClick={props.onClick}
          size={props.size}
          cursor={"pointer"}
          color={props.color}
        />
      </Box>
    </ReactMapGlMarker>
  );
};
