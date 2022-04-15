import "../login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const navigate = useNavigate()

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  return (
    <div className="background">
      <button 
      className="bg-sky-500 p-2 w-[5rem]"
      onClick={() => navigate('/')}>back</button>
      <div className="bg-red-400 w-[18rem] h-[18rem] absolute top-[11rem] left-[27rem] bg-sky-600 opacity-60 shadow-sky-50 "></div>

      <div className="w-[18rem] h-[18rem] absolute  top-[11rem] left-[27rem] ">
        <b>
          <h1 className="m-2 text-center">Login</h1>{" "}
        </b>
        <div className="ml-8 ">
          <label className=""> usrname </label>
          <div className="mt-2 mb-8">
            <input />
          </div>

          <label>password</label>
          <div className="mt-2">
            <input />
          </div>
        </div>

        <button className="ml-[6rem] w-[6rem] mt-[2.5rem] bg-blue-800 p-2 rounded text-white hover:bg-blue-600 ">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
