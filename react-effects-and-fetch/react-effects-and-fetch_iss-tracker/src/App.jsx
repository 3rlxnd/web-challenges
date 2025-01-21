import { useEffect, useState } from "react";
import Controls from "./components/Controls";
import Map from "./components/Map";
import "./styles.css";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

export default function App() {
  const [coords, setCoords] = useState({
    longitude: 0,
    latitude: 0,
  });

  async function getISSCoords() {
    try {
      const response = await fetch(URL)
      const data = await response.json()

      if (!response.ok) {
        throw Error()
      }
      setCoords({ longitude: data.longitude, latitude: data.latitude })

      // return {data: data}
    } catch (error) {
      // return {error: error}
    }
  }
  useEffect(() => {
    setInterval(() => {
      getISSCoords();
    }, 5000);
    clearInterval();
  }, []);

  return (
    <main>
      <Map longitude={coords.longitude} latitude={coords.latitude} />
      <Controls
        longitude={coords.longitude}
        latitude={coords.latitude}
        onRefresh={getISSCoords}
      />
    </main>
  );
}
