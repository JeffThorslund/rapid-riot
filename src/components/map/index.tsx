import React from "react";
import { Marker, ViewState } from "react-map-gl";
import { Festival, HoveredMarkerState } from "../../types";
import { CustomMapWrapper } from "./CustomMapWrapper";
import { CircleAlert } from "grommet-icons";
import { isFestivalHighlighted } from "../_utils/isFestivalHighlighted";

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
        return (
          <Marker
            longitude={fest.coordinates.lng}
            latitude={fest.coordinates.lat}
            anchor="center"
            key={fest.title}
          >
            <CircleAlert
              color={
                isFestivalHighlighted(fest.id, props.hoveredMarker)
                  ? "red"
                  : "black"
              }
              size={"medium"}
            />
          </Marker>
        );
      })}
    </CustomMapWrapper>
  );
};
