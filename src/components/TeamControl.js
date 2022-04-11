import Dashbourd from "./Dashbourd";
import { UserContext } from "./UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const TeamControl = () => {
  const { teams, setTeams } = useContext(UserContext);

  const navigate = useNavigate();
  console.log(teams);
  return (
    <div className="absolute left-[16rem] text-center bg">
      <div className=" h-[19rem]">
        <table className="relative left-16 top-16  ">
          <tr>
            <th className="w-28 ">ID</th>
            <th className="w-28 ">Name</th>
            <th className="w-28 ">Logo</th>
            <th className="w-28 ">Stadium</th>
            <th className="w-28 ">Countey</th>
            <th className="w-28 ">Founded</th>
            <th className="w-28 ">Edit</th>
          </tr>
          {teams.map((item) => {
            return (
              <tr>
                <td> {item.id} </td>
                <td> {item.teamName} </td>
                <td>
                  <img className="w-20 h-20 ml-4" src={item.logoUrl} />{" "}
                </td>
                <td> {item.teamStaidum} </td>
                <td> {item.teamCountry} </td>
                <td> {item.Founded} </td>
                <td>
                  <button
                    onClick={() => navigate(`/dashboard/editteam/${item.id}`)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
      <div className=" mt-[19rem]  hover:bg-blue-600  bg-blue-800	  h-12  ">
        <button
          onClick={() => navigate("/dashboard/addteam")}
          className="ml-4 w-[56rem] h-12 text-left text-[16px]"
        >
          + Add Team
        </button>
      </div>

      {/* <div className="ml-[20rem] top-60 absolute bg-slate-200 text-left flex justify-evenly w-[50rem]	">
        <h1 className=" w-10">ID</h1>
        <h1>Name</h1>
        <h1>Logo</h1>
        <h1>Stadium</h1>
        <h1>Countey</h1>
        <h1>Founded</h1>
      </div>
      <div className="absolute top-[16.5rem] ">
        {teams.map((item) => {
          return (
            <div className=" ">
              <div className="ml-[20rem] h-10 bg-slate-200 text-left flex justify-evenly items-center	 w-[50rem]">
                <h1> {item.id} </h1>
                <h1> {item.teamName} </h1>
                <h1>
                  <img className="w-4" src={item.logoUrl} />
                </h1>
                <h1> {item.teamStaidum} </h1>
                <h1>{item.teamCountry}</h1>
                <h1>{item.Founded}</h1>
                <button
                  className="bg-slate-400 hover:bg-slate-700 rounded p-1"
                  onClick={() => navigate(`/dashboard/editteam/${item.id}`)}
                >
                  Edit
                </button>
              </div>
            </div>
          );
        })}
      </div> */}
    </div>
  );
};

export default TeamControl;
