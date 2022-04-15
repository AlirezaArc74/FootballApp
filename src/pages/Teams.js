import "../App.css";
import React, {
  useContext,
  useState,
  useRef,
  useLayoutEffect,
  useEffect,
} from "react";
import { UserContext } from "./UserContext";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { useNavigate } from "react-router-dom";
import "charts.css";
import Modal from "../components/Modal";

const Teams = () => {
  const { teams, findTeamById, chosenTeam, setChosenTeam, liverpoolTeam } =
    useContext(UserContext);
  const [searchInput, setSearchInput] = useState("");
  const [selectInput, setSelectInput] = useState("");
  const [showTeam, setShowTeam] = useState(false);
  const [attack, setAttack] = useState()

  const navigate = useNavigate();

  const overAll = Math.trunc(
    (chosenTeam?.attack + chosenTeam?.midfield + chosenTeam?.defense) / 3
  );

  const clickToshowTeam = (id) => {
    const p = teams.findIndex((item) => item.id === id);
    setChosenTeam(teams[p]);
    setShowTeam(true);
  };

  // {chosenTeam?.map(item => {
  //   if(item?.position?.includes('Forward')) {
  //     return console.log(item)
  //   }
  // })}

  console.log(chosenTeam);
  return (
    <>
      {/* <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div> */}
      <div className="absolute h-[37rem]   ">
        {teams
          .filter((item) => {
            return item.teamName
              .toLowerCase()
              .includes(searchInput.toLowerCase());
          })
          .filter((item) => {
            return item?.teamType?.includes(selectInput);
          })
          .map((item) => (
            <div
              onClick={() => clickToshowTeam(item.id)}
              className=" top-5 text-[14px] text-slate-800 cursor-pointer
             hover:bg-slate-100 flex bg-slate-300 w-[15rem] ml-4 mb-4 mt-4 round "
            >
              <img className="w-20" src={item.logoUrl} />
              <div className="m-4">
                <h1> {item.teamName} </h1>
                <h1> {item.teamStaidum} </h1>
                <h1> {item.Founded} </h1>
                <h1> {item.teamType} </h1>
              </div>
            </div>
          ))}
      </div>
      <div className="">
        <b>
          <h1 className=" relative top-[3rem] ml-[26rem] text-slate-100 ">
            Select A Team To Read Details
          </h1>
        </b>
        <Modal />
      </div>

      <div className="bg-slate-700 absolute right-0 w-[20rem] top-[5.6rem] mr-2 h-[30rem] opacity-80 ">
        <b>
          <h1 className="text-[20px] mt-4 text-center">Find Your Team</h1>
        </b>
        <h1 className="text-center mt-8 ">Search By Name</h1>
      </div>
      <div className="absolute right-[3rem] top-[12rem]">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="rounded-md bg-slate-500 text-center w-[14rem] p-2   "
          type="text"
        />
      </div>
      <div className="absolute right-[3rem] top-[16rem]">
        <h1 className="text-center">Search By Type</h1>
        <select
          value={selectInput}
          onChange={(e) => setSelectInput(e.target.value)}
          className="rounded-md bg-slate-500 text-center w-[14rem] mt-4 p-2"
        >
          <option>All</option>
          <option>Club Team</option>
          <option>National Team</option>
        </select>
      </div>
      {showTeam ? (
        <>
          <div className="absolute left-[18rem] border bg-slate-800 top-[5.6rem] w-[31rem] h-[30rem]">
            <img className="m-2 w-28" src={chosenTeam.logoUrl} />
            <div className="text-slate-400 ml-4 ">
              <b>
                <h1 className="text-[17px] mt-4">{chosenTeam.teamName}</h1>
              </b>
              <div className="mt-[1.5rem] leading-7	w-[10rem] text-[13px] ">
                <h1> Country: {chosenTeam.teamCountry} </h1>
                <h1> Home Stadium: {chosenTeam.teamStaidum} </h1>
                <h1> Date Of Foundation: {chosenTeam.Founded} </h1>
                <h1> Type: {chosenTeam.teamType} </h1>
              </div>
            </div>
            <button
              className="mt-8 p-2 rounded-tr-3xl	rounded-br-3xl
               hover:text-sky-400 hover:bg-slate-600	 bg-sky-400"
              onClick={() => navigate(`/teams/${chosenTeam.id}`)}
            >
              Go To Team Page
            </button>
            <div className="absolute text-slate-300 w-[18.6rem] top-8 right-3">
              <div className="flex justify-between">
                <b>
                  <label>ATACK</label>
                </b>
                <b>
                  <label> {chosenTeam.attack} </label>
                </b>
              </div>
              <input
                readOnly="true"
                type="range"
                value={chosenTeam.attack}
                className="attackRange"
                max="120"
              />

              <div className="flex justify-between">
                <b>
                  <label>MIDFIELD</label>
                </b>
                <b>
                  <label> {chosenTeam.midfield} </label>
                </b>
              </div>
              <input
                readOnly="true"
                type="range"
                value={chosenTeam.midfield}
                className="midfieldRange"
                max="120"
              />

              <div className="flex justify-between">
                <b>
                  <label>DEFENSE</label>
                </b>
                <b>
                  <label> {chosenTeam.defense} </label>
                </b>
              </div>
              <input
                readOnly="true"
                type="range"
                value={chosenTeam.defense}
                className="defenseRange"
                max="120"
              />
              <h1> Overall: {overAll} </h1>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};
export default Teams;
