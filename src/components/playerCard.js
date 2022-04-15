import { useContext, useState } from "react";
import { UserContext } from "../pages/UserContext";

const PlayerCard = (id) => {
  const { playerCard, setPlayerCard, liverpoolTeam } = useContext(UserContext);

  return (
    <div className=" grid grid-cols-2 gap-2 mt-[1.5rem]   ">
      {liverpoolTeam
        .filter((item) => item.teamId == id.id)
        .map((item) => {
          if (item.isSelected === true) {
            return (
              <div className="bg-slate-400  w-[17rem]  flex justify-betweem text-slate-800 rounded-[55px]  ">
                <img className="w-28 h-28 rounded-[56px]" src={item?.img} />
                <div className="  ml-1 ">
                  <p className=""> {item.name} </p>
                  <p className=""> number: {item.number} </p>
                  <p className=""> {item.position} </p>
                  <p className=""> {item.team} </p>
                </div>
              </div>
            );
          }
        })}
    </div>
  );
};

export default PlayerCard;
