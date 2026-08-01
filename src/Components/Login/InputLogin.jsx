import React, { forwardRef } from "react";

const InputLogin = forwardRef(
  ({ type, placeholder, className = "", maxLength, ...props }, ref) => {
    return (
      <input
        maxLength={maxLength}
        ref={ref}
        type={type}
        placeholder={placeholder}
        className={`w-full border-2 border-My-gray rounded-2xl py-3 px-8 ${className}`}
        {...props}
      />
    );
  },
);

InputLogin.displayName = "InputLogin";

export default InputLogin;
