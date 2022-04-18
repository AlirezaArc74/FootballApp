import React, { useContext } from "react";
import { UserContext } from "../pages/UserContext";

const ProgressBar = () => {
  const { currentPlayer, setCurrentPlayer } = useContext(UserContext);
  return (
    <div>
      <div className="flex justify-between w-[20rem] leading-9  ">
        <p>Atack  </p>
        <input
          readOnly="true"
          type="range"
          max={100}
          value={currentPlayer?.attack}
          className="eachPlayerRange"
        />
        <p> {currentPlayer?.attack} </p>
      </div>

      <div className="flex justify-between w-[20rem]  ">
        <p> Midfield </p>
        <input
          readOnly="true"
          type="range"
          max={100}
          value={currentPlayer?.midfield}
          className="eachPlayerRange  "
        />
        <p> {currentPlayer?.midfield} </p>
      </div>

      <div className="flex justify-between w-[20rem]  ">
        <p> defense </p>
        <input
          readOnly="true"
          type="range"
          max={100}
          value={currentPlayer?.defense}
          className="eachPlayerRange "
        />
        <p> {currentPlayer?.defense} </p>
      </div>
    </div>
  );
};
export default ProgressBar;
