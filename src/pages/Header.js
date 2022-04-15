import { Link } from "react-router-dom";
import logo from "../img/fotballLogo.png";

const Header = () => {
  return (
    <>
      <div className="header h-20 relative text-slate-300 	 ">
        <Link to="/">
          <div className=" flex absolute m-2 ">
            <img className="h-16 " src={logo} alt="PremierLeageLogo" />
            <h1 className="h-8 rounded mt-4 ml-4 hover:text-slate-800 hover:bg-slate-300">Football Leage App</h1>
          </div>
        </Link>
        <div className="flex justify-center  	">
          <Link to={"/teams"}>
            <button className="mt-[1.5rem] p-2 border m-2 hover:bg-gray-300 hover:text-slate-800	-">
              Teams
            </button>
          </Link>
          <Link to={"/Players"}>
            <button className="mt-[1.5rem] p-2 border m-2 hover:bg-gray-300 hover:text-slate-800">
              Players
            </button>
          </Link>
          <Link to={"/Couches"}>
            <button className="mt-[1.5rem] p-2 border m-2 hover:bg-gray-300 hover:text-slate-800">
              Couches
            </button>
          </Link>
        </div>
        <Link to={"/dashboard/login"}>
          <div className="flex justify-end   ">
            <button className="absolute top-[1.5rem] mr-8 border p-2 hover:bg-gray-300 hover:text-slate-800">
              Dashboard
            </button>
          </div>
        </Link>
      </div>
    </>
  );
};
export default Header;
