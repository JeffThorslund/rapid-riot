import { ServerStyleSheet } from 'styled-components';
import React from "react"
import Document, { Html, Head, Main, NextScript } from 'next/document';


// export default class MyDocument extends Document {
//   static async getInitialProps(ctx) {
//     const sheet = new ServerStyleSheet();
//     const originalRenderPage = ctx.renderPage;

//     try {
//       ctx.renderPage = () =>
//         originalRenderPage({
//           enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
//         });

//       const initialProps = await Document.getInitialProps(ctx);
//       return {
//         ...initialProps,
//         styles: (
//           <>
//             {initialProps.styles}
//             {sheet.getStyleElement()}
//           </>
//         )
//       };
//     } finally {
//       sheet.seal();
//     }
//   }
// }

export default class MyDocument extends Document {
   render() {
       return (
        <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" href="/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta
            name="description"
            content="Whitewater Festival Directory"
          />
          <link rel="apple-touch-icon" href="/logo192.png" />

          {/* Manifest */}
          <link rel="manifest" href="/manifest.json" />

          {/* Map */}
          <link
            href="https://api.tiles.mapbox.com/mapbox-gl-js/v2.10.0/mapbox-gl.css"
            rel="stylesheet"
          />

          {/* Fonts */}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=DM+Sans&display=swap"
            rel="stylesheet"
          />

          {/* Metadata */}
          <title>Rapid Riot</title>
          <meta property="og:title" content="Rapid Riot - Whitewater Festivals" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.rapidriot.com" />
          <meta
            property="og:description"
            content="Explore whitewater paddling festivals across North America."
          />
          <meta property="og:image" content="/rapid-riot-logo.png" />
        </Head>
        <body>
          <noscript>You need to enable JavaScript to run this app.</noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
   }
}