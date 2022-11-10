import { gql } from '@apollo/client';

export const QUERY_CHARACTERS = gql`
    {
        me {
            _id
            characters {
                name
                level
                race
                class
                gender
                strength
                dexterity
                constitution
                wisdom
                intelligence
                charisma
                good
                bad
                inventory
            }
        }
    }
`;
// export const QUERY_CHARACTER = gql `
//     query character ($id: ID!) {
//         character(_id: $id) {
//             name
//             level
//             race
//             class
//             gender
//             strength
//             constitution
//             dexterity
//             intelligence
//             wisdom
//             charisma
//             good
//             bad
//             inventory
//     }
//   }
// }
// `