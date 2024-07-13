import React, { useState } from 'react';
import './App.css';
import Model from './components/Model';
import GlassesList from './components/GlassesList';
import glassesData from './data/dataGlasses.json';

function App() {
  const [selectedGlasses, setSelectedGlasses] = useState(null);

  const handleGlassesClick = (glasses) => {
    setSelectedGlasses(glasses);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Try Glasses App Online</h1>
      </header>
      <div className="container">
        <Model selectedGlasses={selectedGlasses} />
        <GlassesList glassesData={glassesData} onGlassesClick={handleGlassesClick} />
      </div>
    </div>
  );
}

export default App;
