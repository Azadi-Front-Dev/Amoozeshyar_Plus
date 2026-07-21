import React from "react";
import InputLogin from "../Components/Login/InputLogin";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
const Otp = () => {
  return (
    <div className=" w-full h-screen bg-My-blue flex flex-col items-center justify-center gap-7 p-3">
      <h3 className=" flex items-center text-white text-[24px] gap-2">
        <IoIosArrowBack />
        Forgot password
      </h3>
      <div className="flex-col items-center justify-start w-full max-w-100   bg-white rounded-[20px] p-4">
        <div className="w-full flex flex-col justify-center  p-3 gap-5">
          <h2 className=" text-[16px] font-bold ">Type a code</h2>
          <div className="flex items-center justify-center gap-5">
            <InputLogin type="text" placeholder="Code" />
            <button className="w-[40%] border-2 bg-My-blue text-white  rounded-2xl p-3">
              Resend
            </button>
          </div>

          <div className="flex items-center justify-centerfont-bold text-My-gray">
            <p>
              We texted you a code to verify your phone number
              <span className="font-semibold text-My-blue cursor-pointer m-1">
                (+84) 0398829xxx
              </span>
            </p>
          </div>
          <h5 className=" text-[16px] ">
            This code will expired 10 minutes after this message. If you don't
            get a message.
          </h5>
          <button className="w-full border-2 border-My-gray bg-My-purlpe text-white  rounded-2xl p-3">
            Change password
          </button>
          <Link to={"/Forgotpassword"} className=" text-[16px] text-My-blue mx-auto">Wrong number ? change it</Link>
        </div>
      </div>
    </div>
  );
};

export default Otp;
