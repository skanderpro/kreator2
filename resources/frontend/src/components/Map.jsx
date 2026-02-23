import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

function Map() {
  const exampleMapStyles = [
    {
      featureType: "all",
      elementType: "all",
      stylers: [
        {
          hue: "#ff8d00",
        },
        {
          saturation: "-33",
        },
        {
          lightness: "10",
        },
      ],
    },
    {
      featureType: "all",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#785c3a",
        },
      ],
    },
    {
      featureType: "administrative.locality",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#311b00",
        },
      ],
    },
    {
      featureType: "landscape.natural.terrain",
      elementType: "geometry",
      stylers: [
        {
          visibility: "simplified",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [
        {
          visibility: "simplified",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "labels.text",
      stylers: [
        {
          visibility: "on",
        },
      ],
    },
    {
      featureType: "road.arterial",
      elementType: "geometry",
      stylers: [
        {
          visibility: "simplified",
        },
      ],
    },
    {
      featureType: "transit.line",
      elementType: "all",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "geometry.fill",
      stylers: [
        {
          saturation: "-48",
        },
        {
          gamma: "1.03",
        },
        {
          hue: "#00ffc6",
        },
        {
          lightness: "32",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "geometry.stroke",
      stylers: [
        {
          saturation: "-14",
        },
        {
          lightness: "0",
        },
        {
          gamma: "1.00",
        },
        {
          weight: "1.74",
        },
      ],
    },
  ];

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyDi0At-fZMJLMy-A3N6Dgswma59o48g5YY", // <-- встав сюди ключ
  });

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <>
      <GoogleMap
        center={{ lat: 49.554967501134946, lng: 25.588667591023178 }}
        zoom={15}
        options={{
          styles: exampleMapStyles,
        }}
      >
        <Marker
          position={{ lat: 49.554967501134946, lng: 25.588667591023178 }}
        />
      </GoogleMap>
    </>
  );
}

export { Map };
