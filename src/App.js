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
  font-size: 75px;
  display: flex;
  text-align: center;
  justify-content: flex-end;
  margin: 0 0 0 5px;
  color: ${props => props.theme.secondaryColor};
}
p {
  display: flex;
  text-align: center;
  justify-content: flex-end;
  margin: 0 0 0 5px;
  color: ${props => props.theme.tertiaryColor};
}
`

const StyledImg = styled.img`
  border: 5px solid black;
  height: 10%;
  float: left;
  display: flex; 
  justify-content: flex-start;
  margin: 0 5px;
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
      <StyledText className="container">
        <StyledImg src={`${photos}`} />
        <h2>{`${title}`}</h2>
        <p>{`${desc}`}</p>
      </StyledText>
    </StyledBackground>
  );
}

export default App;
