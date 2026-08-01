import React, { useState } from "react";
import InputLogin from "../Components/Login/InputLogin";
import { IoIosArrowBack } from "react-icons/io";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { forgetpasswordSchema } from "../Validation/auth.schema";
const Forgotpassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitSuccessful },
  } = useForm({
    defaultValues: {
      unicode: "",
    },
    resolver: zodResolver(forgetpasswordSchema),
  });
  const [number, setNumber] = useState("");
  const numberhandle = () => {
    setNumber(event.target.value);
  };
  const SendForm = (data) => {
    console.log(data);
  };
  return (
    <form
      onSubmit={handleSubmit(SendForm)}
      className=" w-full h-screen bg-My-blue flex flex-col items-center justify-center gap-7 p-3"
    >
      <h3 className=" flex items-center text-white text-[24px] gap-2">
        فراموشی رمز عبور
        <IoIosArrowBack />
      </h3>
      <div className="flex-col items-center justify-start w-full max-w-100   bg-white rounded-[20px] p-4">
        <div className="w-full flex flex-col items-center justify-center  p-3 gap-5">
          <h5 className=" text-[16px] ">
            لطفا شماره دانشجویی خود را وارد نمایید
          </h5>
          <InputLogin
            type="text"
            placeholder="  شماره دانشجویی"
            {...register("unicode")}
          />
          {errors.unicode && (
            <span className="text-sm text-red-500">
              {errors.unicode.message}
            </span>
          )}
          <button
            type="submit"
            className={`w-full border-2 border-My-gray  ${isValid ? "bg-indigo-600" : "bg-My-purlpe"} text-white  rounded-2xl p-3 hover:cursor-pointer`}
          >
            ارسال پیامک
          </button>
        </div>
      </div>
    </form>
  );
};

export default Forgotpassword;
