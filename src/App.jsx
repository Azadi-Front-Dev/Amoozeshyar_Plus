import "./App.css";
import { useState } from "react";
import { useRoutes } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import Home from "./Pages/Home";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import Forgotpassword from "./Pages/Forgotpassword";
import Otp from "./Pages/Otp";


const routes = [
  { path: "/", element: <Home /> },
  { path: "/Signin", element: <Signin /> },
  { path: "/Signup", element: <Signup /> },
  { path: "/Forgotpassword", element: <Forgotpassword/> },
  { path: "/Otp", element: <Otp/> },
];
function App() {
  const router = useRoutes(routes);
  return (
    <>
      <div className=""></div>
      {router}
    </>
  );
}

export default App;
