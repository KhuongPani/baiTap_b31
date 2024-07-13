import React from 'react';

function Model({ selectedGlasses }) {
  return (
    <div className="model">
      <div className="model-container">
        <img src={process.env.PUBLIC_URL + '/glassesImage/model.jpg'} alt="Model" className="model-image" />
        {selectedGlasses && (
          <img src={process.env.PUBLIC_URL + selectedGlasses.url} alt={selectedGlasses.name} className="selected-glasses" />
        )}
      </div>
      {selectedGlasses && (
        <div className="glasses-info">
          <h2>{selectedGlasses.name}</h2>
          <p>{selectedGlasses.desc}</p>
        </div>
      )}
    </div>
  );
}

export default Model;
