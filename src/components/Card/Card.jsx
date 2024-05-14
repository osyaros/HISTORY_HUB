import React from 'react'
import './Card.scss'
const Card = ({data}, key) =>{
  return (
    <div className='card'>
        <div className='photocard'>   
            <img src={data[1].image} alt='photo'/>
        </div>
        <div className='cardname'>
            <span>{data[1].name}</span>
        </div>
    </div>
  )
};
export default Card;
