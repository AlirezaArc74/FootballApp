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
import 'charts.css';


am4core.useTheme(am4themes_animated);

const Teams = () => {
  const { teams, findTeamById } = useContext(UserContext);
  const [searchInput, setSearchInput] = useState("");
  const [selectInput, setSelectInput] = useState("");
  const [showTeam, setShowTeam] = useState(false);
  const [chosenTeam, setChosenTeam] = useState();
  const chart = useRef(null);

  const navigate = useNavigate();

  // useLayoutEffect(() => {
  //   let x = am4core.create("chartdiv", am4charts.XYChart);
  //   x.paddingRight = 20;

  //   let data = [
  //     {
  //       country: "Alireza",
  //       value: 1,
  //     },
  //     {
  //       country: "narges",
  //       value: 2,
  //     },
  //   ];

  //   x.data = data;

  //   let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
  //   categoryAxis.x.data.category = "country";

  //   let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

  //   let series = chart.series.push(new am4charts.RadarSeries());
  //   series.dataFields.valueY = "litres";
  //   series.dataFields.categoryX = "country";
  //   series.name = "Sales";
  //   series.strokeWidth = 3;

  //   chart.current = x;

  //   return () => {
  //     x.dispose();
  //   };
  // }, []);
  // console.log(teams)

  const clickToshowTeam = (id) => {
    const p = teams.findIndex((item) => item.id === id);
    setChosenTeam(teams[p]);
    setShowTeam(true);
  };

  console.log(chosenTeam?.id);
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
            return item.teamType.includes(selectInput);
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

      <div className="bg-slate-400 absolute right-0 w-[20rem] top-[5.6rem] mr-2 h-[30rem] opacity-80 ">
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
              <div className="mt-[3rem] leading-9	  ">
                <h1> Country: {chosenTeam.teamCountry} </h1>
                <h1> Home Stadium: {chosenTeam.teamStaidum} </h1>
                <h1> Date Of Foundation: {chosenTeam.Founded} </h1>
                <h1> Type: {chosenTeam.teamType} </h1>
              </div>
            </div>
            <button
              className="mt-8 p-2 rounded-tr-3xl	rounded-br-3xl	 bg-sky-400"
              onClick={() => navigate(`/teams/${chosenTeam.id}`)}
            >
              Go To Team Page
            </button>
            
          </div>
        </>
      ) : null}
    </>
  );
};
export default Teams;
