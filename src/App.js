import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "../src/pages/login.css"
import Login from "./pages/login";
import Register from "./pages/register";
import Home from "../src/pages/home";
import Front from "../src/pages/front";
import PrivateRoute from "../src/privateroute";

const App = () => {
  return (
    <BrowserRouter>
      <Front />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Route */}
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
