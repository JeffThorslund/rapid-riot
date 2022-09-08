import React from "react";
import Map, { Marker } from "react-map-gl";

export const MapGL = () => {
  console.log(process.env);
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
      <Marker longitude={-75} latitude={45} anchor="center" />
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
