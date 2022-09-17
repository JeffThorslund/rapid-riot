import React from "react";
import { ViewState } from "react-map-gl";
import { Festival } from "../../types";
import { CustomMapWrapper } from "./CustomMapWrapper";
import { ActiveIndexStateMethods } from "../_utils/useActiveIndexState";
import { Marker } from "./Marker";
import { openLink } from "../_utils/openLink";

type Props = {
  festivals: Festival[];
  viewState: ViewState;
  setViewState: React.Dispatch<React.SetStateAction<ViewState>>;
  hoverStateMethods: ActiveIndexStateMethods;
};

export const MapElement = (props: Props) => {
  return (
    <CustomMapWrapper
      {...props.viewState}
      onMove={(evt) => props.setViewState(evt.viewState)}
    >
      {props.festivals.map((festival, index) => {
        const isMarkerHovered = props.hoverStateMethods.isHovered(index);

        return (
          <Marker
            key={festival.title}
            latitude={festival.location.coordinates.lat}
            longitude={festival.location.coordinates.lng}
            onMouseEnter={() => props.hoverStateMethods.set(index)}
            onMouseLeave={() => props.hoverStateMethods.reset()}
            onClick={() => openLink(festival.link)}
            size={isMarkerHovered ? "50px" : "40px"}
            color={isMarkerHovered ? "#3D138D" : "#333333"}
          />
        );
      })}
    </CustomMapWrapper>
  );
};
