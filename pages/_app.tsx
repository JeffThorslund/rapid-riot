import React from "react"
import "../src/components/cards/index.css"
import "../src/index.css"
import { Grommet } from "grommet";
import { theme } from "../src/grommetTheme";

export default function App({ Component, pageProps }) {
    return <Grommet theme={theme}>
        <Component className="App" {...pageProps} />
    </Grommet>
 }