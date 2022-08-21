import React from "react";
import { useState } from "react";
import "./SearchForPlayer.css";
import SearchForPlayerCard from "./SearchForPlayerCard";

function SearchForPlayer({ players, teams }) {
  const [playerStat, setPlayerStat] = useState([]);
  const [name, setName] = useState("");
  const[nameImg, setNameImg] =  useState({name: '', image: 'https://1000logos.net/wp-content/uploads/2017/04/Logo-NBA.png'})



  //On SEARCH CLICKED FILTER THROUGH ALL PLAYERS AND TAKE OBJECT OF PLAYER NAME SELECTED
  function handleSubmit(e) {
    e.preventDefault();
    let newArray = players.filter((el, i) => {
        return el.name
    })
    let onlyNbaPlayers = newArray.filter((player, i) => {
        return player.stats
    })

    //Add TEAM NAME TO EACH PLAYER STAT
    // let addTeamName = onlyNbaPlayers.map((player, i) => {
    //     return player.stats.map((stat, i) => {
    //         return stat.tid == teams.map((el, i) => {
    //             return el.tid 
    //         })  
    //     }) ? {...player, stats: {
    //         ...player.stats, 0: {
    //             ...player.stats[0], teamName: 'yo'
    //         }
    //     }
    //     }  : 'no'
    // })
    console.log(onlyNbaPlayers)
    console.log(teams)

    let searchedPlayer = onlyNbaPlayers.filter((el, i) => {
        return el.name.toLowerCase() == name
    })

    setNameImg({...nameImg, name: searchedPlayer[0].name, image: searchedPlayer[0].imgURL})
    console.log(nameImg)
    setPlayerStat(searchedPlayer[0].stats)
  }


  //CONTROLLED FORM E.TARGET.VALUE IS THE INPUT OF THE USER SET TO NAME STATE
  function handleChange(e) {
      let words = e.target.value.toLowerCase()

      setName(words)
    }



  return (
    <>
      <form onSubmit={handleSubmit} className="search-bar">
        <input
          onChange={handleChange}
          value={name}
          placeholder="Enter Player Name"
          type="search"
          name="search"
          pattern=".*\S.*"
          required
        />
        <button className="search-btn" type="submit">
          <span>Search</span>
        </button>
      </form>
      <img src={nameImg.image} alt="Player" className="center"></img>
      <table>
        <caption>{nameImg.name} Stats</caption>
        <thead>
          <tr>
            <th scope="col">Season</th>
            <th scope="col">Team</th>
            <th scope="col">Games Played</th>
            <th scope="col">Points</th>
            <th scope="col">Rebounds</th>
            <th scope="col">Assists</th>
            <th scope="col">Field Goal</th>
          </tr>
        </thead>
        <tbody>
          {playerStat.map((el, i) => {
              return <SearchForPlayerCard key={i} stat={el} />
          })}
        </tbody>
      </table>
    </>
  );
}

export default SearchForPlayer;
