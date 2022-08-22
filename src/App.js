import "./App.css";
import { Route, Routes } from "react-router-dom";
import FrontPage from "./components/FrontPage";
import Stadiums from "./components/Stadiums";
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import SearchForPlayer from "./components/SearchForPlayer";
import Teams from "./components/teams";

function App() {
  const [players, setPlayers] = useState([]);
  const [season, setSeason] = useState([]);
  const [teams, setTeams] = useState([]);
  const[stadiums, setStadiums] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/data")
      .then((res) => res.json())
      .then((data) => {
        setPlayers(data[0].players);
        setSeason(data[0]);
        setTeams(data[0].teams);
        setStadiums(data[0].stadiums)
      });
  }, []);
  return (
    <>
    <NavBar />
    <Routes>
      <Route 
      path="/searchforplayer" 
      element={<SearchForPlayer teams={teams} players={players} />}
      />
      <Route
        path="/"
        element={<FrontPage players={players} season={season} teams={teams} />}
      />
      <Route path="/teams" element={<Teams players={players} teams={teams} stadiums={stadiums} />}
      />
      <Route path="/stadiums" element={<Stadiums stadiums={stadiums} />} 
      />
    </Routes>
    </>
  );
}

export default App;
