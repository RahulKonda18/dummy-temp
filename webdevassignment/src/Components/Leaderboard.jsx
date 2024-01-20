import React from "react";

const Leaderboard = ({ totalScore }) => {
  // Ensure totalScore is defined and not null
  if (!totalScore || typeof totalScore !== "object") {
    return (
      <>
        <h1>no results</h1>
      </>
    ); // or display an appropriate message
  }

  // Convert the totalScore object into an array of results
  const results = Object.entries(totalScore).map(([studentName, score]) => ({
    studentName,
    score,
  }));

  return (
    <div className="text-center">
      <h1>Leaderboard</h1>
      <table className="border border-teal-600 mx-auto">
        <thead>
          <tr>
            <th className="border border-teal-600 pr-4 p-2 text-teal-800">
              Student Name
            </th>
            <th className="p-2 text-teal-800 border border-teal-600">Score</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result, index) => (
            <tr key={index}>
              <td className=" border-teal-600 border-r pr-4 p-2">
                {result.studentName}
              </td>
              <td className="p-2">{result.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
