import React from 'react';

function GlassesList({ glassesData, onGlassesClick }) {
  return (
    <div className="glasses-list">
      {glassesData.map(glasses => (
        <img
          key={glasses.id}
          src={process.env.PUBLIC_URL + glasses.url}
          alt={glasses.name}
          onClick={() => onGlassesClick(glasses)}
          className="glasses-item"
        />
      ))}
    </div>
  );
}

export default GlassesList;
