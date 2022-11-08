import { gql } from '@apollo/client';

export const QUERY_CHARACTERS = gql`
    query getCharacters($character: ID) {
        characters(character: $character) {
            _id
            name
            level
            race
            strength { level }
            constitution { level }
            dexterity { level }
            wisdom { level }
            intelligence { level }
            charisma { level }
        }
    }
`;

export const QUERY_USER = gql`
    {
        user {
            username
            characters {
                _id
                name
                level
                race
                strength { level }
                constitution { level }
                dexterity { level }
                wisdom { level }
                intelligence { level }
                charisma { level }
            }
        }
    }
`;