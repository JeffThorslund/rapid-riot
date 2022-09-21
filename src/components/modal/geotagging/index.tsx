import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import React, { useEffect } from "react";

export const Geotagging = () => {
  useEffect(() => {
    geocoder.addTo("#geocoder");

    return () => {
      const parentContainer = document.getElementById("geocoder");
      const geoChild = document.getElementsByClassName(
        "mapboxgl-ctrl-geocoder"
      );

      if (!parentContainer || !geoChild) return;
      parentContainer.removeChild(geoChild[0]);
    };
  }, []);

  const geocoder = new MapboxGeocoder({
    accessToken: process.env.REACT_APP_MAPBOX_ACCESS_TOKEN || "",
    types: "country,region,place",
  });

  return (
    <div>
      <div id="geocoder">hi</div>
      <pre id="result">hi</pre>
    </div>
  );
};
