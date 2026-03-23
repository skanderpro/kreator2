import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { useSettings } from "../api/settings.js";

function Map() {
    const settings = useSettings();

    const exampleMapStyles = [
        {
            featureType: "all",
            elementType: "all",
            stylers: [
                {
                    hue: "#00ff4c",
                },
                {
                    saturation: "-58",
                },
                {
                    lightness: "15",
                },
            ],
        },
        {
            featureType: "all",
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#1d3323",
                },
            ],
        },
        {
            featureType: "administrative.locality",
            elementType: "labels.text.fill",
            stylers: [
                {
                    color: "#1c3027",
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
                    saturation: "28",
                },
                {
                    gamma: "1.03",
                },
                {
                    hue: "#00f5ff",
                },
                {
                    lightness: "19",
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
        // googleMapsApiKey: "AIzaSyDi0At-fZMJLMy-A3N6Dgswma59o48g5YY", // <-- встав сюди ключ
        googleMapsApiKey: settings.data.map_api_key,
    });

    if (!isLoaded) return <div>Loading...</div>;
    return (
        <>
            <GoogleMap
                center={{
                    lat: parseFloat(settings.data.map_lat),
                    lng: parseFloat(settings.data.map_lng),
                }}
                zoom={15}
                options={{
                    styles: exampleMapStyles,
                }}
            >
                <Marker
                    position={{
                        lat: parseFloat(settings.data.map_lat),
                        lng: parseFloat(settings.data.map_lng),
                    }}
                />
            </GoogleMap>
        </>
    );
}

export { Map };
