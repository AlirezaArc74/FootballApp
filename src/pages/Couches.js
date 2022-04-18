import { useContext } from "react";
import { UserContext } from "./UserContext";
import { useEffect, useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal";

const Couches = () => {
  const { couch, setCouch } = useContext(UserContext);
  const [showCouch, setShowCouch] = useState();
  const [selectedTeam, setSelectedTeam] = useState();
  const [searchInput, setSearchInput] = useState("");
  const [searchInputByCurrentTeam, setSearchInputByCurrentTeam] = useState("");

  const navigate = useNavigate;

  const showModalClick = (id) => {
    const p = couch.findIndex((item) => item.id == id);
    setSelectedTeam(couch[p]);
    setShowCouch(true);
  };

  return (
    <>
      <div className="absolute top-[6rem] left-4 ">
        {couch
          .filter((item) => {
            return item.name.toLowerCase().includes(searchInput.toLowerCase());
          })
          .filter((item) => {
            return item.team
              .toLowerCase()
              .includes(searchInputByCurrentTeam.toLowerCase());
          })
          .map((item) => {
            return (
              <div
                onClick={() => showModalClick(item.id)}
                className=" top-20 bg-slate-400 w-[15rem] h-[6rem] mb-4
           round hover:bg-slate-200 cursor-pointer  "
              >
                <div className=" flex">
                  <img className="w-20 h-[6rem] round " src={item.couchImg} />
                  <div className="ml-[1rem] leading-7	">
                    <p> {item.name} </p>
                    <p> {item.national} </p>
                    <p> {item.team} </p>
                  </div>
                </div>
              </div>
            );
          })}

        <div className="absolute top-0  w-0 bg-red-400">
          <b>
            <h1 className=" absolute  top-[1.5rem] w-[18rem] ml-[26rem] text-slate-100 ">
              Select A Team To Couch Details
            </h1>
          </b>
          <Modal />
        </div>

        {showCouch ? (
          <>
            <div className="absolute left-[18rem] border bg-slate-800 top-0 w-[31rem] h-[30rem]">
              <img className="m-2 w-28 h-36" src={selectedTeam.couchImg} />
              <div className="text-slate-400 ml-4 ">
                <b>
                  <h1 className="text-[17px] mt-4">{selectedTeam.teamName}</h1>
                </b>
                <div className="mt-[1.5rem] leading-9	w-[10rem] text-[15px] ">
                  <h1> Name: {selectedTeam.name} </h1>
                  <h1> Nationality : {selectedTeam.national} </h1>
                  <h1> Team : {selectedTeam.team} </h1>
                </div>
              </div>

              <div className="absolute text-slate-300 w-[18.6rem] top-8 right-3">
                <div className="flex justify-between">
                  <b>
                    <label>Experience</label>
                  </b>
                  <b>
                    <label> {selectedTeam.experience} </label>
                  </b>
                </div>
                <input
                  readOnly="true"
                  type="range"
                  value={selectedTeam.experience}
                  className="attackRange"
                  max="120"
                />

                <div className="flex justify-between">
                  <b>
                    <label>LeaderShipSkills</label>
                  </b>
                  <b>
                    <label> {selectedTeam.leaderShipSkills} </label>
                  </b>
                </div>
                <input
                  readOnly="true"
                  type="range"
                  value={selectedTeam.leaderShipSkills}
                  className="midfieldRange"
                  max="120"
                />

                <div className="flex justify-between">
                  <b>
                    <label>CouchHistory</label>
                  </b>
                  <b>
                    <label> {selectedTeam.couchHistory} </label>
                  </b>
                </div>
                <input
                  readOnly="true"
                  type="range"
                  value={selectedTeam.couchHistory}
                  className="defenseRange"
                  max="120"
                />
              </div>
            </div>
          </>
        ) : null}
      </div>

      <div className="bg-slate-700 absolute  right-0 w-[20rem] top-[5.6rem] mr-2 h-[30rem] opacity-80 ">
        <b>
          <h1 className="text-[20px] mt-4 text-center">Find Your Couch</h1>
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
      <div className="absolute  right-[3rem] top-[16rem] ">
        <h1 className=" text-center">Search By Current Team</h1>
        <input
          value={searchInputByCurrentTeam}
          onChange={(e) => setSearchInputByCurrentTeam(e.target.value)}
          className="rounded-md bg-slate-500 text-center w-[14rem] p-2 "
          type="text"
        />
      </div>
    </>
  );
};
export default Couches;
