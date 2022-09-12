import React from "react";
import { ViewState } from "react-map-gl";
import { Festival } from "../../types";
import { CustomMapWrapper } from "./CustomMapWrapper";
import { HoverStateMethods } from "../_utils/useHoverState";
import { Marker } from "./Marker";
import { openLink } from "../_utils/openLink";

type Props = {
  festivals: Festival[];
  viewState: ViewState;
  setViewState: React.Dispatch<React.SetStateAction<ViewState>>;
  hoverStateMethods: HoverStateMethods;
};

export const MapElement = (props: Props) => {
  return (
    <CustomMapWrapper
      {...props.viewState}
      onMove={(evt) => props.setViewState(evt.viewState)}
    >
      {props.festivals.map((festival) => {
        const isMarkerHovered = props.hoverStateMethods.isHovered(festival.id);

        return (
          <Marker
            key={festival.id}
            latitude={festival.location.coordinates.lat}
            longitude={festival.location.coordinates.lng}
            onMouseEnter={() => props.hoverStateMethods.set(festival.id)}
            onMouseLeave={() => props.hoverStateMethods.reset()}
            onClick={() => openLink(festival.link)}
            size={isMarkerHovered ? "50px" : "40px"}
          />
        );
      })}
    </CustomMapWrapper>
  );
};
