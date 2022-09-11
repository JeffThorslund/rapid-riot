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
      {props.festivals.map((fest) => {
        return (
          <Marker
            longitude={fest.coordinates.lng}
            latitude={fest.coordinates.lat}
            anchor="center"
            key={fest.title}
          >
            <Location
              size={
                props.hoverStateMethods.isHovered(fest.id) ? "30px" : "20px"
              }
            />
          </Marker>
        );
      })}
    </CustomMapWrapper>
  );
};
