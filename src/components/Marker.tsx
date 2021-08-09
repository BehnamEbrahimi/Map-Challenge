import React from "react";
import "./Marker.css";

interface MarkerProps {
  name: string;
  position: { x: number; y: number };
  isSelected: boolean;
  setSelectedMarker: Function;
}

const Marker: React.FC<MarkerProps> = ({
  name,
  position: { x, y },
  isSelected,
  setSelectedMarker,
}) => {
  return (
    <div className="marker">
      <img
        src={isSelected ? "marker-selected.png" : "marker.png"}
        onClick={(e) => {
          e.stopPropagation();
          setSelectedMarker(name);
        }}
        style={{
          left: x,
          top: y,
        }}
        alt={name}
      />
    </div>
  );
};

export default Marker;
