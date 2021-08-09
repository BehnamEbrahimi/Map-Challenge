import { useState, useContext, useRef, useEffect } from "react";
import { useWindowSize } from "../hooks/useWindowSize";
import MapDataContext from "../contexts/MapDataContext";
import Marker from "./Marker";
import Legend from "./Legend";
import "./Map.css";

const Map = () => {
  const mapData = useContext(MapDataContext);
  const map = useRef<HTMLImageElement>(null);
  const [selectedMarker, setSelectedMarker] = useState("");
  const [ratio, setRatio] = useState(1);
  const [windowWidth] = useWindowSize();

  useEffect(() => {
    if (map.current) {
      setRatio(map.current.offsetWidth / map.current.naturalWidth);
    }
  }, [windowWidth]);

  return (
    <div className="map" onClick={() => setSelectedMarker("")}>
      <img
        ref={map}
        src="background-map.jpg"
        alt="background-map"
        className="background-map"
      />

      {selectedMarker && <Legend info={mapData[selectedMarker]} />}

      {Object.keys(mapData).map((name) => {
        const [x, y] = mapData[name].position;

        return (
          <Marker
            key={name}
            name={name}
            position={{
              x: x * ratio - 12,
              y: y * ratio - 37,
            }}
            isSelected={selectedMarker === name}
            setSelectedMarker={setSelectedMarker}
          ></Marker>
        );
      })}
    </div>
  );
};

export default Map;
