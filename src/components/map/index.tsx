import React from "react";
import { Marker, ViewState } from "react-map-gl";
import { Festival } from "../../types";
import { CustomMapWrapper } from "./CustomMapWrapper";
import { Location } from "grommet-icons";
import { HoverStateMethods } from "../_utils/useHoverState";

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
        return (
          <Marker
            longitude={festival.coordinates.lng}
            latitude={festival.coordinates.lat}
            anchor="center"
            key={festival.title}
          >
            <Location
              onMouseEnter={() => props.hoverStateMethods.set(festival.id)}
              onMouseLeave={() => props.hoverStateMethods.reset()}
              size={
                props.hoverStateMethods.isHovered(festival.id) ? "30px" : "20px"
              }
            />
          </Marker>
        );
      })}
    </CustomMapWrapper>
  );
};
