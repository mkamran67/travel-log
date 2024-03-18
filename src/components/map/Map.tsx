"use client"
import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";

export default function Map() {

  const token = process.env.NEXT_PUBLIC_MAPBOX_API;
  const [map, setMap] = useState<mapboxgl.Map | null>(null);

  if (!token) {
    throw new Error("Mapbox API token is not defined");
  }

  mapboxgl.accessToken = token;

  // useEffect(() => {
  //   const initMap = new mapboxgl.Map({
  //     container: "map",
  //     style: "mapbox://styles/mapbox/streets-v11",
  //     center: [0, 0],
  //     zoom: 5,
  //   });

  //   setMap(initMap);

  //   return () => {
  //     initMap.remove();
  //   };
  // }, []);

  // setTimeout(() => {
  //   map?.flyTo({
  //     center: [-74.5, 40],
  //     essential: true,
  //     zoom: 9
  //   })
  // }, 5000);


  return (
    <div className="top-0 left-0 fixed ml-72 z-0">
      <div id="map" className="-z-10 w-screen h-screen" />
      <h3>TBD</h3>
    </div>
  )
}
