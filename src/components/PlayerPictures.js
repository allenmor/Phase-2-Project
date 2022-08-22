import React from "react";
import "./PlayerPictures.css";

function PlayerPictures({ playerPic, setIsDisplayed, isDisplayed }) {
  // console.log(playerPic)
  function handleClick() {
    setIsDisplayed();
  }


  return (
    <tbody>
      {isDisplayed ? (
        <></>
      ) : (
        <tr onClick={handleClick}>
          <td data-label="logo">
            <img className="playerPics" src={playerPic.imgURL}></img>
          </td>
          <td data-label="name">
            <h3>{playerPic.name}</h3>
          </td>
          <td data-label="strategy">
            <h3>{playerPic.pos}</h3>
          </td>
          <td data-label="abbrev">
            <h3>{playerPic.weight} lbs</h3>
          </td>
        </tr>
      )}
    </tbody>
  );
}

export default PlayerPictures;
