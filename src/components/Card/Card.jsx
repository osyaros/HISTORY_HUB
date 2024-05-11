import React from 'react'
import './Card.scss'
const Card = () =>{
  return (
    <div className='card'>
        <div className='photocard'>   
            <img src="/map.png" alt='photo'/>
        </div>
        <div className='cardname'>
            <span> Нансеновский паспорт</span>
        </div>
    </div>
  )
};
export default Card;
