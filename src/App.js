import React from "react";
import "./App.css";
import Photo from './Photo';
import Title from './Title';

function App() {
  return (
    <div className="App">
      <h1>NASA Photo of the Day</h1>
      <div className="container">
        <img src={`${Photo()}`} />
        <h2>{`${Title()}`}</h2>
        <p></p>
      </div>
    </div>
  );
}

export default App;
