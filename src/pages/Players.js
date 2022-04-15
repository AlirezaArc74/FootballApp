import { useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import ProgressBar from "../components/ProgressBar";
import Modal from "../components/Modal";

const Players = () => {
  const { liverpoolTeam, currentPlayer, setCurrentPlayer } =
    useContext(UserContext);
  const [showModal, setShowModal] = useState(false);
  const [searchByNameInput, setSearchByNameInput] = useState("");
  const [searchByPositionInput, setSearchByPositionInput] = useState("");

  const showModalClick = (id) => {
    console.log("working");
    setShowModal(true);
    // setInnerWidth(currentPlayer?.offensive);
    // if (showModal === true) {
    //   setShowModal(false);
    // }
    const p = liverpoolTeam.findIndex((item) => item.id == id);
    if (p === -1) return null;
    setCurrentPlayer(liverpoolTeam[p]);
    // return liverpoolTeam[p]
  };
  console.log(currentPlayer?.offensive);

  return (
    <>
      <div className=" w-[20rem] h-[38rem] over ">
        {liverpoolTeam
          .filter((item) => {
            return item.name
              ?.toLowerCase()
              .includes(searchByNameInput.toLowerCase());
          })
          .filter((item) => {
            return item.position
              .toLowerCase()
              .includes(searchByPositionInput.toLowerCase());
          })
          .map((item) => {
            return (
              <div
                onClick={() => showModalClick(item.id)}
                className="bg-slate-400 cursor-pointer hover:bg-slate-200  w-[17rem] m-4 flex justify-betweem text-slate-800 round  "
              >
                <img className="w-28 h-28 round" src={item?.img} />
                <div className="  ml-1 ">
                  <p className=""> {item.name} </p>
                  <p className=""> number: {item.number} </p>
                  <p className=""> {item.position} </p>
                  <p className=""> {item.team} </p>
                </div>
              </div>
            );
          })}
      </div>

      <div className=" relative top-[-37rem] ml-6 ">
        <b>
          <h1 className=" absolute top-[1rem] ml-[26rem] text-slate-100 ">
            Select A Player To Read Details
          </h1>
        </b>
        <Modal />
      </div>
      {showModal ? (
        <>
          <div className="absolute top-[6rem] w-[32rem] h-[38rem] left-[19rem] bg-slate-900 opacity-80"></div>
          <div className="absolute top-[6rem] w-[32rem] h-[38rem] left-[19rem] text-slate-400">
            <img
              className="w-[10rem] h-[13rem] m-4 rounded-[100%] "
              src={currentPlayer?.img}
            />
            <div className="absolute top-4 right-[0.5rem] leading-8 h-[16rem] over	">
              <b>
                <h1 className="  text-[25px] "> {currentPlayer.name} </h1>
              </b>

              <ProgressBar />
            </div>

            <div>
              

            </div>

            <div className="absolute top-[3.2rem] right-[8rem] leading-8 "></div>
          </div>
        </>
      ) : null}
      <div className="bg-slate-600 absolute right-2 top-[6rem] w-[19rem] h-[38rem]  opacity-80 "></div>
      <div className="absolute right-2 top-[6rem] w-[19rem] h-[38rem] text-center text-slate-900 ">
        <b>
          <h1 className="mt-4 text-[20px] ">Find Your Player</h1>{" "}
        </b>
        <div className="ml-2 w-[18rem] mt-6 ">
          <label>Search By Name</label>
          <input
            value={searchByNameInput}
            onChange={(e) => setSearchByNameInput(e.target.value)}
            className="mt-2 ml-4 rounded-md p-2 bg-slate-400"
          />

          <div className="ml-2 w-[18rem] mt-6 ">
            <label>Search By Position</label>
            <input
              value={searchByPositionInput}
              onChange={(e) => setSearchByPositionInput(e.target.value)}
              className="mt-2 rounded-md p-2 bg-slate-400"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Players;
