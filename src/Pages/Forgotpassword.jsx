import React from "react";
import InputLogin from "../Components/Login/InputLogin";
import { IoIosArrowBack } from "react-icons/io";
const Forgotpassword = () => {
  return (
    <div className=" w-full h-screen bg-My-blue flex flex-col items-center justify-center gap-7 p-3">
      <h3 className=" flex items-center text-white text-[24px] gap-2">
        <IoIosArrowBack />
        فراموشی رمز عبور
      </h3>
      <div className="flex-col items-center justify-start w-full max-w-100   bg-white rounded-[20px] p-4">
        <div className="w-full flex flex-col items-center justify-center  p-3 gap-5">
          <h5 className=" text-[16px] ">
           لطفا کد ملی یا شماره دانشجویی خود را وارد نمایید
          </h5>
          <InputLogin type="text" placeholder="کد ملی یا شماره دانشجویی" />


          <button className="w-full border-2 border-My-gray bg-My-purlpe text-white  rounded-2xl p-3">
            ارسال پیامک
          </button>
        </div>
      </div>
    </div>
  );
};

export default Forgotpassword;
