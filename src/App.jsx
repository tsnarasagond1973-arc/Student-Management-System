import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import EditStudent from "./pages/EditStudent";
import StudentDetails from "./pages/StudentDetails";
import AddStudent from "./pages/AddStudent";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import StudentList from "./pages/StudentList";
import About from "./pages/About";

function App() {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Shreya",
      email: "shreya@gmail.com",
      course: "Java",
    },
    {
      id: 2,
      name: "Rahul",
      email: "rahul@gmail.com",
      course: "React",
    },
    {
      id: 3,
      name: "Anjali",
      email: "anjali@gmail.com",
      course: "Python",
    },
  ]);
  const deleteStudent = (id) => {
  const updatedStudents = students.filter(
    (student) => student.id !== id
  );

  setStudents(updatedStudents);
};

  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
  path="/students"
  element={
    <StudentList
      students={students}
      deleteStudent={deleteStudent}
    />
  }
/>
        <Route
  path="/students/:id"
  element={<StudentDetails students={students} />}
/>
<Route
  path="/edit/:id"
  element={
    <EditStudent
      students={students}
      setStudents={setStudents}
    />
  }
/>

        <Route
  path="/add"
  element={
    <AddStudent
      students={students}
      setStudents={setStudents}
    />
  }
/>


        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;