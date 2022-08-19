import React from 'react'
import { useEffect, useState } from 'react'
import EasternContainer from './EasternContainer'
import WesternContainer from './WesternContainer'



function FrontPage({players, season, teams}) {


  return (
    <div>
        <EasternContainer players={players} season={season} teams={teams}/>
        <WesternContainer players={players} season={season} teams={teams}/>
    </div>
  )
}

export default FrontPage;
