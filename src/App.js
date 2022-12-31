import React from "react";

import "./App.css";

import Photo from './info/Photo';
import Title from './info/Title';
import Description from "./info/Desc";

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
  return (
    <StyledBackground className="App">
      <h1>NASA Photo of the Day</h1>
      <div className="container">
        <img src={`${Photo()}`} />
        <StyledText>
          <h2>{`${Title()}`}</h2>
          <p>{`${Description()}`}</p>
        </StyledText>
      </div>
    </StyledBackground>
  );
}

export default App;
