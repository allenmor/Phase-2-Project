import React from 'react'
import StadiumsCard from './StadiumsCard'
import './Stadiums.css'
import { useState, useEffect } from 'react';

function Stadiums() {
  const [stadiums, setStadiums] = useState([])
    //MAP THROUGH ALL STADIUMS
// fetch all stadiums
useEffect(() => {
  fetch("http://localhost:3000/stadiums")
    .then((res) => res.json())
    .then((data) => {
      setStadiums(data)

    });
}, []);
console.log(stadiums)
  return (
    <div className='wrap'>
        {stadiums.map((el, i) => {
            return <StadiumsCard key={el.tid} stadium={el}/>
        })}
    </div>
  )
}

export default Stadiums;
