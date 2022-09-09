import React from "react";
import { PaddingOptions, ViewState } from "react-map-gl";

export const useViewState = () => {
  return React.useState<ViewState>({
    longitude: -100,
    latitude: 40,
    zoom: 3.5,
    bearing: 0,
    pitch: 0,
    padding: paddingOptions,
  });
};

const paddingOptions: PaddingOptions = {
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
};
