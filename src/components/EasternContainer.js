import React from "react";
import { useState, useEffect } from "react";
import TeamCard from "./TeamCard";
import "./Conference.css";
import PlayerPictures from "./PlayerPictures";

function EasternContainer({ teams, season, players }) {
  const [certainPlayers, setCertainPlayers] = useState([]);
  const [isDisplayed, setIsDisplayed] = useState(true);

  // FILTER EAST AND WEST CONFERENCE
  let newArray = teams.filter((el, i) => {
    return el.cid === 0;
  });

  //PULL TEAM IDS
  function handleClick(item) {
    let playerArray = players.filter((el, i) => {
      return el.tid == item.tid;
    });

    setCertainPlayers(playerArray);
  }



 


  //NAME POS PTS REB ASSISTS
  return (
    <div>
      <table>
        <caption style={{ color: "blue" }}>Eastern Conference</caption>
        <thead>
          {isDisplayed ? (
            <tr>
              <th scope="col">Logo</th>
              <th scope="col">Team Name</th>
              <th scope="col">Contending</th>
              <th scope="col">Abbreviation</th>
            </tr>
          ) : (
            <tr>
              <th scope="col">Pic</th>
              <th scope="col">Name</th>
              <th scope="col">Position</th>
              <th scope="col">Weight</th>
            </tr>
          )}
        </thead>
        {isDisplayed ? (
          <></>
        ) : (
          certainPlayers.map((el, i) => {
            return (
              <PlayerPictures
                isDisplayed={isDisplayed}
                key={i}
                setIsDisplayed={() => setIsDisplayed((prev) => !prev)}
                playerPic={el}
              />
            );
          })
        )}
        {newArray.map((el, i) => {
          return (
            <TeamCard
              setIsDisplayed={() => setIsDisplayed((prev) => !prev)}
              handleClick={(item) => handleClick(item)}
              season={season}
              key={i}
              team={el}
            />
          );
        })}
      </table>
    </div>
  );
}

export default EasternContainer;
