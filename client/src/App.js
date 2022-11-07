
import Card from './components/Card/Card.js';
import Sheet from './components/CharacterSheet/Sheet.js';
import Creation from './components/Creation/Creation.js';
import './App.css'; 
import React  from 'react';

function App() {
  return (
    <div className="grid place-items-center min-h-screen xl:grid-cols-2 bg-white">
    <>
    <Sheet />
    <Card /> 
    <Creation />
    </>
    </div>
  );
}

export default App;

require("dotenv").config();
require("./config/database").connect();
const express = require("express");

const app = express();

app.use(express.json());

// Logic goes here

module.exports = app;