import React, { useState } from "react";

function TeamCard({ team, handleClick, setIsDisplayed }) {
  //SEND ID TO CONFERENCE CONTAINER
  function listClick() {
    handleClick(team);
    setIsDisplayed((prev) => !prev);
  }

  return (
    <>
      <tbody onClick={listClick}>
        <tr>
          <td data-label="logo">
            <img src={team.imgURLSmall}></img>
          </td>
          <td style={{ color: `${team.colors[0]}` }} data-label="name">
           {team.region} {team.name}
          </td>
          <td data-label="strategy">
            {team.strategy.charAt(0).toUpperCase() + team.strategy.slice(1)}
          </td>
          <td data-label="abbrev">{team.abbrev}</td>
        </tr>
      </tbody>
    </>
  );
}
export default TeamCard;
