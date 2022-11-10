import React, {useEffect, useState} from 'react';
import orc from '../../assets/orc.png';
import Sheet from '../../components/CharacterSheet/Sheet.js';
import { QUERY_CHARACTERS } from '../../utils/queries';
import { useQuery, useMutation } from '@apollo/client';

const Card = () => {

const { loading, data} = useQuery(QUERY_CHARACTERS);
const characters = data?.me.characters || [];

const [selectedCharacter, setSelectedCharacter] = useState(null);

        useEffect(() => {
                if (!data) return;
                setSelectedCharacter(characters[characters.length - 1]);
        }, [data]);

        if (loading) {
                return <>Loading</>
        };

        if (characters.length < 1) return (
                <div className="p-6 bg-silver shadow-lg rounded-lg overflow-hidden my-4">
                        <h2>No Characters Created</h2>
                </div>
        ) ;

        const { name, level, class: characterClass, strength, constitution, dexterity, intelligence, wisdom, charisma  } = selectedCharacter;

    return (
//beginning of card structure
    <div className="sm:w-1/3 sm:h-fit lg:w-fit lg: bg-silver shadow-lg rounded-lg overflow-hidden my-4">

        <div className = " flex items-end">
        <img className="w-40 h-40 object-cover object-center mx-auto" 
        src={orc} alt="avatar"></img>
        </div>

        <div className = " px-6 bg-gray-900 ">
            <a href="/Sheet" className = "text-2xl font-semibold text-gray-800 text-center">{name}</a>
            <p className = " text-lg text-gray-700 text-center">{characterClass}</p>
            <p className = " text-lg text-gray-700 text-center">{level}</p>
        </div>

        <div className = "py-4 px-6 grid grid-cols-2 sm:grid-col-1 gap-5">
        <div className="flex items-center mt-4 text-gray-700 justify-evenly">
                    <h1 className="px-2 text-xl">Strength</h1>
                    <p className="text-lg">{strength}</p>
            </div>

            <div className="flex items-center mt-4 text-gray-700 justify-evenly">
                    <h1 className="px-2 text-xl">Constitution</h1>
                    <p className="text-lg">{constitution}</p>
            </div>

            <div className="flex items-center mt-4 text-gray-700 justify-evenly">
                    <h1 className="px-2 text-xl">Dexterity</h1>
                    <p className="text-lg">{dexterity}</p>
            </div>

            <div className="flex items-center mt-4 text-gray-700 justify-evenly">
                    <h1 className="px-2 text-xl">Intelligence</h1>
                    <p className="text-lg">{intelligence}</p>
            </div>

            <div className="flex items-center mt-4 text-gray-700 justify-evenly">
                    <h1 className="px-2 text-xl">Wisdom</h1>
                    <p className="text-lg">{wisdom}</p>
            </div>

            <div className="flex items-center mt-4 text-gray-700 justify-evenly">
                    <h1 className="px-2 text-xl">Charisma</h1>
                    <p className="text-lg">{charisma}</p>
            </div>
        </div>

    </div>
    )
}

export default Card;