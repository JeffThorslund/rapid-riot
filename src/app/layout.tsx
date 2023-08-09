import React from "react";
import Providers from "./providers";
import "../components/cards/index.css";
import "../index.css";

export const metadata = {
  title: "Rapid Riot",
  description: "Explore whitewater paddling festivals across North America.",
  image: "/rapid-riot-logo.png",
  url: "https://www.rapidriot.com",
  type: "website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
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
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
