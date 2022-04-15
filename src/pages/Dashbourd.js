import { UserContext } from "./UserContext";
import { useState, useContext, createRef } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import admin from "../img/Admin.jpeg";
import "../App.css";

const Dashbourd = () => {
  const { liverpoolTeam, setLiverpoolTeam, teams, setTeams } =
    useContext(UserContext);
  const [teamInput, setTeamInput] = useState("");
  const [teamIdInput, setTeamIdInput] = useState();
  const [playerInput, setPlayerInput] = useState("");
  const [playerSelected, setPlayerSelect] = useState("");
  const [playerNumberSelected, setPlayerNumberSelected] = useState();
  const [logoInput, setLogoInput] = useState("");

  const navigate = useNavigate();

  const addTeams = () => {
    if (!teamInput) return alert("fill is empty");
    const arr = [...teams];
    arr.push({
      id: teamIdInput,
      teamName: teamInput,
      logoUrl: logoInput,
    });
    setTeams(arr);
    setTeamInput("");
    setTeamIdInput(0);
    setLogoInput("");
  };

  const addPlayer = () => {
    if (!playerInput || !playerNumberSelected)
      return alert("please fill all input");
    const arr = [...liverpoolTeam];
    arr.push({
      name: playerInput,
      number: playerNumberSelected,
      position: playerSelected,
    });
    setLiverpoolTeam(arr);
    setPlayerInput("");
    setPlayerNumberSelected(0);
    setPlayerSelect("Positions");
  };

  return (
    <>
      <div className="pep">
      <Outlet />

        <div className="bg-slate-300 w-[16rem] h-[41rem] relative z-1000 opacity-80">
          <div className="ml-10 absolute top-5 opacity-100">
            <img className="w-40 " src={admin} />
          </div>
          <button
            onClick={() => navigate("/dashboard/teamcontrol")}
            className="mt-[13rem] ml-16 rounded p-2	 bg-sky-400 hover:bg-sky-700"
          >
            Team Control
          </button>
          <div className="absolute w-[16rem] top-[17rem] opacity-100">
            <button
              onClick={() => navigate("/dashboard/playercontrol")}
              className=" ml-[3.8rem] rounded p-2 bg-sky-400 hover:bg-sky-700"
            >
              Player Control
            </button>
          </div>

          <div className="absolute w-[16rem] top-[21rem] opacity-100">
            <button
              onClick={() => navigate("/dashboard/couchcontrol")}
              className=" ml-[3.8rem] rounded p-2 bg-sky-400 hover:bg-sky-700"
            >
              Couch Control
            </button>
          </div>

          <button
            onClick={() => navigate("/")}
            className=" w-32 mt-[22.8rem] bg-gray-400 rounded p-2 hover:bg-gray-600"
          >
            Home
          </button>
          <div className="absolute opacity-100 ">
          <button
            className="rounded  w-[7.5rem] p-2 absolute bottom-[13rem] ml-[3.8rem] bg-sky-400 hover:bg-sky-700"
            onClick={() => navigate("/dashboard")}
          >
            Dashbourd
          </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Dashbourd;
