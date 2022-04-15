import { UserContext } from "./UserContext";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";

const AddCouch = () => {
  const {couch, setCouch} = useContext(UserContext);

  const [couchNameInput, setCouchNameInout] = useState();
  const [couchIdInput, setCouchIdInout] = useState();
  const [couchTeamInput, setCouchTeamInout] = useState();
  const [couchLogoInput, setCouchLogoInout] = useState();
  const [couchNationInput, setCouchNationInout] = useState();




const AddCouch = () => {
  const arr = [...couch]
  arr.push({
    id: couchIdInput ,
    name: couchNameInput,
    team: couchTeamInput,
    couchImg: couchLogoInput,
    national: couchNationInput
  })
  setCouch(arr)
}

// console.log(couch)

  return (
    <>
      <div className="absolute left-[16rem] bg">
        <div className="text-center absolute left-10 top-2">
          <b>
            <h1 className="text-slate-400">Add Couch</h1>
          </b>
          <input
            value={couchNameInput}
            onChange={(e) => setCouchNameInout(e.target.value)}
            className="w-[20rem] text-center mt-4 h-8 rounded-md bg-slate-400 hover:bg-slate-300 "
          />
        </div>

        <div className="text-center absolute left-10 top-[7rem]">
          <b>
            <h1 className="text-slate-400">Add ID</h1>
          </b>
          <input
            value={couchIdInput}
            onChange={(e) => setCouchIdInout(e.target.value)}
            className="w-[20rem] text-center mt-4 h-8 rounded-md bg-slate-400 hover:bg-slate-300 "
          />
        </div>

        <div className="text-center absolute left-10 top-[14rem]">
          <b>
            <h1 className="text-slate-400">Add Team</h1>
          </b>
          <input
            value={couchTeamInput}
            onChange={(e) => setCouchTeamInout(e.target.value)}
            className="w-[20rem] text-center mt-4 h-8 rounded-md bg-slate-400 hover:bg-slate-300 "
          />
        </div>

        <div className="text-center absolute left-10 top-[21rem]">
          <b>
            <h1 className="text-slate-400">Add nationality</h1>
          </b>
          <input
            value={couchNationInput}
            onChange={(e) => setCouchNationInout(e.target.value)}
            className="w-[20rem] text-center mt-4 h-8 rounded-md bg-slate-400 hover:bg-slate-300 "
          />
        </div>

        <div className="text-center  absolute left-[30rem] top-2">
          <b>
            <h1 className="text-slate-400 ">Add Logo</h1>
          </b>
          <input
            value={couchLogoInput}
            onChange={(e) => setCouchLogoInout(e.target.value)}
            className="w-[20rem] text-center mt-4 h-8 rounded-md bg-slate-400 hover:bg-slate-300"
          />
          <img
            className="ml-[5rem] mt-10 h-60 w-40 rounded-md"
            src={couchLogoInput}
          />
        </div>

        <div className="text-center   absolute left-[30rem] top-[22.5rem]">
          <Link to={"/dashboard/couchcontrol"}>
            <h1
              onClick={AddCouch}
              className="w-[20rem] text-center mt-4 h-8 rounded-md bg-slate-400 hover:bg-slate-300"
            >
              Add
            </h1>
          </Link>
        </div>
      </div>
    </>
  );
};

export default AddCouch;
