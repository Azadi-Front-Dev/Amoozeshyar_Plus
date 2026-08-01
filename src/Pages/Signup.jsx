import React, { useState } from "react";
import InputLogin from "../Components/Login/InputLogin";
import Logo from "../Components/Login/Logo";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema } from "../Validation/auth.schema";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitSuccessful },
  } = useForm({
    defaultValues: {
      firstname: "",
      lastname: "",
      nationalcode: "",
      birthdaydate: "",
      placeofissue: "",
      password: "",
      confirmpassword: "",
      terms: false,
    },
    resolver: zodResolver(signupSchema),
  });
  const SendForm = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(SendForm)}
      className="w-full bg-My-blue flex flex-col items-center justify-center gap-7 p-3"
    >
      <h3 className=" flex items-center text-white text-[24px] gap-2">
        ثبت نام
        <IoIosArrowBack />
      </h3>
      <div className="flex-col items-center justify-start w-full max-w-100   bg-white rounded-[20px] p-4">
        <Logo />
        <div className="w-full flex flex-col items-center justify-center  p-3 gap-5">
          <InputLogin
            type="text"
            placeholder="نام "
            {...register("firstname")}
          />
          {errors.firstname && (
            <span className="text-sm text-red-500">
              {errors.firstname.message}
            </span>
          )}
          <InputLogin
            type="text"
            placeholder="نام خانوادگی"
            {...register("lastname")}
          />
          {errors.lastname && (
            <span className="text-sm text-red-500">
              {errors.lastname.message}
            </span>
          )}
          <InputLogin
            type="text"
            placeholder="کدملی"
            {...register("nationalcode")}
          />
          {errors.nationalcode && (
            <span className="text-sm text-red-500">
              {errors.nationalcode.message}
            </span>
          )}
          <InputLogin
            type="text"
            placeholder="تاریخ تولد"
            {...register("birthdaydate")}
          />
          {errors.birthdaydate && (
            <span className="text-sm text-red-500">
              {errors.birthdaydate.message}
            </span>
          )}
          <InputLogin
            type="text"
            placeholder=" محل صدور"
            {...register("placeofissue")}
          />
          {errors.placeofissue && (
            <span className="text-sm text-red-500">
              {errors.placeofissue.message}
            </span>
          )}
          <InputLogin
            type="password"
            placeholder="کلمه عبور"
            {...register("password")}
          />
          {errors.password && (
            <span className="text-sm text-red-500">
              {errors.password.message}
            </span>
          )}
          <InputLogin
            type="password"
            placeholder="تکرار کلمه عبور"
            {...register("confirmpassword")}
          />
          {errors.confirmpassword && (
            <span className="text-sm text-red-500">
              {errors.confirmpassword.message}
            </span>
          )}
          <div className=" text-[16px] flex items-center justify-center gap-4">
            <input
              type="checkbox"
              placeholder="Password"
              className="w-6 h-6"
              {...register("terms")}
            />
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

          <button
            type="submit"
            className={`w-full border-2 border-My-gray  ${isValid ? "bg-indigo-600" : "bg-My-purlpe"} text-white  rounded-2xl p-3 hover:cursor-pointer`}
          >
            ثبت نام
          </button>

          <Link to={"/Signin"} className=" text-[16px] text-My-blue ">
            حساب دارید ؟ وارد حساب کاربری شوید
          </Link>
        </div>
      </div>
    </form>
  );
};

export default Signup;
