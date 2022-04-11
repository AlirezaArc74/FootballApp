import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Teams from "./components/Teams";
import Home from "./components/Home";
import Players from "./components/Players";
import Couches from "./components/Couches";
import NoPage from "./components/NoPage";
import { UserContextProvider } from "./components/UserContext";
import Dashbourd from "./components/Dashbourd";
import { useState } from "react";
import EditTeam from "./components/EditTeam";
import TeamControl from "./components/TeamControl";
import AddTeam from "./components/AddTeam";
import PlayerControl from "./components/PlayerControl";
import EditPlayer from "./components/EditPlayer";
import AddPlayer from "./components/AddPlayer";
import CouchControl from "./components/CouchControl";
import AddCouch from "./components/AddCouch";
import EditCouch from "./components/EditCouch";
import TeamsId from "./components/TeamsId";
const App = () => {
  return (
    <>
      <UserContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route path="teams" element={<Teams />} />
              <Route path="teams/:id" element={<TeamsId/>} />
              <Route path="Players" element={<Players />} />
              <Route path="Couches" element={<Couches />} />
              <Route path="*" element={<NoPage />} />
            </Route>
            <Route path="dashboard" element={<Dashbourd />}>
              <Route path="teamcontrol" element={<TeamControl />} />
              <Route path="playercontrol" element={<PlayerControl />} />
              <Route path="couchcontrol" element={<CouchControl />} />
              <Route path="addteam" element={<AddTeam />} />
              <Route path="addplayer" element={<AddPlayer />} />
              <Route path="addcouch" element={ <AddCouch /> } />
              <Route path="editteam/:id" element={<EditTeam />} />
              <Route path="editplayer/:id" element={<EditPlayer />} />
              <Route path="editcouch/:id" element={<EditCouch />} />
            </Route>
          </Routes>
        </Router>
      </UserContextProvider>
    </>
  );
};
export default App;
