import React, { useState } from "react";
import InputLogin from "../Components/Login/InputLogin";
import Logo from "../Components/Login/Logo";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const UsernamechangeHandler = (event) => {
    // console.log(event.target.value);
    setUsername(event.target.value);
  };
  const PasswordchangeHandler = (event) => {
    // console.log(event.target.value);
    setPassword(event.target.value);
  };
  const Submithandle = () => {
    console.log(username);
    console.log(password);
  };

  return (
    <form onSubmit={Submithandle} className="w-full h-screen bg-My-blue flex flex-col items-center justify-center gap-7 p-3">
      <h3 className=" flex items-center text-white text-[24px] gap-2">
        ورود به حساب
        <IoIosArrowBack />
      </h3>
      <div className="flex-col items-center justify-start w-full max-w-100   bg-white rounded-[20px] p-4">
        <Logo />

        <div className="w-full flex flex-col items-center justify-center  p-3 gap-5">
          <InputLogin
            type="text"
            value={username}
            placeholder="نام کاربری"
            onChange={UsernamechangeHandler}
          />

          <InputLogin
            type="password"
            value={password}
            placeholder="رمز عبور"
            onChange={PasswordchangeHandler}
          />
          {/* <span className="text-[16px] text-red-500">نام کاربری صحیح نیست</span> */}

          <Link to={"/Forgotpassword"} className=" text-[16px] ">
            فراموشی رمز عبور
          </Link>
          <button
            type="submit"
            className="w-full border-2 border-My-gray bg-My-purlpe text-white  rounded-2xl p-3"
          >
            ورود به سامانه
          </button>

          <Link to={"/Signup"} className=" text-[16px] text-My-blue ">
            ساخت حساب کاربری جدید
          </Link>
        </div>
      </div>
    </form>
  );
};

export default Signin;
