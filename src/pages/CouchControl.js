import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";

const CouchControl = () => {
  const { couch, setCouch } = useContext(UserContext);

  const navigate = useNavigate();

  couch.map((item) => console.log(item.id));

  return (
    <>
      <div className="absolute left-[16rem] bg">
        <div className=" mt-10">
          <table className="bg-slate-300">
            <tr className="bg-slate-500">
              <th className="w-20">ID</th>
              <th className="w-60">Name</th>
              <th className="w-60">Current Team</th>
              <th className="w-60">nationality</th>
              <th className="w-60">Edit</th>
            </tr>
            {couch.map((item) => {
              return (
                <tr className="text-[13px] ">
                  <th className="text"> {item.id} </th>
                  <th className="flex justify-between text">
                    <img className="w-10 h-10" src={item.couchImg} />
                    {item.name}
                  </th>
                  <th className="text"> {item.team} </th>
                  <th className="text"> {item.national} </th>
                  <th
                    onClick={() =>
                      navigate(`/dashboard/editcouch/${item.id}`)
                    }
                    className="text txt cursor-pointer hover:bg-slate-600"
                  >
                    Edit
                  </th>
                </tr>
              );
            })}
          </table>
        </div>
        <div className=" mt-[29.1rem] w-[56rem]  bg-slate-600 h-8 p-1 text-slate-200 text-[15px] cursor-pointer">
          <h1 onClick={() => navigate("/dashboard/editcouch")}>
            + Add New Couch
          </h1>
        </div>
      </div>
    </>
  );
};

export default CouchControl;
