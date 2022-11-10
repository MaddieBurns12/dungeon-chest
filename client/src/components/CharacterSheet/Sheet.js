import React, { useEffect, useState } from 'react'
import orc from '../../assets/orc.png';
// import Strength from './strength.js';
import Charisma from './charisma.js';
// import Dexterity from './dexterity.js';
// import Intelligence from './intelligence.js';
// import Wisdom from './wisdom.js';
import { useQuery } from '@apollo/client'
import { QUERY_CHARACTERS } from '../../utils/queries';

const Sheet = () => {
    const { loading, data } = useQuery(QUERY_CHARACTERS);
    const characters = data?.me.characters || [];
    console.log('data', characters);

    const [selectedCharacter, setSelectedCharacter] = useState(null);

    useEffect(() => {
        if (!data) return;
        setSelectedCharacter(characters[0]);
    }, [data]);


    if (!selectedCharacter) {
        return <>Loading</>
    };

    const { name, level, class: characterClass, strength, constitution, dexterity, intelligence, wisdom, charisma  } = selectedCharacter;


  return (
<div>
    <div className="w-fit h-fit bg- shadow-lg rounded-lg overflow-hidden bg-silver m-4">

        <div className = " flex items-end">
            <img className="w-1/4 h-1/4 object-cover object-center mx-auto" 
                src={orc} 
                alt="avatar"></img>
        </div>

    <div className="flex flex-row justify-between" >
        <div className = " px-6 bg-gray-900  ">
            <h2 className = "text-2xl font-semibold text-gray-800">{name}</h2>
        </div>

        <div className = " px-6 bg-gray-900 basis-1/2 text-right">
            <p className = " text-lg text-gray-700 ">{`${characterClass}, level: ${level}`}</p>
        </div>

    </div>
{/* Attributes */}
        <div className = 'grid xl:grid-cols-2 xs:grid-col-1 py-2 px-4 '>

            <div className="flex items-center mt-4 text-gray-700">
                <h1 className="px-2 text-xl underline underline-offset-4 ">Strength: {strength}</h1>     
            </div>

            <div className="flex items-center mt-4 text-gray-700">
                <h1 className="px-2 text-xl underline underline-offset-4">Constitution: {constitution}</h1>
            </div>

            <div className="flex items-center mt-4 text-gray-700">
                <h1 className="px-2 text-xl underline underline-offset-4">Dexterity: {dexterity}</h1>
            </div>

            <div className="flex items-center mt-4 text-gray-700">
                <h1 className="px-2 text-xl underline underline-offset-4">Intelligence: {intelligence}</h1>
            </div>

            <div className="flex items-center mt-4 text-gray-700">
                <h1 className="px-2 text-xl underline underline-offset-4">Wisdom: {wisdom}</h1>
            </div>

            <div className="flex items-center mt-4 text-gray-700">
                <h1 className="px-2 text-xl underline underline-offset-4">Charisma: {charisma}</h1>
            </div>

        </div>
{/* Skill Checks */}
    <div className="grid grid-cols-3 sm:grid-col-1">

        <div>
        {/* <Strength /> */}
        </div>

        <div>
        {/* <Dexterity /> */}
        </div>

        <div>
        {/* <Wisdom /> */}
        </div>

        <div>
        <Charisma />
        </div>

        <div>
        {/* <Intelligence /> */}
        </div>

    </div>

    

        </div>

    </div>   
  )
}


export default Sheet;