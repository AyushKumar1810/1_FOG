import React from 'react';
import './MapRotation.css';

// Sample data to be displayed


const MapRotation = ({ maps }) => {
  return (
    <div className="map-rotation">
      {maps.map((map, index) => (
        <div className="map-item" key={index}>
          <img src={map.img} alt={`${map.title} ${map.map}`} />
          <div className="map-details">
            <h3>{map.title}</h3>
            <p>{map.map}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default MapRotation;
