import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import React, { useEffect } from "react";
import { filter } from "./_utils/filter";
import { Countries, Provinces } from "../../../types";

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
    countries: "CA,US",
    filter: (result) => filter(result, Countries["Canada"], Provinces.Ontario),
  });

  return (
    <div>
      <div id="geocoder" />
    </div>
  );
};
