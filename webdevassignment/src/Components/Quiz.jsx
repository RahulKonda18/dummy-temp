import React, { useState, useEffect, useRef } from "react";

const Quiz = ({ data, num }) => {
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
        setScore((score) => score + 1);
      }
      option_array;
    }
  };

  const next = () => {
    if (lock) {
      setIndex(index + 1);
      setQuestion(data[index + 1]); // Use a function to update the index
      setLock(false);
      option_array.map((opt) => {
        opt.current.classList.remove("selected");
        return null;
      });
      if (index == data.length - 1) {
        setResult(true);
      }
    }
  };

  return (
    <div className="flex items-center justify-center mt-40">
      <div className="container flex flex-col w-2/4 border-black border p-12 gap-4 rounded-lg shadow-lg">
        <h1 className="font-extrabold text-teal-800">Quiz App {num}</h1>
        <hr />
        {result ? (
          <>
            <h2>
              You scored {score} out of {data.length}
            </h2>
          </>
        ) : (
          <>
            <h1>
              {index + 1}. {question.question}
            </h1>
            <ul className="flex flex-col px-4 gap-2 ">
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
          </>
        )}
      </div>
    </div>
  );
};

export default Quiz;
