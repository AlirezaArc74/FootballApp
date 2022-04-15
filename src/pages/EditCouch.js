import { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { UserContext } from "./UserContext";

const EditCouch = () => {
  const { findCouchById, saveChangeCouch, setSaveChangeCouch } =
    useContext(UserContext);

  const [couchNameInput, setCouchNameInput] = useState();
  const [couchTeamInput, setCouchTeamInput] = useState();
  const [couchNationInput, setCouchNationInput] = useState();
  const [couchLogoInput, setCouchLogoInput] = useState();




  let { id } = useParams();

  useEffect(() => {
    const thisCouch = findCouchById(id);
    setCouchNameInput(thisCouch.name);
    setCouchTeamInput(thisCouch.team)
    setCouchNationInput(thisCouch.national)
    setCouchLogoInput(thisCouch.couchImg)
  }, []);

  const saveChange = () => {
    const arr = findCouchById(id);
    arr.name = couchNameInput;
    arr.team = couchTeamInput
    arr.national = couchNationInput
    arr.couchImg = couchLogoInput
    setCouchNameInput(arr.name, arr.team, arr.national, arr.couchImg)
  };

  return (
    <div className="absolute left-[16rem] bg">
      <div className="text-center absolute left-10 top-2">
        <b>
          <h1 className="text-slate-400">Edit Name</h1>
        </b>
        <input
          value={couchNameInput}
          onChange={(e) => setCouchNameInput(e.target.value)}
          className="w-[20rem]  text-center mt-4 h-8 rounded-md bg-slate-400 hover:bg-slate-300 "
        />
      </div>
      <div className="text-center absolute left-10 top-[7rem]">
        <b>
          <h1 className="text-slate-400 mt-4">Edit Current Team</h1>
        </b>
        <input
          value={couchTeamInput}
          onChange={(e) => setCouchTeamInput(e.target.value)}
          className="w-[20rem] text-center mt-4 h-8 rounded-md bg-slate-400 hover:bg-slate-300 "
        />
      </div>
      <div className="text-center absolute left-10 top-[14rem]">
        <b>
          <h1 className="text-slate-400 mt-4">Edit Current Team</h1>
        </b>
        <input
          value={couchNationInput}
          onChange={(e) => setCouchNationInput(e.target.value)}
          className="w-[20rem] text-center mt-4 h-8 rounded-md bg-slate-400 hover:bg-slate-300 "
        />
      </div>
      <div className="text-center  absolute left-[30rem] top-2">
        <b>
          <h1 className="text-slate-400 ">Edit Player Logo</h1>
        </b>
        <input
          value={couchLogoInput}
          onChange={(e) => setCouchLogoInput(e.target.value)}
          className="w-[20rem] text-center  h-8 rounded-md bg-slate-400 hover:bg-slate-300"
        />
        <img
          className="ml-[5rem] mt-6 w-40 rounded-md"
          src={couchLogoInput}
        />
      </div>
      <div className="text-center mt-8 absolute left-[30rem] top-[18.6rem]">
        <Link to={"/dashboard/couchcontrol"}>
          <button
            className="w-[20rem] text-center mt-4  h-8 rounded-md bg-slate-400 hover:bg-slate-300"
            onClick={saveChange}
          >
            Edit
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EditCouch;
