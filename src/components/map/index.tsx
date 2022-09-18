import React from "react";
import { ViewState } from "react-map-gl";
import { Festival } from "../../types";
import { CustomMapWrapper } from "./CustomMapWrapper";
import { Marker } from "./Marker";
import { UseSelectionManagementMethods } from "../_utils/useSelectionManagement";
import { getColor } from "../cards/FestivalCard";

type Props = {
  festivals: Festival[];
  viewState: ViewState;
  setViewState: React.Dispatch<React.SetStateAction<ViewState>>;
  selectionManagement: UseSelectionManagementMethods;
};

export const MapElement = (props: Props) => {
  return (
    <CustomMapWrapper
      {...props.viewState}
      onMove={(evt) => props.setViewState(evt.viewState)}
    >
      {props.festivals.map((festival) => {
        const isMarkerHovered = props.selectionManagement.hover.isActive(
          festival.title
        );
        const isMarkerSelected = props.selectionManagement.select.isActive(
          festival.title
        );

        return (
          <Marker
            key={festival.title}
            latitude={festival.location.coordinates.lat}
            longitude={festival.location.coordinates.lng}
            onMouseEnter={() =>
              props.selectionManagement.hover.set(festival.title)
            }
            onMouseLeave={() => props.selectionManagement.hover.reset()}
            onClick={() => props.selectionManagement.select.set(festival.title)}
            size={isMarkerHovered ? "50px" : "40px"}
            color={getColor("#333333", isMarkerHovered, isMarkerSelected)}
          />
        );
      })}
    </CustomMapWrapper>
  );
};
