import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";
import React from "react";
import features from "./features.json";

export const Map = () => (
  <ComposableMap
    projection={"geoAlbers"}
    projectionConfig={{
      scale: 500,
    }}
  >
    <ZoomableGroup>
      <Geographies geography={features}>
        {({ geographies }) =>
          geographies.map((geo) => {
            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill={"#FFFFFF"}
                stroke={"#000000"}
              />
            );
          })
        }
      </Geographies>
    </ZoomableGroup>
  </ComposableMap>
);
