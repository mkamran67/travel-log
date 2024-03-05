"use client"
import { useEffect } from "react";
import mapboxgl from "mapbox-gl";

export default function Map() {

  const token = 'pk.eyJ1IjoibWthbXJhbjk0IiwiYSI6ImNsdGVvbGZieTA4dXAycGxnM3JnOHp4b24ifQ.CculMs-rQGRgIdsOi8YiHQ'

  mapboxgl.accessToken = token;

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [0, 0],
      zoom: 5,
    });
  }, []);

  return <div id="map" style={{ width: "100%", height: "100vh" }}></div>;
}
