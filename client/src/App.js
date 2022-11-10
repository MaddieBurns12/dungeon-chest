
import Card from './components/Card/Card.js';
import Sheet from './components/CharacterSheet/Sheet.js';
import Creation from './components/Creation/Creation.js';
import Menu from './components/Menu/Menu.js';
import Login from './components/Login/Login.js';
import './App.css'; 
import React  from 'react';

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

const isMobileDevice = useMediaQuery({
  query: "(min-device-width: 480px)",
});

const isTabletDevice = useMediaQuery({
  query: "(min-device-width: 768px)",
});

const isLaptop = useMediaQuery({
  query: "(min-device-width: 1024px)",
});

const isDesktop = useMediaQuery({
  query: "(min-device-width: 1200px)",
});

const isBigScreen = useMediaQuery({
  query: "(min-device-width: 1201px )",
});

export default App;

// require("dotenv").config();
// require("./config/database").connect();
// const express = require("express");

// const app = express();

// app.use(express.json());

// // Logic goes here

// module.exports = app;