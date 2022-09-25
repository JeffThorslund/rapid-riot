import { Marker as ReactMapGlMarker } from "react-map-gl";
import { FaMapMarkerAlt } from "react-icons/fa";
import React from "react";
import { Box } from "grommet";
import Color from "color";
import { brand } from "../_utils/colors";

export interface MarkerProps {
  longitude: number;
  latitude: number;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClick: () => void;
  size: string;
  color: string;
  header: React.ReactNode;
  zIndex: number | string;
}

export const Marker = (props: MarkerProps) => {
  return (
    <ReactMapGlMarker
      longitude={props.longitude}
      latitude={props.latitude}
      anchor="bottom"
      style={{ zIndex: props.zIndex }}
    >
      <Box direction={"column"} align={"center"}>
        {props.header && (
          <Box
            background={Color(brand).lighten(0.7).hex()}
            elevation={"xsmall"}
            round={"xsmall"}
            pad={"xsmall"}
            margin={"xxsmall"}
          >
            {props.header}
          </Box>
        )}
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
