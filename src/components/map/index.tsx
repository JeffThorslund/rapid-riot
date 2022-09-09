import React from "react";
import Map, { Marker } from "react-map-gl";
import { Festival } from "../../types";

type Props = {
  festivals: Festival[];
  viewState: ViewState;
  setViewState: (viewState: ViewState) => void;
};

interface ViewState {
  longitude: number;
  latitude: number;
  zoom: number;
}

export const MapGL = (props: Props) => {
  return (
    <Map
      {...props.viewState}
      onMove={(evt) => props.setViewState(evt.viewState)}
      mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    >
      {props.festivals.map((fest) => {
        return (
          <Marker
            longitude={fest.coordinates.lng}
            latitude={fest.coordinates.lat}
            anchor="center"
            key={fest.title}
          />
        );
      })}
    </Map>
  );
};
