import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Quiz = (props) => {
  console.log(props);
  const { data, num, onQuizComplete, ss } = props;
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(data[index]);
  const [lock, setLock] = useState(false);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(false);

  let option1 = useRef(null);
  let option2 = useRef(null);
  let option3 = useRef(null);
  let option4 = useRef(null);

  let option_array = [option1, option2, option3, option4];

  const checkAns = (e, ans) => {
    if (lock === false) {
      e.target.classList.add("selected");
      setLock(true);
      if (ans === question.ans) {
        setScore((prevScore) => prevScore + 1);
      }
    }
  };

  const next = () => {
    if (lock) {
      setIndex((prevIndex) => prevIndex + 1);
      if (index === data.length - 1) {
        setResult(true);
        console.log("quiz completed:", score);
        onQuizComplete(score);
      } else {
        setQuestion(data[index + 1]);
      }
      setLock(false);
      option_array.forEach((opt) => {
        opt.current.classList.remove("selected");
      });
    }
  };

  const goToHome = () => {
    console.log("home clicked");
    ss();
  };

  useEffect(() => {
    if (result) {
      // Optional: You can perform any cleanup or additional logic here
    }
  }, [result]);

  return (
    <div className="flex items-center justify-center md:mt-40 md:m-0 m-10">
      <div className="container flex flex-col md:w-2/4 w-fit border-black border md:p-12 p-6 gap-4 rounded-lg shadow-lg">
        <h1 className="font-extrabold text-teal-800">Quiz App {num}</h1>
        <hr />
        {result ? (
          <div>
            <h2>
              You scored {score} out of {data.length}
            </h2>
            <button
              className="border-teal-800 border p-2 w-1/3 rounded-md hover:bg-teal-600 hover:border-white hover:text-white"
              onClick={goToHome}
            >
              Go to Home
            </button>
          </div>
        ) : (
          <div>
            <h1>
              {index + 1}. {question.question}
            </h1>
            <ul className="flex flex-col md:px-4 px-1 gap-2 ">
              <li
                ref={option1}
                className="border p-2  rounded-md"
                onClick={(e) => checkAns(e, 1)}
              >
                {question.option1}
              </li>
              <li
                ref={option2}
                className="border p-2 rounded-md"
                onClick={(e) => checkAns(e, 2)}
              >
                {question.option2}
              </li>
              <li
                ref={option3}
                className="border p-2 rounded-md"
                onClick={(e) => checkAns(e, 3)}
              >
                {question.option3}
              </li>
              <li
                ref={option4}
                className="border p-2 rounded-md"
                onClick={(e) => checkAns(e, 4)}
              >
                {question.option4}
              </li>
            </ul>
            <div className="flex items-center justify-center flex-col gap-2">
              <button
                className="border-teal-800 border p-2 w-1/3 rounded-md hover:bg-teal-600 hover:border-white hover:text-white"
                onClick={next}
              >
                Next
              </button>
              <div className="index text-teal-800">
                {index + 1} of {data.length} Questions
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
