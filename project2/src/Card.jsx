import React from 'react'


function Card(props) {
  return (
      <div className="card">
        <img src={props.img} alt="" />
        <h1> {props.name}</h1>
        <h4>{props.price}</h4>
      </div>
  )
}

export default Card
