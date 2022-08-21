import React from "react";
import { useState } from "react";

function SearchForPlayerCard({ stat }) {

  return <>
        <tr>
        <td data-label="season">{stat.season}{stat.playoffs == true ? ' PlayOffs' : ''}</td>
        <td data-label="season">{stat.tid}</td>
        <td data-label="season">{stat.gp}</td>
        <td data-label="points">{(stat.pts / stat.gp).toFixed(1)}</td>
        <td data-label="rebounds">{((stat.orb + stat.drb) / stat.gp).toFixed(1)}</td>
        <td data-label="assists">{(stat.ast / stat.gp).toFixed(1)}</td>
        <td data-label="assists">{(stat.fg / stat.fga * 100).toFixed(1)}%</td>
      </tr>
  </>;
}

export default SearchForPlayerCard;
