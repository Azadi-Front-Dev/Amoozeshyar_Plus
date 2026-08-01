import InputLogin from "../Components/Login/InputLogin";
import Logo from "../Components/Login/Logo";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signinSchema } from "../Validation/auth.schema";

const Signin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful, isValid },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: zodResolver(signinSchema),
  });

  const sendform = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(sendform)}
      className="w-full h-screen bg-My-blue flex flex-col items-center justify-center gap-7 p-3"
    >
      <h3 className=" flex items-center text-white text-[24px] gap-2">
        ورود به حساب
        <IoIosArrowBack />
      </h3>
      <div className="flex-col items-center justify-start w-full max-w-100   bg-white rounded-[20px] p-4">
        <Logo />

        <div className="w-full flex flex-col items-center justify-center  p-3 gap-5">
          <InputLogin
            type="text"
            placeholder="نام کاربری"
            {...register("username")}
          />
          {errors.username && (
            <span className="text-sm text-red-500">
              {errors.username.message}
            </span>
          )}

          <InputLogin
            type="password"
            placeholder="رمز عبور"
            {...register("password")}
          />
          {errors.password && (
            <span className="text-sm text-red-500">
              {errors.password.message}
            </span>
          )}
          <Link to={"/Forgotpassword"} className=" text-[16px] ">
            فراموشی رمز عبور
          </Link>
          <button
            type="submit"
            className={`w-full border-2 border-My-gray  ${isValid ? "bg-indigo-600" : "bg-My-purlpe"} text-white  rounded-2xl p-3 hover:cursor-pointer`}
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
