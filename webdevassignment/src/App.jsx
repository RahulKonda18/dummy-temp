import React from "react";
import Quiz from "./Components/Quiz";
import { data } from "./assests/data";
import Home from "./Pages/Home";
import { Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="font-Poppins">
      {/* <Quiz data={data} num={1} /> */}
      <Home />
    </div>
  );
};

export default App;
