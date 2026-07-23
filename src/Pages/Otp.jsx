import React from "react";
import InputLogin from "../Components/Login/InputLogin";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
const Otp = () => {
  return (
    <div className=" w-full h-screen bg-My-blue flex flex-col items-center justify-center gap-7 p-3">
      <h3 className=" flex items-center text-white text-[24px] gap-2">
        فراموشی رمز عبور
        <IoIosArrowBack />
      </h3>
      <div className="flex-col items-center justify-start w-full max-w-100   bg-white rounded-[20px] p-4">
        <div className="w-full flex flex-col justify-center  p-3 gap-5">
          <h2 className=" text-[16px] font-bold ">
            کد دریافت شده را وارد نمایید
          </h2>
          <div className="flex items-center justify-center gap-5">
            <InputLogin type="number" placeholder="Code" />
            <button className="w-57 border-2 bg-My-blue text-white  rounded-2xl p-3">
              ارسال مجدد
            </button>
          </div>

          <div className="flex items-center justify-centerfont-bold text-My-gray">
            <p>
              کد تأیید به شماره همراه شما ارسال شد. لطفاً کد دریافتی را وارد
              کنید.
              {/* <span className="font-semibold text-My-blue cursor-pointer m-1">
                (+84) 0398829xxx
              </span> */}
            </p>
          </div>
          <h5 className=" text-[16px] ">
            این کد تا ۱۰ دقیقه پس از ارسال معتبر است. اگر پیامک را دریافت
            نکردید، دوباره درخواست ارسال کد دهید.
          </h5>
          <button className="w-full border-2 border-My-gray bg-My-purlpe text-white  rounded-2xl p-3">
            تغییر رمز عبور
          </button>
          <Link
            to={"/Forgotpassword"}
            className=" text-[16px] text-My-blue mx-auto"
          >
            اصلاح کد ملی یا شماره دانشجویی  
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Otp;
