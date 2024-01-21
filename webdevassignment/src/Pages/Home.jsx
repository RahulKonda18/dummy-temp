import React, { useState } from "react";
import Quiz from "../Components/Quiz";
import { data } from "../assests/data";
import { Link } from "react-router-dom";
import Leaderboard from "../Components/Leaderboard";

const Home = () => {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [results, setResults] = useState({
    student1: 0,
    student2: 0,
    student3: 0,
  });
  const [totalScore, setTotalScore] = useState({
    student1: 0,
    student2: 0,
    student3: 0,
  });

  const handleStudentChange = (student) => {
    setSelectedStudent(student);
    setSelectedQuiz(null);
  };

  const handleQuizClick = (quizNumber) => {
    setSelectedQuiz(quizNumber);
  };

  const setSel = () => {
    setSelectedQuiz(null);
  };

  const handleQuizComplete = (score) => {
    setResults((prevResults) => {
      const updatedResults = {
        ...prevResults,
        [`student${selectedQuiz}`]:
          prevResults[`student${selectedQuiz}`] + score,
      };
      // Assuming totalScore is an object with student names as keys, update it too
      setTotalScore((prevTotalScore) => ({
        ...prevTotalScore,
        [`student${selectedQuiz}`]:
          prevTotalScore[`student${selectedQuiz}`] + score,
      }));
      return updatedResults;
    });
    setSelectedQuiz(null);
  };

  const isQuizEnabled = (quizNumber) => {
    return selectedStudent === `student${quizNumber}`;
  };

  return (
    <div className="">
      <div className="flex">
        <div>
          {!selectedQuiz && (
            <div className="dropdown border p-10 w-fit md:mx-32 m-10">
              <h1 className="text-teal-600 text-xl">Me and Math</h1>
              <label htmlFor="studentDropdown" className="mr-2 px-2">
                Select Student:
              </label>
              <select
                id="studentDropdown"
                onChange={(e) => handleStudentChange(e.target.value)}
                value={selectedStudent || ""}
                className="border p-4"
              >
                <option value="" disabled>
                  Select Student
                </option>
                <option value="student1">Student 1</option>
                <option value="student2">Student 2</option>
                <option value="student3">Student 3</option>
              </select>
            </div>
          )}
        </div>
        <div className="p-10 w-fit">
          <Leaderboard totalScore={totalScore} />
        </div>
      </div>

      <ul
        className={`flex md:mx-32 mx-10 gap-4 ${selectedQuiz ? "hidden" : ""}`}
      >
        {[1, 2, 3].map((quizNumber) => (
          <li key={quizNumber}>
            <button
              className={`border border-teal-400 md:p-10 p-4 text-center rounded-md hover:bg-teal-400 hover:text-white text-lg ${
                isQuizEnabled(quizNumber) ? "" : "cursor-not-allowed opacity-50"
              }`}
              onClick={() => handleQuizClick(quizNumber)}
              disabled={!isQuizEnabled(quizNumber)}
            >
              Quiz {quizNumber}
            </button>
          </li>
        ))}
      </ul>

      {selectedQuiz !== null && (
        <Quiz
          ss={setSel}
          data={data}
          num={selectedQuiz}
          onQuizComplete={handleQuizComplete}
        />
      )}
    </div>
  );
};

export default Home;
