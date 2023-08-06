import ReactMapGL, { MapProps } from "react-map-gl";
import React from "react";
import { disableWorkerLoader } from "../_utils/disableWorkerLoader";

type MapPropsWithFogAndTerrainOverride = MapProps & {
  fog?: undefined;
  terrain?: undefined;
};

export const CustomMapWrapper: React.FC<MapPropsWithFogAndTerrainOverride> = ({
  children,
  ...mapProps
}) => {
  disableWorkerLoader();

  return (
    <ReactMapGL
      {...mapProps}
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
      mapStyle="mapbox://styles/mapbox/outdoors-v11"
    >
      {children}
    </ReactMapGL>
  );
};
