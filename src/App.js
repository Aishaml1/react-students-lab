import React from "react";
import './App.css';
import studentsArr from "./StudentsData.js";
import Students from "./Students";

function App() {
  const students = studentsArr.map((ele, index) => {
    return (
      <Students 
        name={ele.name}
        bio={ele.bio}
        scores={ele.scores}
        key={index}
        
      />
    )
  })
  
  return (
    <div className="AllStudents">
      {students}
    </div>
  );
}
  
export default App;
