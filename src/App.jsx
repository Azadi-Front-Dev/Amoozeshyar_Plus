import "./App.css";
import { useState } from "react";
import { useRoutes } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import Home from "./Pages/Home";

const routes = [{ path: "/", element: <Home /> }];
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
