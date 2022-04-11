import { Outlet } from "react-router-dom";
import bg from "../img/stadium.webp";
import "../App.css";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <Header />
      <div className="background">
        <Outlet />
      </div>
    </>
  );
};
export default Home;
