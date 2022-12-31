import React from "react";
import "./App.css";
import Photo from './info/Photo';
import Title from './info/Title';
import Description from "./info/Desc";

function App() {
  return (
    <div className="App">
      <h1>NASA Photo of the Day</h1>
      <div className="container">
        <img src={`${Photo()}`} />
        <h2>{`${Title()}`}</h2>
        <p>{`${Description()}`}</p>
      </div>
    </div>
  );
}

export default App;
