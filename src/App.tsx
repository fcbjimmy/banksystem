import React from "react";
import Navbar from "./components/navbar/Navbar";
import Login from "./components/authentication/Login";
import Signup from "./components/authentication/Signup";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Errorpage } from "./pages/Errorpage";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Errorpage />} /> */}
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
