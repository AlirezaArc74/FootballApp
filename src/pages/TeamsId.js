import { useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import { useNavigate, useParams } from "react-router-dom";
import PlayerCard from "../components/playerCard";
import FieldSquad from "../components/FieldSquad";

const TeamsId = () => {
  const {
    findTeamById,
    chosenPlayer,
    liverpoolTeam,
    setLiverpoolTeam,
    findPlayerByTeamId,
    playerCard,
    setPlayerCard,
  } = useContext(UserContext);
  const [team, setTeam] = useState();
  const [showPlayer, setShowPlayer] = useState(true);
  const [fieldSquad, setFieldSquad] = useState(false);
  const [stylePlayer, setStylePlayer] = useState("");
  const [styleField, setStyleField] = useState("");
  let { id } = useParams();

  const navigate = useNavigate();

  const overAll = Math.trunc(
    (findTeamById(id)?.attack +
      findTeamById(id)?.midfield +
      findTeamById(id)?.defense) /
      3
  );
  // console.log(findTeamById.attack, typeof findTeamById.attack);
  console.log(id);

  const showPlayersClick = () => {
    setShowPlayer(true);
    setFieldSquad(false);
    setStylePlayer("BG");
    setStyleField("");
  };

  // console.log(stylePlayer)
  useEffect(() => {
    setStylePlayer("BG");
    
  },[] );
  const showFieldSquadClick = () => {
    setFieldSquad(true);
    setShowPlayer(false);
    setStyleField("BG");
    setStylePlayer("");
  };

  console.log(findTeamById(id).players);
  setPlayerCard(findTeamById(id).players);
  console.log(playerCard);

  return (
    <>
      <button
        onClick={() => navigate("/teams")}
        className=" absolute bg-slate-900 w-[5rem] hover:text-slate-900
       hover:bg-slate-400 text-slate-400 top-[5.5rem] p-2 rounded-tr-2xl rounded-br-2xl	 "
      >
        Back
      </button>
      <div className="bg-slate-800 w-[32rem] rounded-2xl h-[25rem] absolute m-4 mt-20 opacity-80   "></div>
      <div className="absolute top-[9.7rem] left-4 w-[32rem] rounded-2xl h-[25rem]  ">
        <div className="ml-4 mt-2 text-slate-400">
          <img className="w-28" src={findTeamById(id).logoUrl} />
          <b>
            <h1 className="mt-[.5rem] text-[19px] ml-2 ">
              {findTeamById(id).teamName}
            </h1>
          </b>
          <div className="mt-[3rem] leading-8	 ">
            <h1> Team Stadium: {findTeamById(id).teamStaidum} </h1>
            <h1> Date Of Foundation: {findTeamById(id).Founded} </h1>
            <h1> Type: {findTeamById(id).teamType} </h1>
          </div>
        </div>
        <div className="absolute text-slate-300 w-[18.6rem] top-2 right-3">
          <div className="flex justify-between">
            <b>
              <label>ATACK</label>
            </b>
            <b>
              <label> {findTeamById(id)?.attack} </label>
            </b>
          </div>
          <input
            readOnly="true"
            type="range"
            value={findTeamById(id)?.attack}
            className="attackRange"
            max="120"
          />

          <div className="flex justify-between">
            <b>
              <label>MIDFIELD</label>
            </b>
            <b>
              <label> {findTeamById(id).midfield} </label>
            </b>
          </div>
          <input
            readOnly="true"
            type="range"
            value={findTeamById(id).midfield}
            className="midfieldRange"
            max="120"
          />

          <div className="flex justify-between">
            <b>
              <label>DEFENSE</label>
            </b>
            <b>
              <label> {findTeamById(id).defense} </label>
            </b>
          </div>
          <input
            readOnly="true"
            type="range"
            value={findTeamById(id).defense}
            className="defenseRange"
            max="120"
          />
          <h1> Over All: {overAll} </h1>
        </div>
      </div>

      <div className="bg-slate-800  rounded-2xl h-[33rem] absolute w-[36rem] right-0 m-4 mt-2 opacity-80   "></div>
      <div className="absolute w-[36rem] h-[33rem] right-0 m-4 mt-2 text-slate-400 over">
        <b>
          <h1 className="text-center text-[25px] mt-2   ">
            {findTeamById(id).teamName}
          </h1>
        </b>

        <div className="flex bg-slate-400 text-slate-800 h-[4rem] mt-6 ">
          <button
            onClick={showPlayersClick}
            className={`${stylePlayer}  w-[26rem] `}
          >
            PLAYER LIST
          </button>
          <button
            onClick={showFieldSquadClick}
            className={` ${styleField} w-[26rem]`}
          >
            FIELD SQUAD
          </button>
        </div>

        {showPlayer ? <PlayerCard id={id} /> : null}

        {fieldSquad ? <FieldSquad id={id} /> : null}
      </div>
    </>
  );
};
export default TeamsId;
