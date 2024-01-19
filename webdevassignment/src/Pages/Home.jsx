import React, { useState } from "react";
import Quiz from "../Components/Quiz";
import { data } from "../assests/data";

const Home = () => {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showQuizzes, setShowQuizzes] = useState([false, false, false]);
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  const handleStudentChange = (student) => {
    setSelectedStudent(student);
    setShowQuizzes([
      student === "Student 1",
      student === "Student 2",
      student === "Student 3",
    ]);
    setSelectedQuiz(null);
  };

  const handleQuizClick = (quizNumber) => {
    setShowQuizzes((prev) => prev.map((_, index) => index + 1 === quizNumber));
    setSelectedQuiz(quizNumber);
  };

  return (
    <div className="">
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
            <option value="Student 1">Student 1</option>
            <option value="Student 2">Student 2</option>
            <option value="Student 3">Student 3</option>
          </select>
        </div>
      )}

      <ul
        className={`flex md:mx-32 mx-10 gap-4 ${selectedQuiz ? "hidden" : ""}`}
      >
        {[1, 2, 3].map((quizNumber) => (
          <li key={quizNumber}>
            <button
              className={`border border-teal-400 md:p-10 p-4 text-center rounded-md hover:bg-teal-400 hover:text-white text-lg ${
                showQuizzes[quizNumber - 1]
                  ? ""
                  : "cursor-not-allowed opacity-50"
              }`}
              onClick={() => handleQuizClick(quizNumber)}
              disabled={!showQuizzes[quizNumber - 1]}
            >
              Quiz {quizNumber}
            </button>
          </li>
        ))}
      </ul>

      {selectedQuiz !== null && <Quiz data={data} num={selectedQuiz} />}
    </div>
  );
};

export default Home;
