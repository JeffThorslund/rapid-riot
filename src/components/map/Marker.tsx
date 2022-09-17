import { Marker as ReactMapGlMarker } from "react-map-gl";
import { FaMapMarkerAlt } from "react-icons/fa";
import React from "react";

export interface MarkerProps {
  longitude: number;
  latitude: number;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClick: () => void;
  size: string;
  color: string;
}

export const Marker = (props: MarkerProps) => {
  return (
    <ReactMapGlMarker
      longitude={props.longitude}
      latitude={props.latitude}
      anchor="bottom"
    >
      <FaMapMarkerAlt
        onMouseEnter={props.onMouseEnter}
        onMouseLeave={props.onMouseLeave}
        onClick={props.onClick}
        size={props.size}
        cursor={"pointer"}
        color={props.color}
      />
    </ReactMapGlMarker>
  );
};
