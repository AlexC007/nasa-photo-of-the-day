import React from 'react';
import Photo from '../MainContent/Photo';
import styled from 'styled-components';








const Button = styled.button`
height: 3rem;
width: 4rem;
border-radius: 3rem;
margin: 1rem;
background: white;
`;
const Input = styled.input`
border-radius:2rem;
padding-left: 4rem;
`;



export default function Header (props) {
  return (
    <div className="Header">
      <div className="buttons">

        <Button
        className="button"
        onClick={() =>{
          return props.func("left")  }}> Previous Day
        </Button>

        <Input
        id="dateChange"
         type="date"
         value={props.date}
         onChange={(event) => {return props.func(event.target.value);
        }} />

        <Button className="button" onClick={() =>{
          return props.func("right")
        }}>Next Day
        </Button>
      </div>

        <Photo
        image={props.image}/>
        </div>
    )
}
