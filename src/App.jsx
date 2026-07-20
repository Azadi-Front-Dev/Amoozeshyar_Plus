import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="w-30 mx-auto">
        <h1 className="text-[34px] font-bold">Home</h1>
      </div>
    </>
  );
}

export default App;
