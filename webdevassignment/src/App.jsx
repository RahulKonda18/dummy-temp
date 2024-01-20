import React from "react";
import Quiz from "./Components/Quiz";
import { data } from "./assests/data";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Leaderboard from "./Components/Leaderboard";

const App = () => {
  return (
    <div className="font-Poppins">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz1" element={<Quiz num={1} data={data} />} />
          <Route path="/quiz2" element={<Quiz num={2} data={data} />} />
          <Route path="/quiz3" element={<Quiz num={3} data={data} />} />
          <Route path="/leaderboard" element={<Quiz num={3} data={data} />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
