import logo from './logo.svg';
import './App.css';
import Group from './grouppost/grouppage.js'
import React, { Component }  from 'react';
import Home from './pages/Home';
import Lostdetail from './lostpet/lostdetail';
import { BrowserRouter as Router, Routes, Route, NavLink, Navigate } from "react-router-dom";

function App() {
  return (
    <Router>
      <div id="nav-bord">
            <h1>Find My Pet</h1>
            <div style={{width:'30%',display:'flex',justifyContent:'space-around',alignItems:'center'}}>
                <NavLink end to="/">Home</NavLink>
                <NavLink to="/profile">น้องหาย</NavLink>
                <NavLink to="/detail">detail</NavLink>
            </div>
        </div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/profile" element={<Group />}/>
        <Route path="/detail" element={<Lostdetail />}/>
      </Routes>
    </Router>
  );
}

export default App;
