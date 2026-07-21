import React from "react";
import InputLogin from "../Components/Login/InputLogin";
import Logo from "../Components/Login/Logo";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
const Signin = () => {
  return (
    <div className=" w-full h-screen bg-My-blue flex flex-col items-center justify-center gap-7 p-3">
      <h3 className=" flex items-center text-white text-[24px] gap-2">
        <IoIosArrowBack />
        Sign in
      </h3>
      <div className="flex-col items-center justify-start w-full max-w-100   bg-white rounded-[20px] p-4">
        <h3 className="text-My-blue text-[32px] font-bold "> Welcome Back</h3>
        <h5 className=" text-[16px] "> Hello there, sign in to continue</h5>

        <Logo />
        <div className="w-full flex flex-col items-center justify-center  p-3 gap-5">
          <InputLogin type="text" placeholder="Text inputCaption" />
          <InputLogin type="password" placeholder="Password" />

          <Link to={"/Forgotpassword"} className=" text-[16px] ">
            Forgot your password ?
          </Link>
          <button className="w-full border-2 border-My-gray bg-My-purlpe text-white  rounded-2xl p-3">
            Log in
          </button>

          <Link to={"/Signup"} className=" text-[16px] text-My-blue ">
            You dont have account ? Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signin;
