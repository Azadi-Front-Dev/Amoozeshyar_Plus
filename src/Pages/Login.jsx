import React from "react";
import InputLogin from "../Components/Login/InputLogin";

const Login = () => {
  return (
    <div className=" w-full h-screen bg-My-blue flex flex-col items-center justify-center gap-7 p-3">
      <h3 className="text-white text-[24px]">Log in</h3>
      <div className="flex-col items-center justify-start w-full max-w-100   bg-white rounded-[20px] p-4">
        <h3 className="text-My-blue text-[32px] font-bold "> Welcome Back</h3>
        <h5 className=" text-[16px] "> Hello there, sign in to continue</h5>

        <div className="w-full flex items-center justify-center p-10">
          <img src="./Images/Login/Logo.png " alt="Logo" className="w-50" />
        </div>
        <div className="w-full flex flex-col items-center justify-center  p-3 gap-5">
          <InputLogin type="text" placeholder="Text inputCaption" />
          <InputLogin type="password" placeholder="Password" />

          <h5 className=" text-[16px] text-My-gray ">Forgot your password ?</h5>
          <button className="w-full border-2 border-My-gray bg-My-purlpe text-white  rounded-2xl p-3">
            Log in
          </button>
          <h5 className=" text-[16px] text-My-blue ">You dont have account ? Sign in</h5>
        </div>
      </div>
    </div>
  );
};

export default Login;
