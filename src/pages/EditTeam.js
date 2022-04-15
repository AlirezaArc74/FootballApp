import { UserContext } from "./UserContext";
import { useContext, useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import "../App.css";

const EditTeam = () => {
  const {
    findTeamById,
    saveChangeTeam,
    setSaveChangeTeam,
    liverpoolTeam,
    setLiverpoolTeam,
    chosenPlayer,
    setChosenPlayer,
    updateTeam,
    setUpdateTeam,
    findPlayerById,
  } = useContext(UserContext);
  const [nameInput, setInputName] = useState();
  const [hasError, setError] = useState(false);
  const [countryInput, setCountryInput] = useState();
  const [stadiumInput, setStadiumInput] = useState();
  const [teamTypeInput, setTeamTypeInput] = useState();
  const [teamLogoInput, setTeamLogoInput] = useState();
  const [teamFoundedInput, setTeamFoundedInput] = useState();

  let { id } = useParams();
  // console.log(id);

  useEffect(() => {
    const thisTeam = findTeamById(id);
    if (!thisTeam) return setError(true);
    setInputName(thisTeam.teamName);
    setCountryInput(thisTeam.teamCountry);
    setStadiumInput(thisTeam.teamStaidum);
    setTeamTypeInput(thisTeam.teamType);
    setTeamLogoInput(thisTeam.logoUrl);
    setTeamFoundedInput(thisTeam.Founded);
    // console.log(thisTeam);
  }, []);

  // console.log(findTeamById(id))
  const saveChange = () => {
    const arr = findTeamById(id);
    arr.teamName = nameInput;
    arr.teamCountry = countryInput;
    arr.teamStaidum = stadiumInput;
    arr.teamType = teamTypeInput;
    arr.logoUrl = teamLogoInput;
    arr.Founded = teamFoundedInput;
    setSaveChangeTeam(
      arr.teamName,
      arr.teamCountry,
      arr.teamStaidum,
      arr.teamType,
      arr.logoUrl,
      arr.Founded
    );
  };
  // console.log(nameInput);

  const chooePlayerClick = (id) => {
    const p = liverpoolTeam.findIndex(item => item.id === id)
    console.log(liverpoolTeam[p].isSelected)
    const arr = [...liverpoolTeam]
    arr.push({
      isSelected: true
    })
    setLiverpoolTeam(arr)
    liverpoolTeam[p].isSelected = !liverpoolTeam[p].isSelected
  };
  
  // console.log(chosenPlayer)
  
  if (hasError) return <h1> no such team found</h1>;

  return (
    <>
      <div className=" absolute left-[16rem] bg">
        <div className="">
          <div className="text-center absolute left-10 top-2">
            <b>
              <h1 className="text-slate-400">Edit Team Name</h1>
            </b>
            <input
              className="w-[20rem]  text-center mt-2 h-8 rounded-md bg-slate-400 hover:bg-slate-300 "
              value={nameInput}
              onChange={(e) => setInputName(e.target.value)}
            />
          </div>
          <div className="text-center  absolute left-10 top-[7rem]">
            <b>
              <h1 className="text-slate-400 ">Edit Team Country</h1>
            </b>
            <input
              value={countryInput}
              onChange={(e) => setCountryInput(e.target.value)}
              className="w-[20rem] text-center mt-4 h-8 rounded-md bg-slate-400 hover:bg-slate-300"
            />
          </div>

          <div className="text-center absolute left-10 top-[14rem]">
            <b>
              <h1 className="text-slate-400 ">Edit Team Stadium</h1>
            </b>
            <input
              value={stadiumInput}
              onChange={(e) => setStadiumInput(e.target.value)}
              className="w-[20rem] text-center mt-4 h-8 rounded-md bg-slate-400 hover:bg-slate-300"
            />
          </div>

          <div className="text-center absolute left-10 top-[20rem]">
            <b>
              <h1 className="text-slate-400 ">Edit Team Fondation</h1>
            </b>
            <input
              value={teamFoundedInput}
              onChange={(e) => setTeamFoundedInput(e.target.value)}
              className="w-[20rem] text-center mt-4 h-8 rounded-md bg-slate-400 hover:bg-slate-300"
            />
          </div>

          <div className="text-center mt-8 absolute left-[30rem] top-[-2rem]">
            <b>
              <h1 className="text-slate-400 ">Edit Team Type</h1>
            </b>
            <select
              className="w-[20rem]  text-center mt-4 h-8 rounded-md bg-slate-400 hover:bg-slate-300"
              value={teamTypeInput}
              onChange={(e) => setTeamTypeInput(e.target.value)}
            >
              <option>Club Team</option>
              <option>National Team</option>
            </select>
          </div>

          <div className="text-center mt-8 absolute left-[30rem] top-[4.6rem]">
            <b>
              <h1 className="text-slate-400 ">Edit Team Logo</h1>
            </b>
            <input
              value={teamLogoInput}
              onChange={(e) => setTeamLogoInput(e.target.value)}
              className="w-[20rem] text-center mt-4 h-8 rounded-md bg-slate-400 hover:bg-slate-300"
            />
            <img className="ml-[6rem] mt-8 w-20" src={teamLogoInput} />
          </div>

          {/* {findTeamById(id)?.teamName} */}
          <div className="text-center mt-8 absolute left-[30rem] top-[19.5rem]">
            <Link to={"/dashboard/teamcontrol"}>
              <button
                className="w-[20rem] text-center mt-4  h-8 rounded-md bg-slate-400 hover:bg-slate-300"
                onClick={saveChange}
              >
                Edit
              </button>
            </Link>
          </div>
        </div>

        <div className="">
          <table className="mt-20  text-sm text-center absolute left-[8rem] top-[24rem]">
            <tr>
              <th className="w-40">ID</th>
              <th className="w-40">Name</th>
              <th className="w-40">Team</th>
              <th className="w-40">Position</th>
            </tr>
            {liverpoolTeam.map((item) => {
              return (
                <tr
                  onClick={() => chooePlayerClick(item.id)}
                  className={
                    item.isSelected ? "selected anotherclass" : "anotherclass"
                  }
                >
                  <td>{item.id} </td>
                  <td> {item.name} </td>
                  <td> {item.team} </td>
                  <td> {item.position} </td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </>
    
  );
};
export default EditTeam;
