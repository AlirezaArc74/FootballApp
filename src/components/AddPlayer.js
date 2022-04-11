import { useState, useContext } from "react";
import { UserContext } from "./UserContext";
import { Link } from "react-router-dom";

const AddPlayer = () => {
  const { liverpoolTeam, setLiverpoolTeam } = useContext(UserContext);
  const [playerNameInput, setPlayerNameInput] = useState();
  const [playerPositionInput, setPlayerPositionInput] = useState();
  const [playerTeamInput, setPlayerTeamInput] = useState();
  const [playerIdInput, setPlayerIdInput] = useState();
  const [playerImageInput, setPlayerImageInput] = useState();




  const addPlayer = () => {
    const arr = [...liverpoolTeam];
    arr.push({
      name: playerNameInput,
      position: playerPositionInput,
      team: playerTeamInput,
      id: playerIdInput,
      img: playerImageInput,
    });
    setLiverpoolTeam(arr);
  };
  return (
    <div className="absolute left-[16rem] bg">
      <div className="text-center absolute left-10 top-2">
        <b>
          <h1 className="text-slate-400">Add  Name</h1>
        </b>
        <input
          value={playerNameInput}
          onChange={(e) => setPlayerNameInput(e.target.value)}
          className="w-[20rem] text-center mt-4 h-8 rounded-md bg-slate-400 hover:bg-slate-300 "
        />
      </div>

      <div className="text-center absolute left-10 top-[7rem]">
        <b>
          <h1 className="text-slate-400">Add  Position</h1>
        </b>
        <input
          value={playerPositionInput}
          onChange={(e) => setPlayerPositionInput(e.target.value)}
          className="w-[20rem] text-center mt-4 h-8 rounded-md bg-slate-400 hover:bg-slate-300 "
        />
      </div>

      <div className="text-center absolute left-10 top-[14rem]">
        <b>
          <h1 className="text-slate-400">Add  Team</h1>
        </b>
        <input
          value={playerTeamInput}
          onChange={(e) => setPlayerTeamInput(e.target.value)}
          className="w-[20rem] text-center mt-4 h-8 rounded-md bg-slate-400 hover:bg-slate-300 "
        />
      </div>

      <div className="text-center absolute left-10 top-[21rem]">
        <b>
          <h1 className="text-slate-400">Add  ID</h1>
        </b>
        <input
          value={playerIdInput}
          onChange={(e) => setPlayerIdInput(e.target.value)}
          className="w-[20rem] text-center mt-4 h-8 rounded-md bg-slate-400 hover:bg-slate-300 "
        />
      </div>

      <div className="text-center  absolute left-[30rem] top-2">
        <b>
          <h1 className="text-slate-400 ">Add Logo</h1>
        </b>
        <input
          value={playerImageInput}
          onChange={(e) => setPlayerImageInput(e.target.value)}
          className="w-[20rem] text-center mt-4 h-8 rounded-md bg-slate-400 hover:bg-slate-300"
        />
        <img
          className="ml-[5rem] mt-12 w-40 rounded-md"
          src={playerImageInput}
        />
      </div>


      <div className="text-center   absolute left-[30rem] top-[22.5rem]">
        <Link to={"/dashboard/playercontrol"}>
          <h1
            onClick={addPlayer}
            className="w-[20rem] text-center mt-4 h-8 rounded-md bg-slate-400 hover:bg-slate-300"
          >
            Add
          </h1>
        </Link>
      </div>
    </div>
  );
};
export default AddPlayer;
