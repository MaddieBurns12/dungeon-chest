import React, {useState, Component}  from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Card from './components/Card/Card.js';
import Sheet from './components/CharacterSheet/Sheet.js';
import Creation from './components/Creation/Creation.js';
import Nav from './components/Nav/Nav';

import Login from './components/Login/Login.js';
import './App.css';


function App() {
 
  return (
    
    <div className=" bg-gray  ">
      <Nav />
      <div className="grid place-items-center min-h-screen">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Creation" element={<Creation />} />
          <Route path="/Card" element={<Card />} />
          <Route path="/Sheet" element={<Sheet />} />
        </Routes>
        
      </div>
    </div>

  );
};


export default App;
