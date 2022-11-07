import React from 'react'
import orc from '../../assets/orc.png';
import Strength from './strength.js';
import Charisma from './charisma.js';
import Dexterity from './dexterity.js';
import Intelligence from './intelligence.js';
import Wisdom from './wisdom.js';

export default function Sheet() {
  return (
<div>
    <div className="w-fit h-fit bg- shadow-lg rounded-lg overflow-hidden my-4 bg-silver">

        <div className = " flex items-end">
            <img className="w-1/4 h-1/4 object-cover object-center mx-auto" 
                src={orc} 
                alt="avatar"></img>
        </div>

    <div className="flex flex-row justify-between" >
        <div className = " px-6 bg-gray-900  ">
            <h1 className = "text-2xl font-semibold text-gray-800">Player Name</h1>
        </div>

        <div className = " px-6 bg-gray-900 basis-1/2 text-right">
            <p className = " text-lg text-gray-700 ">Class, Level, Subclass</p>
        </div>

    </div>
{/* Attributes */}
        <div className = 'grid xl:grid-cols-2 xs:grid-col-1 py-4 px-6 '>

            <div className="flex items-center mt-4 text-gray-700">
                <h1 className="px-2 text-xl underline underline-offset-4 ">Strength</h1>     
            </div>

            <div className="flex items-center mt-4 text-gray-700">
                <h1 className="px-2 text-xl underline underline-offset-4">Constitution</h1>
            </div>

            <div className="flex items-center mt-4 text-gray-700">
                <h1 className="px-2 text-xl underline underline-offset-4">Dexterity</h1>
            </div>

            <div className="flex items-center mt-4 text-gray-700">
                <h1 className="px-2 text-xl underline underline-offset-4">Intelligence</h1>
            </div>

            <div className="flex items-center mt-4 text-gray-700">
                <h1 className="px-2 text-xl underline underline-offset-4">Wisdom</h1>
            </div>

            <div className="flex items-center mt-4 text-gray-700">
                <h1 className="px-2 text-xl underline underline-offset-4">Charisma</h1>
            </div>

        </div>
{/* Skill Checks */}
    <div className="grid grid-cols-3 sm:grid-col-1">

        <div>
        <Strength />
        </div>

        <div>
        <Dexterity />
        </div>

        <div>
        <Wisdom />
        </div>

        <div>
        <Charisma />
        </div>

        <div>
        <Intelligence />
        </div>

    </div>

    

        </div>

    </div>   
  )
}
