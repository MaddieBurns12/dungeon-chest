import { gql } from '@apollo/client';

export const LOGIN = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
            }
        }
    }
`;

export const ADD_CHARACTER = gql`
mutation ADD_CHARACTER ($name: String!, $level: String!, $race: String!, $class: String!, $gender: String!, $strength: String!, $constitution: String!, $dexterity: String!, $wisdom: String!, $intelligence: String!, $charisma: String!, $good: String!, $bad: String!) {
    addCharacter(name: $name, level: $level, race: $race, class: $class, gender: $gender, strength: $strength, constitution: $constitution, dexterity: $dexterity, wisdom: $wisdom, intelligence: $intelligence, charisma: $charisma, good: $good, bad: $bad) {
      wisdom
      strength
      race
      name
      level
      intelligence
      dexterity
      constitution
      class
      charisma
      bad
      _id
      gender
      good
      inventory
    }
  }
`;
