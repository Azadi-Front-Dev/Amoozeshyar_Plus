import React from "react";

const InputLogin = ({ type, placeholder }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full border-2 border-My-gray  rounded-2xl py-3 px-8"
    />
  );
};

export default InputLogin;
