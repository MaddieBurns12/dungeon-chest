import React from "react";
import { BrowserRouter, Link } from 'react-router-dom';

import Card  from "../../components/Card/Card.js";
import Sheet from '../../components/CharacterSheet/Sheet.js';
import Creation from '../../components/Creation/Creation.js';

export default function Nav() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (

<nav className="flex justify-between">
  <a className="text-xl 
    font-bold 
    leading-relaxed 
    inline-block 
    m-4 
    py-2 
    whitespace-nowrap 
  text-white" 
  href="/"> DUNGEON  CHEST</a>


  <ul className="grid grid-cols-3 m-4 
    py-2 "> 
    <li className="">
      <a className="px-3 py-2 flex items-center text-white hover:opacity-75" href="/Card">Characters</a>
      {/* <a className="px-3 py-2 flex items-center text-white hover:opacity-75" href="/Creation">New Hero</a>
      <a className="px-3 py-2 flex items-center text-white hover:opacity-75" href="/Login">Log Out</a> */}
    </li>
    <li>
    <a className="px-3 py-2 flex items-center text-white hover:opacity-75" href="/Creation">New Hero</a>
    </li>
    <li>
    <a className="px-3 py-2 flex items-center text-white hover:opacity-75" href="/Login">Log Out</a>
    </li>
  </ul>

</nav>















































    
  );
}
