import React from 'react';
import orc from '../../assets/orc.png';
import Sheet from '../../components/CharacterSheet/Sheet.js';


const Card = () => {


    return (
//beginning of card structure
    <div className="sm:w-1/3 sm:h-fit lg:w-fit lg: bg-silver shadow-lg rounded-lg overflow-hidden my-4">

        <div className = " flex items-end">
        <img className="w-40 h-40 object-cover object-center mx-auto" 
        src={orc} alt="avatar"></img>
        </div>

        <div className = " px-6 bg-gray-900 ">
            <a href="/Sheet" className = "text-2xl font-semibold text-gray-800 text-center">Player Name</a>
            <p className = " text-lg text-gray-700 text-center">Class, Level, Subclass</p>
        </div>

        <div className = "py-4 px-6 grid grid-cols-2 sm:grid-col-1 gap-5">
        <div className="flex items-center mt-4 text-gray-700 justify-evenly">
                    <h1 className="px-2 text-xl">Strength</h1>
                    <p className="text-lg">10</p>
            </div>

            <div className="flex items-center mt-4 text-gray-700 justify-evenly">
                    <h1 className="px-2 text-xl">Constitution</h1>
                    <p className="text-lg">10</p>
            </div>

            <div className="flex items-center mt-4 text-gray-700 justify-evenly">
                    <h1 className="px-2 text-xl">Dexterity</h1>
                    <p className="text-lg">10</p>
            </div>

            <div className="flex items-center mt-4 text-gray-700 justify-evenly">
                    <h1 className="px-2 text-xl">Intelligence</h1>
                    <p className="text-lg">10</p>
            </div>

            <div className="flex items-center mt-4 text-gray-700 justify-evenly">
                    <h1 className="px-2 text-xl">Wisdom</h1>
                    <p className="text-lg">10</p>
            </div>

            <div className="flex items-center mt-4 text-gray-700 justify-evenly">
                    <h1 className="px-2 text-xl">Charisma</h1>
                    <p className="text-lg">10</p>
            </div>
        </div>

    </div>
    )
}

export default Card;