// src/App.js

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'; // make sure App.css exists in src/

// Pages
import Home from "./pages/Home";
import Careers from "./pages/Careers";
import CareerDetails from "./pages/CareerDetail";
import CareerInsights from "./pages/CareerInsights";
import Questions from "./pages/Questions";
import Result from "./pages/Result";
import Profile from "./pages/Profile";
import Chatbot from "./pages/Chatbot";
import Dashboard from "./pages/Dashboard";
import Login  from "./pages/Login";
import CareersData from "./pages/CareersData";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home */}
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/careers" element={<Careers />}/>
        <Route path="/insights" element={<CareerInsights />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/result" element={<Result />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/career/:id" element={<CareerDetails />}/>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/careersData" element={<CareersData />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/Login" element={<Login />}/>
        <Route path="/home" element={<Home />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;