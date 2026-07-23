const InputLogin = ({ type, value, placeholder, onChange, className = "" }) => {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className={`w-full border-2 border-My-gray rounded-2xl py-3 px-8 ${className}`}
    />
  );
};

export default InputLogin;
