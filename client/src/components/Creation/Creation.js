import React from 'react';
import { useState } from 'react';
import Select from 'react-select';

export default function Creation() {

    const [name, setName] = useState('');


  return (
    <div className="w-fit h-fit bg- shadow-lg rounded-lg overflow-hidden my-4 bg-silver">
      <div className="py-4 px-6">
        <h2 className="text-center">Character Creation</h2>
        <div className="flex justify-evenly ">
          <input type="text" 
              name="name" 
              className=" px-4 py-2 border-b-2 border-gray-400 rounded-lg m-1"
              label="Character Name"
              placeholder="Character Name"
              value = {name}
              required >
          </input>

{/* Class */}
        <select name="class"id="level" className="rounded-lg m-1" required>
            <option value="" disable selected hidden>Select Class</option>
            <option value="barbarian">Barbarian</option>
            <option value="bard">Bard</option>
            <option value="cleric">Cleric</option>
            <option value="druid">Druid</option>
            <option value="fighter">Fighter</option>
            <option value="monk">Monk</option>
            <option value="paladin">Paladin</option>
            <option value="ranger">Ranger</option>
            <option value="rouge">Rouge</option>
            <option value="sorcerer">Sorcerer</option>
            <option value="warlock">Warlock</option>
            <option value="wizard">Wizard</option>  
        </select>
{/* Level */}
        <select name="level"id="level" className="rounded-lg m-1" required>
            <option value="" disable selected hidden>Select Level</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>    
        </select>
      </div>
 

      <div className="grid grid-cols-3 gap-1">
      
{/* Strength */}
      <div className="flex items-center mt-1 text-gray-700 justify-between">
        <label for="strength">Strength</label>
        <select name="strength"id="level" className="rounded-lg" required>
        <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option> 
        </select>
      </div>
{/* Constitution */}
      <div className="flex items-center mt-1 text-gray-700 justify-between">
        <label for="constitution">Constitution</label>
        <select name="constitution"id="level" className="rounded-lg">
        <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option> 
        </select>
      </div>
{/* Dexterity */}
      <div className="flex items-center mt-1 text-gray-700 justify-between">
        <label for="dexterity" >Dexterity</label>
        <select name="dexterity"id="level" className="rounded-lg" required>
        <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option> 
        </select>
      </div>
{/* Intelligence */}
      <div className="flex items-center mt-1 text-gray-700 justify-between">
        <label for="intelligence">Intelligence</label>
        <select name="intelligence"id="level" className="rounded-lg" required>
        <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option> 
        </select>
      </div>
{/* Wisdom */}
      <div className="flex items-center mt-1 text-gray-700 justify-between">
        <label for="wisdom">Wisdom</label>
        <select name="wisdom"id="level" className="rounded-lg" required>
        <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option> 
        </select>
      </div>
{/* Charisma */}
      <div className="flex items-center mt-1 text-gray-700 justify-between">
        <label for="charisma">Charisma</label>
        <select name="charisma"id="level" className="rounded-lg" required>
        <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option> 
        </select>
      </div>
      </div>
{/* Character Background */}
      <div className="flex justify-between mt-1">
        
        <textarea placeholder="Please tell us about your characters good side"
          className="rounded-lg mt-1 mr-1 w-full"></textarea>
        
       
        <textarea placeholder="Please tell us about your characters bad side"
          className="rounded-lg mt-1 w-full"></textarea>
        
      </div>

      <div>
        <textarea placeholder="What is your character carrying?"
            className="rounded-lg mt-1 w-full"></textarea>
      </div>

    </div>
    
    </div>
  )
}
