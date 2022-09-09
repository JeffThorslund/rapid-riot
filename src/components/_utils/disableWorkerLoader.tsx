import mapboxgl from "mapbox-gl";

export const disableWorkerLoader = (): void => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  mapboxgl.workerClass =
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;
};
