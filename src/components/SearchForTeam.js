import React , {useState} from 'react'

export default function SearchForTeam({players, teams}) {
    const [teamName, setTeamName] = useState('')
    const [filterTeam, setFilterTeam] = useState({})


    const handleChange = (e) => {
        setTeamName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const searchedTeam = teams.filter(team => {
            return ( team.name.toLowerCase().includes(teamName.toLowerCase()) 
            )
        })
        setFilterTeam(searchedTeam)
    }

  return (
    <>
        <form onSubmit={handleSubmit} className="search-bar">
            <input
                onChange={handleChange}
                value={teamName}
                placeholder="Enter Team Name"
                type="search"
                name="search"
                pattern=".*\S.*"
                required
            />
            <button className="search-btn" type="submit">
                <span>Search</span>
            </button>
        </form>
        <h1>
        {filterTeam.name} 
        </h1>
    </>
  )
}
