import React from "react";
import Courses from "./Courses/Courses";
import Home from "./Home/Home";
import { Route, Routes } from "react-router-dom";
import Signup from "./Components/Signup";
import Contact from "./Components/Contact";

function App() {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
      </div>
    </>
  );
}

export default App;
