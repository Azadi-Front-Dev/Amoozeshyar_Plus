import React from "react";
import InputLogin from "../Components/Login/InputLogin";
import Logo from "../Components/Login/Logo";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
const Signup = () => {
  return (
    <div className="w-full bg-My-blue flex flex-col items-center justify-center gap-7 p-3">
      <h3 className=" flex items-center text-white text-[24px] gap-2">
        ثبت نام
        <IoIosArrowBack />
      </h3>
      <div className="flex-col items-center justify-start w-full max-w-100   bg-white rounded-[20px] p-4">
        <Logo />
        <div className="w-full flex flex-col items-center justify-center  p-3 gap-5">
          <InputLogin type="text" placeholder="نام " />
          <InputLogin type="text" placeholder="نام خانوادگی" />
          <InputLogin type="text" placeholder="کدملی" />
          <InputLogin type="text" placeholder="تاریخ تولد" />
          <InputLogin type="text" placeholder=" محل صدور" />
          <InputLogin type="password" placeholder="کلمه عبور" />
          <InputLogin type="password" placeholder="تکرار کلمه عبور" />
          <div className=" text-[16px] flex items-center justify-center gap-4">
            <input type="checkbox" placeholder="Password" className="w-6 h-6" />
            <div className="flex flex-wrap items-center gap-2 max-w-60">
              <span>با شرایط استفاده و قوانین سامانه</span>
              <Link
                to={"/"}
                className="text-My-blue font-semibold cursor-pointer"
              >
                آموزشیار
              </Link>
              <span>موافقم و آن را می‌پذیرم.</span>
            </div>
          </div>
          <button className="w-full border-2 border-My-gray bg-My-purlpe text-white  rounded-2xl p-3">
            ثبت نام
          </button>

          <Link to={"/Signin"} className=" text-[16px] text-My-blue ">
            حساب دارید ؟ وارد حساب کاربری شوید
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
