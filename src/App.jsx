import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Todo from "./components/Todo";
import ProtectedRoute from "./components/ProtectedRoute";
import "./App.css";

export default function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />            {/* Home / Welcome */}
          <Route path="/login" element={<Login />} />     {/* Login */}
          <Route
            path="/todo"
            element={
              <ProtectedRoute>
                <Todo />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Home />} />           {/* Default redirect */}
        </Routes>
      </main>
    </Router>
  );
}
