"use client";

import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Grommet } from "grommet";
import { theme } from "../src/grommetTheme";

export default function Providers(props: { children: React.ReactNode }) {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <Grommet theme={theme}>
      <QueryClientProvider client={queryClient}>
        {props.children}
      </QueryClientProvider>
    </Grommet>
  );
}
