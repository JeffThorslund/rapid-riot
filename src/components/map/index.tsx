import React from "react";
import { ViewState } from "react-map-gl";
import { Festival } from "../../types";
import { CustomMapWrapper } from "./CustomMapWrapper";
import { Marker } from "./Marker";
import { UseSelectionManagement } from "../_utils/useSelectionManagement";
import { getColor } from "../cards/FestivalCard";

type Props = {
  festivals: Festival[];
  viewState: ViewState;
  setViewState: React.Dispatch<React.SetStateAction<ViewState>>;
  selectionManagement: UseSelectionManagement;
};

export const MapElement = (props: Props) => {
  return (
    <CustomMapWrapper
      {...props.viewState}
      onMove={(evt) => props.setViewState(evt.viewState)}
    >
      {props.festivals.map((festival, index) => {
        const isMarkerHovered = props.selectionManagement.hover.isActive(index);
        const isMarkerSelected =
          props.selectionManagement.select.isActive(index);

        return (
          <Marker
            key={festival.title}
            latitude={festival.location.coordinates.lat}
            longitude={festival.location.coordinates.lng}
            onMouseEnter={() => props.selectionManagement.hover.set(index)}
            onMouseLeave={() => props.selectionManagement.hover.reset()}
            onClick={() => props.selectionManagement.select.set(index)}
            size={isMarkerHovered ? "50px" : "40px"}
            color={getColor("#333333", isMarkerHovered, isMarkerSelected)}
          />
        );
      })}
    </CustomMapWrapper>
  );
};
