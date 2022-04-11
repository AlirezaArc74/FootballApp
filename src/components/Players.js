import { useContext, useState } from "react";
import { UserContext } from "./UserContext";

const Players = () => {
  const {chosenPlayer } =
    useContext(UserContext);



  return (
    <div className="">
      {chosenPlayer.map((item) => {
        console.log(item);
        return (
          <div className=" ml-20  w-[16rem] ">
            <div className="flex bg-gray-100 w-[18rem] changeWidth ">
              <img className="w-20" src={item?.img} />
              <div className="rectangle relative">
                <span className="text-white absolute top-6 left-2	">
                  {item?.number}
                </span>
              </div>
              <b>
                <h1 className="mt-6 ml-2 changeTextColor">{item?.name}</h1>
              </b>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Players;
