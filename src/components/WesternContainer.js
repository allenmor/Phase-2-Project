import React from "react";
import TeamCard from "./TeamCard";
import PlayerPictures from "./PlayerPictures";
import { useState, useEffect } from "react";
function WesternContainer({ teams, players, season }) {
  const [certainPlayers, setCertainPlayers] = useState([]);
  const [isDisplayed, setIsDisplayed] = useState(true);
  let newArray = teams.filter((el, i) => {
    return el.cid === 1;
  });

  //PULL TEAM IDS
  function handleClick(item) {
    let playerArray = players.filter((el, i) => {
      return el.tid == item.tid;
    });

    setCertainPlayers(playerArray);
  }
  return (
    <div>
      <table>
        <caption style={{ color: "red" }}>Western Conference</caption>
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
              <th scope="col">Born</th>
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

export default WesternContainer;
