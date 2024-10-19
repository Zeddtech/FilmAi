import React from "react";
import logo from "../assets/img/logo.png";
import Loginform from "../components/Loginform";

const Signuppage = () => {
  return (
    <div className="signupPage w-screen h-screen flex flex-col items-center justify-center relative">
      <div className="absolute top-5 left-5">
        <img
          src={logo}
          className="w-28 bg-gradient-to-b from-black/50"
          alt="Company Logo"
        />
      </div>

      <div className="flex flex-col items-center w-full">
        <Loginform formType="signup" />
      </div>
    </div>
  );
};

export default Signuppage;
