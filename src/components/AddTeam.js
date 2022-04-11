import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "./UserContext";
import { Link } from "react-router-dom";
import { ReactDatePicker } from "react-datepicker";
import "react-datepicker/dist/react-datepicker-cssmodules.css";

const AddTeam = () => {
  const { teams, setTeams } = useContext(UserContext);

  const [nameInput, setInputName] = useState("write your team name");
  const [countryInput, setCountryInput] = useState();
  const [stadiumInput, setStadiumInput] = useState();
  const [teamTypeInput, setTeamTypeInput] = useState();
  const [teamLogoInput, setTeamLogoInput] = useState();
  const [teamFoundedInput, setTeamFoundedInput] = useState();
  const [teamIdInput, setTeamIdInput] = useState();
  const [date, setData] = useState();

  const addTeam = () => {
    const arr = [...teams];
    arr.push({
      teamName: nameInput,
      id: teamIdInput,
      teamCountry: countryInput,
      teamStaidum: stadiumInput,
      Founded: date,
      logoUrl: teamLogoInput,
      teamType: teamTypeInput,
    });
    setTeams(arr);
  };

  return (
    <>
      {/* <ReactDatePicker
        selected={startDate}
        onChange={() => setStartDate(date)}
      /> */}
      {/* <h1>Selected date: {date}</h1> */}

      <div className="absolute left-[20rem] top-10">
        <div className="text-center">
          <b>
            <h1 className="text-slate-400">Add Team Name</h1>
          </b>
          <input
            value={nameInput}
            onChange={(e) => setInputName(e.target.value)}
            className="w-[20rem] text-center mt-4 h-8 rounded-md bg-slate-400 hover:bg-slate-300 "
          />
        </div>

        <div className="text-center mt-4">
          <b>
            <h1 className="text-slate-400">Add Team Country</h1>
          </b>
          <input
            value={countryInput}
            onChange={(e) => setCountryInput(e.target.value)}
            className="w-[20rem] text-center mt-4 h-8 rounded-md bg-slate-400 hover:bg-slate-300 "
          />
        </div>

        <div className="text-center mt-4">
          <b>
            <h1 className="text-slate-400">Add Team Stadium</h1>
          </b>
          <input
            value={stadiumInput}
            onChange={(e) => setStadiumInput(e.target.value)}
            className="w-[20rem] text-center mt-4 h-8 rounded-md bg-slate-400 hover:bg-slate-300 "
          />
        </div>

        <div className="text-center mt-4">
          <b>
            <h1 className="text-slate-400">Add Team ID</h1>
          </b>
          <input
            value={teamIdInput}
            onChange={(e) => setTeamIdInput(e.target.value)}
            className="w-[20rem] text-center mt-4 h-8 rounded-md bg-slate-400 hover:bg-slate-300 "
          />
        </div>

        <div className="text-center mt-8 absolute left-96 top-[-2rem]">
          <b>
            <h1 className="text-slate-400 ">Add Team Type</h1>
          </b>
          <select
            value={teamTypeInput}
            onChange={(e) => setTeamTypeInput(e.target.value)}
            className="w-[20rem]  text-center mt-4 h-8 rounded-md bg-slate-400 hover:bg-slate-300"
          >
            <option> </option>
            <option>Club Team</option>
            <option>National Team</option>
          </select>
        </div>

        <div className="text-center mt-8 absolute left-96 top-[4.6rem]">
          <b>
            <h1 className="text-slate-400 ">Add Team Foundation</h1>
          </b>
          <input
            className=" w-[20rem] mt-4 text-center mt-4 h-8 rounded-md bg-slate-400 hover:bg-slate-300 "
            type="date"
            onChange={(e) => setData(e.target.value)}
          />
        </div>

        <div className="text-center mt-8 absolute left-96 top-[10.6rem]">
          <b>
            <h1 className="text-slate-400 ">Add Team Logo URL</h1>
          </b>
          <input
            onChange={(e) => setTeamLogoInput(e.target.value)}
            className="w-[20rem] text-center mt-4 h-8 rounded-md bg-slate-400 hover:bg-slate-300"
          />
          <img className="ml-[6rem] mt-20 w-20" src={teamLogoInput} />
        </div>

        <div className="text-center   absolute left-96 bottom-[-9.4rem]">
          <Link to={"/dashboard/teamcontrol"}>
            <h1
              onClick={addTeam}
              className="bg-slate-500 w-[20rem] rounded-md hover:bg-slate-200"
            >
              Add
            </h1>
          </Link>
        </div>
      </div>
    </>
  );
};
export default AddTeam;
