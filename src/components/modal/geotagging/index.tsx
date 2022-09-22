import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import React, { useEffect } from "react";
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
    types: "place",
    countries: props.country,
    minLength: 1,
    limit: 7,
    getItemValue: (result) => {
      return result.text;
    },
    filter: (result) => {
      let regionOfResult;

      result.context.forEach((context) => {
        const splitContextId = context.id.split(".");
        if (splitContextId[0] === "region" || splitContextId[0] === "place") {
          regionOfResult = context.short_code.split("-")[1];
        }
      });

      if (regionOfResult !== props.region) return false;

      return true;
    },
  });

  return (
    <div>
      <div id="geocoder" />
    </div>
  );
};
