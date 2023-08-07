import React from "react"
import "../src/components/cards/index.css"
import "../src/index.css"
import { Grommet } from "grommet";
import { theme } from "../src/grommetTheme";
import NextApp from 'next/app';


export default class MyApp extends NextApp {
    render() {
      const { Component, pageProps } = this.props;
      return (
        <Grommet theme={theme}>
          <Component {...pageProps} />
        </Grommet>
      );
    }
  }