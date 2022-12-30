import React, { useState, useEffect } from "react";
import "./App.css";
import Photo from './Photo';

function App() {
  return (
    <div className="App">
      <h1>NASA Photo of the Day</h1>
      <div className="container">
        <img src={`${Photo()}`} />
      </div>
    </div>
  );
}

export default App;
