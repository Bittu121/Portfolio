import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Layout/Home";
import Education from "./components/pages/Education";
import Stack from "./components/pages/Stack";
import Projects from "./components/pages/Projects";
import WorkExperience from "./components/pages/WorkExperience";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/stack" element={<Stack />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/experience" element={<WorkExperience />} />
      </Route>
    </Routes>
  );
}

export default App;
