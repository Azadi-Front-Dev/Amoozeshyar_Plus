import React from "react";

const InputLogin = ({ type, placeholder }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full border-2 border-My-gray  rounded-2xl p-3"
    />
  );
};

export default InputLogin;
