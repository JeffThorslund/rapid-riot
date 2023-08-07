import React from "react";
import "../src/components/cards/index.css";
import "../src/index.css";
import { Grommet } from "grommet";
import { theme } from "../src/grommetTheme";
import NextApp from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default class MyApp extends NextApp {
  render() {
    const { Component, pageProps } = this.props;

    const queryClient = new QueryClient();

    return (
      <Grommet theme={theme}>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </Grommet>
    );
  }
}
