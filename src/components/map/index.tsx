import React from "react";
import Map, { Marker } from "react-map-gl";
import { Festival } from "../../types";

interface Props {
  festivals: Festival[];
}

export const MapGL = (props: Props) => {
  return (
    <Map
      mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
      initialViewState={{
        longitude: -122.4,
        latitude: 37.8,
        zoom: 14,
      }}
      //style={{ width: 600, height: 400 }}
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

/**
 * const mapRef = useRef<MapRef>();
 *
 * const checkIfPositionInViewport = (lat, lng) => {
 *     const bounds = mapRef.current.getMap().getBounds();
 *     return (lat >= bounds._sw.lat && lat <= bounds._nw.lat && lng >= bounds._sw.lng && lng <= bounds._nw.lng);
 * }
 *
 * return <Map ref={mapRef} [..]/>
 */
