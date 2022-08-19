import React from 'react'
import './Stadiums.css'
import { useState } from 'react'

function StadiumsCard({stadium}) {

    const[clicked, setClicked] = useState(true)

    function handleClick() {
        setClicked(prev => !prev)
    }
  return (
    <div className="box">
     <div className="boxInner">
       <img onClick={handleClick} src={clicked ? stadium.imageOut : stadium.imageIn}/>
        <div className="titleBox">
         <h4>{stadium.team} at {stadium.name}</h4>
        </div>
      </div>
    </div>
   
  )
}

export default StadiumsCard;
