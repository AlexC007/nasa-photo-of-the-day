import React from 'react';
import Photo from '../MainContent/Photo';
export default function Header (props) {
  return (
    <div className="Header">
      <div className="buttons">

        <button
        className="button"
        onClick={() =>{
          return props.func("left")  }}>&larr; Previous Day
        </button>

        <input
        id="dateChange"
         type="date"
         value={props.date}
         onChange={(event) => {return props.func(event.target.value);
        }} />

        <button className="button" onClick={() =>{
          return props.func("right")
        }}>Next Day &rarr;
        </button>
      </div>

        <Photo
        image={props.image}/>
        </div>
    )
}
