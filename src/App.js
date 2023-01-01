import React, {useState, useEffect} from "react";
import axios from "axios";
import "./App.css";
import styled from "styled-components";

const StyledBackground = styled.div`
padding: 50px;
background-color: ${props => props.theme.primaryColor};
`

const StyledText = styled.div`
h2 {
  display: flex;
  text-align: center;
  justify-content: right;
  color: ${props => props.theme.secondaryColor};
}
`

const StyledImg = styled.img`

`

function App() {

  const [photos, getPhotos] = useState([]);
  const [title, getTitle] = useState("");
  const [desc, getDesc] = useState("");
  const pokemon = Math.floor(Math.random() * 905);

  useEffect(() => {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
      .then(res => {
          getPhotos(res.data.sprites.front_default);
          getTitle(res.data.species.name);
          getDesc(`This Pokemon weighs ${res.data.weight} pounds!!`); 
      })
      .catch(err => console.log(err))
  }, []);

  return (
    <StyledBackground className="App">
      <h1>Random Pokemon!</h1>
      <div className="container">
        <img src={`${photos}`} />
        <h2>{`${title}`}</h2>
        <p>{`${desc}`}</p>
      </div>
    </StyledBackground>
  );
}

export default App;
