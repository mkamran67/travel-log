"use client"
import { useEffect } from "react";
import mapboxgl from "mapbox-gl";

export default function Map() {

  const token = process.env.NEXT_PUBLIC_MAPBOX_API;

  if (!token) {
    throw new Error("Mapbox API token is not defined");
  }

  mapboxgl.accessToken = token;

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [0, 0],
      zoom: 5,
    });
  }, []);

  return (
    <div className="top-0 left-0 fixed ml-72 z-0">
      <div id="map" className="-z-10 w-screen h-screen" />
    </div>
  )
}
