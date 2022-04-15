import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Teams from "./pages/Teams";
import Home from "./pages/Home";
import Players from "./pages/Players";
import Couches from "./pages/Couches";
import NoPage from "./pages/NoPage";
import { UserContextProvider } from "./pages/UserContext";
import Dashbourd from "./pages/Dashbourd";
import { useState } from "react";
import EditTeam from "./pages/EditTeam";
import TeamControl from "./pages/TeamControl";
import AddTeam from "./pages/AddTeam";
import PlayerControl from "./pages/PlayerControl";
import EditPlayer from "./pages/EditPlayer";
import AddPlayer from "./pages/AddPlayer";
import CouchControl from "./pages/CouchControl";
import AddCouch from "./pages/AddCouch";
import EditCouch from "./pages/EditCouch";
import TeamsId from "./pages/TeamsId";
import Login from "./pages/Login";
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
            <Route path="dashboard/login" element={<Login/>} />
          </Routes>
        </Router>
      </UserContextProvider>
    </>
  );
};
export default App;
