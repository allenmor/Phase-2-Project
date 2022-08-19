import React from 'react'
import { useEffect, useState } from 'react'
import EasternContainer from './EasternContainer'
import WesternContainer from './WesternContainer'
import NavBar from './NavBar'


function FrontPage() {
const [players, setPlayers] = useState([])
const [season, setSeason] = useState([])
const [teams, setTeams] = useState([])



    useEffect(() => {
        fetch('http://localhost:3000/data')
        .then(res => res.json())
        .then(data => {
            setPlayers(data[0].players)
            setSeason(data[0])
            setTeams(data[0].teams)
        })
    },[])
    console.log(season)

  return (
    <div>
        <NavBar />
        <EasternContainer players={players} season={season} teams={teams}/>
        <WesternContainer players={players} season={season} teams={teams}/>
    </div>
  )
}

export default FrontPage;
