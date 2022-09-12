import { Marker as ReactMapGlMarker } from "react-map-gl";
import { FaMapMarkerAlt } from "react-icons/fa";
import React from "react";

export interface MarkerProps {
  longitude: number;
  latitude: number;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  size: string;
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
        size={props.size}
        cursor={"pointer"}
      />
    </ReactMapGlMarker>
  );
};
