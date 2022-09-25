import React from "react";
import { ViewState } from "react-map-gl";
import { Festival } from "../../types";
import { CustomMapWrapper } from "./CustomMapWrapper";
import { Marker } from "./Marker";
import { UseSelectionManagementMethods } from "../interface/_utils/useSelectionManagement";
import { getColor } from "../cards/_utils/getColor";
import { getFestivalIdentifier } from "../interface/_utils/getFestivalIdentifier";
import Color from "color";
import { dark } from "../_utils/colors";
import { Box } from "grommet";

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
            header={isMarkerHovered && <Box>{festival.title}</Box>}
            color={getColor(
              Color(dark).hex(),
              isMarkerHovered,
              isMarkerSelected,
              festival.approved
            )}
            zIndex={isMarkerHovered ? Number.MAX_SAFE_INTEGER : "auto"}
          />
        );
      })}
    </CustomMapWrapper>
  );
};
