import React from "react";
import Quiz from "./Components/Quiz";
import { data } from "./assests/data";

const App = () => {
  return (
    <div className="font-Poppins">
      <Quiz data={data} num={1} />
    </div>
  );
};

export default App;
