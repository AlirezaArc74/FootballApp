import { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { UserContext } from "./UserContext";
import "../App.css";

const EditPlayer = () => {
  const { findPlayerById, saveChangePlayer, setSaveChangePlayer } =
    useContext(UserContext);

  const [playerNameInput, setPlayerNameInput] = useState();
  const [playerPositionInput, setPlayerPositionInput] = useState();
  const [playerCurrentTeamInput, setPlayerCurrentTeamInput] = useState();
  const [playerLogoInput, setPlayerLogoInput] = useState();
  const [error, setError] = useState();

  let { id } = useParams();
  // console.log(findPlayerById)

  useEffect(() => {
    const thisPlayer = findPlayerById(id);
    if (!thisPlayer) return setError(true);
    setPlayerNameInput(thisPlayer.name);
    setPlayerPositionInput(thisPlayer.position);
    setPlayerCurrentTeamInput(thisPlayer.team);
    setPlayerLogoInput(thisPlayer.img);
  }, []);

  console.log(findPlayerById(id));

  const saveChange = () => {
    const arr = findPlayerById(id);
    arr.name = playerNameInput;
    arr.position = playerPositionInput;
    arr.team = playerCurrentTeamInput;
    arr.img = playerLogoInput;
    setSaveChangePlayer(arr.name, arr.position, arr.team, arr.img);
  };

  if (error) return (<h1>No such player found</h1>)

  return (
    <div className="absolute left-[16rem] bg">
      <div className="text-center absolute left-10 top-2">
        <b>
          <h1 className="text-slate-400">Edit Name</h1>
        </b>
        <input
          value={playerNameInput}
          onChange={(e) => setPlayerNameInput(e.target.value)}
          className="w-[20rem]  text-center mt-4 h-8 rounded-md bg-slate-400 hover:bg-slate-300 "
        />
      </div>
      <div className="text-center absolute left-10 top-[7rem]">
        <b>
          <h1 className="text-slate-400 mt-4">Edit Position</h1>
        </b>
        <input
          value={playerPositionInput}
          onChange={(e) => setPlayerPositionInput(e.target.value)}
          className="w-[20rem] text-center mt-4 h-8 rounded-md bg-slate-400 hover:bg-slate-300 "
        />
      </div>
      <div className="text-center absolute left-10 top-[14rem]">
        <b>
          <h1 className="text-slate-400 mt-4">Edit Current Team</h1>
        </b>
        <input
          value={playerCurrentTeamInput}
          onChange={(e) => setPlayerCurrentTeamInput(e.target.value)}
          className="w-[20rem] text-center mt-4 h-8 rounded-md bg-slate-400 hover:bg-slate-300 "
        />
      </div>
      <div className="text-center  absolute left-[30rem] top-2">
        <b>
          <h1 className="text-slate-400 ">Edit Player Logo</h1>
        </b>
        <input
          value={playerLogoInput}
          onChange={(e) => setPlayerLogoInput(e.target.value)}
          className="w-[20rem] text-center mt-4 h-8 rounded-md bg-slate-400 hover:bg-slate-300"
        />
        <img
          className="ml-[5rem] mt-12 w-40 rounded-md"
          src={playerLogoInput}
        />
      </div>
      <div className="text-center mt-8 absolute left-[30rem] top-[18.6rem]">
        <Link to={"/dashboard/playercontrol"}>
          <button
            className="w-[20rem] text-center mt-4  h-8 rounded-md bg-slate-400 hover:bg-slate-300"
            onClick={saveChange}
          >
            Edit
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EditPlayer;
