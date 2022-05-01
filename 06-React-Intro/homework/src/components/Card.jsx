import React from 'react';

export default function Card(props) {
  // acá va tu código
  return (
  <div>
    <div>
      <h2>{props.name}</h2>
    </div>
    <button onClick={props.onClose}>X</button>
    <div>
      <h5>Min</h5>
      <h5>{props.min}</h5>
    </div>
    <div>
      <h5>Max</h5>
    <h5>{props.max}</h5>
    </div>
    <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt='Image Not Found' />
  </div>
)
  
};