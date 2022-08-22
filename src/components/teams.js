import React from 'react'
import SearchForTeam from './SearchForTeam'
import TeamContainer from './TeamContainer'

    function Teams({ players, season, teams }) {






  return (

    <div>
        <SearchForTeam players={players} teams={teams}

        
        />
        <TeamContainer />
    </div>
  )
}

export default Teams