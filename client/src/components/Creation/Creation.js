import React from 'react';
import { useState } from 'react';
import Select from 'react-select';
import { useQuery, useMutation } from '@apollo/client';
import { ADD_CHARACTER } from '../../utils/mutations';


const Creation = () => {

const [addCharacter, {error}] = useMutation(ADD_CHARACTER);
const [newCharacter, setNewCharacter] = useState({})

const handleChange = (event) => {

  const {name, value} = event.target
    setNewCharacter({
      ...newCharacter, 
        [name] :Number.isInteger(value) ? parseInt(value) : value
    })
   
}

const handleSubmit = async (event) => {
  // event.preventDefault()
  console.log(newCharacter);
  try {
    const {data} = await ADD_CHARACTER({
      variables:{...newCharacter}
    })
  } catch(e) {
    console.log(error)
  }
  setNewCharacter({})
}

console.log(newCharacter)



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
              defaultValue="Hero"
              onChange={handleChange}
              required >
          </input>

{/* Class */}
        <select name="class" id="class" className="rounded-lg m-1" onChange={handleChange} required>
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
        <select name="level"id="level" className="rounded-lg m-1" onChange={handleChange} required  >
            <option value="" disable selected hidden>Select Level</option>
            <option value="1" >1</option>
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
        <select name="strength"id="strength" className="rounded-lg" onChange={handleChange} required>
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
        <select name="constitution"id="level" className="rounded-lg" onChange={handleChange}>
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
        <select name="dexterity"id="dexterity" className="rounded-lg" onChange={handleChange} required>
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
        <select name="intelligence"id="intelligence" className="rounded-lg" onChange={handleChange} required>
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
        <select name="wisdom"id="wisdom" className="rounded-lg" onChange={handleChange} required>
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
        <select name="charisma"id="charisma" className="rounded-lg"  onChange={handleChange} required>
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
          className="rounded-lg mt-1 mr-1 w-full" name="good" onChange={handleChange}></textarea>
        
       
        <textarea placeholder="Please tell us about your characters bad side"
          className="rounded-lg mt-1 w-full" name="bad" onChange={handleChange}></textarea>
        
      </div>

      <div>
        <textarea placeholder="What is your character carrying?"
            className="rounded-lg mt-1 w-full" name="inventory" onChange={handleChange}></textarea>
      </div>

      <button
      className="bg-alert-good cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded  block  outline-none focus:outline-none" 
      type="submit" name="submitHero" onClick={handleSubmit}
        >Create Hero
      </button>

    </div>
    
    </div>
  )
}

export default Creation;