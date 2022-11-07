import React from 'react';
import orc from '../../assets/orc.png';

function Card() {
    return (
    <div className="max-w-sm bg-silver shadow-lg rounded-lg overflow-hidden my-4">

        <div className = " flex items-end">
        <img className="w-1/4 h-1/4 object-cover object-center mx-auto" 
        src={orc} alt="avatar"></img>
        </div>

        <div className = " px-6 bg-gray-900 ">
            <h1 className = "text-2xl font-semibold text-gray-800 text-center">Player Name</h1>
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