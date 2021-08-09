import Map from "./Map";
import MapDataContext from "../contexts/MapDataContext";
import mapDataArr from "../map-data.json";
import { MarkerInfo } from "../types/MarkerInfo";
import "./App.css";

const mapData: { [key: string]: MarkerInfo } = {};
mapDataArr.forEach((item) => {
  mapData[item.name] = item;
});

function App() {
  return (
    <MapDataContext.Provider value={mapData}>
      <div className="app">
        <Map />
      </div>
    </MapDataContext.Provider>
  );
}

export default App;
