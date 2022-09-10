import React from "react";
import { Marker, ViewState } from "react-map-gl";
import { Festival, HoveredMarkerState } from "../../types";
import { CustomMapWrapper } from "./CustomMapWrapper";

type Props = {
  festivals: Festival[];
  viewState: ViewState;
  setViewState: React.Dispatch<React.SetStateAction<ViewState>>;
  hoveredMarker: HoveredMarkerState;
};

export const MapElement: React.FC<Props> = (props) => {
  return (
    <CustomMapWrapper
      {...props.viewState}
      onMove={(evt) => props.setViewState(evt.viewState)}
    >
      {props.festivals.map((fest) => {
        const color = props.hoveredMarker === fest.title ? "pink" : "blue";

        console.log(color);

        return (
          <Marker
            style={{
              backgroundColor:
                props.hoveredMarker === fest.title ? "pink" : "black",
            }}
            longitude={fest.coordinates.lng}
            latitude={fest.coordinates.lat}
            anchor="center"
            key={fest.title}
          />
        );
      })}
    </CustomMapWrapper>
  );
};
