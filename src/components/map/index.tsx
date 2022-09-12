import React from "react";
import { Marker, ViewState } from "react-map-gl";
import { Festival } from "../../types";
import { CustomMapWrapper } from "./CustomMapWrapper";
import { HoverStateMethods } from "../_utils/useHoverState";
import { FaMapMarkerAlt } from "react-icons/fa";

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
            longitude={festival.location.coordinates.lng}
            latitude={festival.location.coordinates.lat}
            anchor="bottom"
            key={festival.title}
          >
            <FaMapMarkerAlt
              onMouseEnter={() => props.hoverStateMethods.set(festival.id)}
              onMouseLeave={() => props.hoverStateMethods.reset()}
              size={
                props.hoverStateMethods.isHovered(festival.id) ? "50px" : "40px"
              }
              cursor={"pointer"}
            />
          </Marker>
        );
      })}
    </CustomMapWrapper>
  );
};
