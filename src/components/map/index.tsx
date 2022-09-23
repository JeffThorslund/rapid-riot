import React from "react";
import { ViewState } from "react-map-gl";
import { RefFestival } from "../../types";
import { CustomMapWrapper } from "./CustomMapWrapper";
import { Marker } from "./Marker";
import { UseSelectionManagementMethods } from "../interface/_utils/useSelectionManagement";
import { getColor } from "../cards/_utils/getColor";
import { getFestivalIdentifier } from "../interface/_utils/getFestivalIdentifier";

type Props = {
  festivals: RefFestival[];
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
        const { hover, select } = props.selectionManagement;

        const festivalIdentifier = getFestivalIdentifier(festival);

        const isMarkerHovered = hover.isActive(festivalIdentifier);
        const isMarkerSelected = select.isActive(festivalIdentifier);

        return (
          <Marker
            key={festival.id}
            latitude={festival.location.coordinates.lat}
            longitude={festival.location.coordinates.lng}
            onMouseEnter={() => hover.set(festivalIdentifier)}
            onMouseLeave={() => hover.reset()}
            onClick={() => {
              select.set(festivalIdentifier);
              if (festival.ref.current) festival.ref.current.scrollIntoView();
            }}
            size={isMarkerHovered ? "50px" : "40px"}
            color={getColor(
              "#333333",
              isMarkerHovered,
              isMarkerSelected,
              festival.approved
            )}
          />
        );
      })}
    </CustomMapWrapper>
  );
};
