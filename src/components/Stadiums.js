import React from 'react'
import StadiumsCard from './StadiumsCard'
import './Stadiums.css'

function Stadiums({stadiums}) {
    //MAP THROUGH ALL STADIUMS

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
