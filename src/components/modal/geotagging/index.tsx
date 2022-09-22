import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import React, { useEffect } from "react";
import { filter } from "./_utils/filter";
import { Countries, Provinces, States } from "../../../types";

export const Geotagging = (props: {
  country: Countries;
  region: States | Provinces;
}) => {
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
  }, [props.country, props.region]);

  const geocoder = new MapboxGeocoder({
    accessToken: process.env.REACT_APP_MAPBOX_ACCESS_TOKEN || "",
    types: "region,place",
    countries: props.country,
    filter: (result) => filter(result, props.region),
    minLength: 1,
  });

  return (
    <div>
      <div id="geocoder" />
    </div>
  );
};
