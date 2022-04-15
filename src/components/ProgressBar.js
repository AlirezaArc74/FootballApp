import React, { useContext } from "react";
import { UserContext } from "../pages/UserContext";

const ProgressBar = () => {
  const { currentPlayer, setCurrentPlayer } = useContext(UserContext);
  return (
    <div>
      <div className="flex justify-between w-[20rem]  ">
        <p>Offensive Awareness </p>
        <input
          readOnly="true"
          type="range"
          max={100}
          value={currentPlayer?.offensive}
          className="eachPlayerRange"
        />
        <p> {currentPlayer?.offensive} </p>
      </div>

      <div className="flex justify-between w-[20rem]  ">
        <p> Dribbling </p>
        <input
          readOnly="true"
          type="range"
          max={100}
          value={currentPlayer?.dribbling}
          className="eachPlayerRange  "
        />
        <p> {currentPlayer?.dribbling} </p>
      </div>

      <div className="flex justify-between w-[20rem]  ">
        <p> TightPossession </p>
        <input
          readOnly="true"
          type="range"
          max={100}
          value={currentPlayer?.TightPossession}
          className="eachPlayerRange "
        />
        <p> {currentPlayer?.TightPossession} </p>
      </div>

      <div className="flex justify-between w-[20rem]  ">
        <p> LowPass </p>
        <input
          readOnly="true"
          type="range"
          max={100}
          value={currentPlayer?.lowPass}
          className="eachPlayerRange "
        />
        <p> {currentPlayer?.lowPass} </p>
      </div>

      <div className="flex justify-between w-[20rem]  ">
        <p> LoftedPass </p>
        <input
          readOnly="true"
          type="range"
          max={100}
          value={currentPlayer?.loftedPass}
          className="eachPlayerRange "
        />
        <p> {currentPlayer?.loftedPass} </p>
      </div>

      <div className="flex justify-between w-[20rem]  ">
        <p> Finishing </p>
        <input
          readOnly="true"
          type="range"
          max={100}
          value={currentPlayer?.Finishing}
          className="eachPlayerRange "
        />
        <p> {currentPlayer?.Finishing} </p>
      </div>

      <div className="flex justify-between w-[20rem]  ">
        <p> Heading </p>
        <input
          readOnly="true"
          type="range"
          max={100}
          value={currentPlayer?.Heading}
          className="eachPlayerRange "
        />
        <p> {currentPlayer?.Heading} </p>
      </div>

      <div className="flex justify-between w-[20rem]  ">
        <p> SetPieceTaking </p>
        <input
          readOnly="true"
          type="range"
          max={100}
          value={currentPlayer?.setPieceTaking}
          className="eachPlayerRange "
        />
        <p> {currentPlayer?.setPieceTaking} </p>
      </div>

      <div className="flex justify-between w-[20rem]  ">
        <p> Curl </p>
        <input
          readOnly="true"
          type="range"
          max={100}
          value={currentPlayer?.curl}
          className="eachPlayerRange "
        />
        <p> {currentPlayer?.curl} </p>
      </div>

      <div className="flex justify-between w-[20rem]  ">
        <p> Speed </p>
        <input
          readOnly="true"
          type="range"
          max={100}
          value={currentPlayer?.speed}
          className="eachPlayerRange "
        />
        <p> {currentPlayer?.speed} </p>
      </div>

      <div className="flex justify-between w-[20rem]  ">
        <p> Acceleration </p>
        <input
          readOnly="true"
          type="range"
          max={100}
          value={currentPlayer?.acceleration}
          className="eachPlayerRange "
        />
        <p> {currentPlayer?.acceleration} </p>
      </div>

      <div className="flex justify-between w-[20rem]  ">
        <p> KickingPower </p>
        <input
          readOnly="true"
          type="range"
          max={100}
          value={currentPlayer?.kickingPower}
          className="eachPlayerRange "
        />
        <p> {currentPlayer?.kickingPower} </p>
      </div>

      <div className="flex justify-between w-[20rem]  ">
        <p> Jump </p>
        <input
          readOnly="true"
          type="range"
          max={100}
          value={currentPlayer?.jump}
          className="eachPlayerRange "
        />
        <p> {currentPlayer?.jump} </p>
      </div>

      <div className="flex justify-between w-[20rem]  ">
        <p> PhysicalContact </p>
        <input
          readOnly="true"
          type="range"
          max={100}
          value={currentPlayer?.physicalContact}
          className="eachPlayerRange "
        />
        <p> {currentPlayer?.physicalContact} </p>
      </div>

      <div className="flex justify-between w-[20rem]  ">
        <p> Balance </p>
        <input
          readOnly="true"
          type="range"
          max={100}
          value={currentPlayer?.balance}
          className="eachPlayerRange "
        />
        <p> {currentPlayer?.balance} </p>
      </div>

      <div className="flex justify-between w-[20rem]   ">
        <p> Stamina </p>
        <input
          readOnly="true"
          type="range"
          max={100}
          value={currentPlayer?.stamina}
          className="eachPlayerRange "
        />
        <p> {currentPlayer?.stamina} </p>
      </div>
      {/* 
      <p>stamina</p> */}
    </div>
  );
};
export default ProgressBar;
