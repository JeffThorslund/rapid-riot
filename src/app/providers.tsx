"use client";

import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Grommet, Box } from "grommet";
import { theme } from "../grommetTheme";
import { MapProvider } from "react-map-gl";

export default function Providers(props: { children: React.ReactNode }) {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <Grommet theme={theme}>
      <QueryClientProvider client={queryClient}>
        <MapProvider>
          <Box height={"100vh"}>{props.children}</Box>
        </MapProvider>
      </QueryClientProvider>
    </Grommet>
  );
}
