
import Card from './components/Card/Card.js';
import Sheet from './components/CharacterSheet/Sheet.js';
import Creation from './components/Creation/Creation.js';
import Menu from './components/Menu/Menu.js';
import Login from './components/Login/Login.js';
import './App.css';
import React from 'react';

function App() {
  return (
    <div className=" bg-gray ">
      <Menu />
      <div className="grid place-items-center min-h-screen">
        <>
          <Login />
          {/* <Sheet />
    <Card />  
    <Creation /> */}
        </>
      </div>
    </div>
  );
}
export default App;

// require("dotenv").config();
// require("./config/database").connect();
// const express = require("express");

// const app = express();

// app.use(express.json());

// // Logic goes here

// module.exports = app;