import React from "react";
import styled from 'styled-components';


export default function Photo (props) {
  return (
    <div className="Photo" key={props.image.date}>
      <h2>{props.image.title}</h2>
      <img
        className="imgPhoto"
        src={props.image.url} alt={props.image.title}/>
      <p>{props.image.explanation}</p>
    </div>
    );
}
