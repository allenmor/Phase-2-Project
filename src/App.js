import "./App.css";
import { Route, Routes } from "react-router-dom";
import FrontPage from "./components/FrontPage";
import Stadiums from "./components/Stadiums";
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";

function App() {
  const [players, setPlayers] = useState([]);
  const [season, setSeason] = useState([]);
  const [teams, setTeams] = useState([]);
  const[stadiums, setStadiums] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/data")
      .then((res) => res.json())
      .then((data) => {
        setPlayers(data[0].players);
        setSeason(data[0]);
        setTeams(data[0].teams);
        setStadiums(data[0].stadiums)
      });
  }, []);
  console.log(season);
  return (
    <>
    <NavBar />
    <Routes>
      <Route
        path="/"
        element={<FrontPage players={players} season={season} teams={teams} />}
      />
      <Route path="/stadiums" element={<Stadiums stadiums={stadiums} />} />
    </Routes>
    </>
  );
}

export default App;
