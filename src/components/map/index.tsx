import React from "react";
import { Marker, ViewState } from "react-map-gl";
import { Festival } from "../../types";
import { CustomMapWrapper } from "./CustomMapWrapper";
import { CircleAlert } from "grommet-icons";
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
            <CircleAlert
              color={
                props.hoverStateMethods.isHovered(fest.id) ? "red" : "black"
              }
              size={"medium"}
            />
          </Marker>
        );
      })}
    </CustomMapWrapper>
  );
};
