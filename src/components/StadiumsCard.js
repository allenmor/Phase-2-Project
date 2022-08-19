import React from 'react'
import './Stadiums.css'

function StadiumsCard({stadium}) {
  return (
    <div className="box">
     <div className="boxInner">
       <img src={stadium.image}/>
        <div className="titleBox">
         <h4>{stadium.team}</h4>
        </div>
      </div>
    </div>
   
  )
}

export default StadiumsCard;
