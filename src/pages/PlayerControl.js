import { useContext } from "react";
import { UserContext } from "./UserContext";
import "../App.css";
import { useNavigate } from "react-router-dom";

const PlayerControl = () => {
  const { liverpoolTeam, setLiverpoolTeam } = useContext(UserContext);

  let navigate = useNavigate();

  return (
    <>
      <div className="absolute left-[16rem] text-[12px] bg">
        <div className=" ">
          <table>
            <tr className=" ">
              <th className="w-20">ID</th>
              <th className="w-40">Name</th>
              <th className="w-20">Number</th>
              <th className="w-40">Team</th>
              <th className="w-40">Position</th>
              <th className="w-20">Edit</th>
            </tr>
            {liverpoolTeam.map((item) => {
              return (
                <tr className="bg-slate-200">
                  <th className="text"> {item.id} </th>
                  <th className="flex justify-between text">
                    <img className="w-8 rounded-md " src={item.img} />{" "}
                    {item.name}
                  </th>
                  <th className="text"> {item.number} </th>
                  <th className="text"> {item.team} </th>
                  <th className="text"> {item.position} </th>
                  <th
                    className="text hover:bg-slate-600 cursor-pointer txt"
                    onClick={() => navigate(`/dashboard/editplayer/${item.id}`)}
                  >
                    Edit
                  </th>
                </tr>
              );
            })}
          </table>
          <div className="bg-slate-600 h-8 p-1 text-slate-200 text-[15px] cursor-pointer">
            <h1 onClick={() => navigate("/dashboard/addplayer")}>
              + Add New Player
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayerControl;
