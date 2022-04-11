import { useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import { useParams } from "react-router-dom";

const TeamsId = () => {
  const { findTeamById } = useContext(UserContext);
  const [team, setTeam] = useState();
  let { id } = useParams();

  return (
    <>
      <div className="bg-slate-800 w-[32rem] rounded-2xl h-[25rem] absolute m-4 mt-20 opacity-80     "></div>
      <div className="absolute top-[9.7rem] left-4 w-[32rem] rounded-2xl h-[25rem]  ">
        <div className="ml-4 mt-2 text-slate-400">
          <img src={findTeamById(id).logoUrl} />
         <b> <h1 className="mt-[.5rem] text-[19px] ml-2 "> {findTeamById(id).teamName} </h1> </b>
         <div className="mt-[3rem] leading-8	 ">
           <h1> Team Stadium: {findTeamById(id).teamStaidum} </h1>
           <h1> Date Of Foundation: {findTeamById(id).Founded} </h1>
           <h1> Type: {findTeamById(id).teamType} </h1>
         </div>
        </div>
      </div>
    </>
  );
};
export default TeamsId;
