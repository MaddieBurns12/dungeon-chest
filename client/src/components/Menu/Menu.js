import React from "react";

export default function Menu({ fixed }) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <>
      <div className="flex flex-wrap py-2">
        <div className="w-full px-4">
          <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-pink-500 rounded">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
              <div className="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
             
                <button
                  className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                  type="button"
                  onClick={() => setMenuOpen(!menuOpen)}
                >Menu</button>
                   <a
                  className="text-xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap  text-white"
                  href="home"
                >
                  DUNGEON CHEST
                </a>
              </div>
              <div
                className={
                  "lg:flex flex-grow items-center align-items-end" +
                  (menuOpen ? " flex" : " hidden")
                }
                id="example-navbar-info"
              >
                <ul className="flex flex-col lg:flex-row list-none lg:ml-auto ">
                  <li className="nav-item">
                    <a
                      className="px-3 py-2 flex items-center  leading-snug text-white hover:opacity-75"
                      href="#Cards"
                    >
                      Characters
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="px-3 py-2 flex items-center leading-snug text-white hover:opacity-75"
                      href="#Creation"
                    >
                    Create Character
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="px-3 py-2 flex items-center leading-snug text-white hover:opacity-75"
                      href="#logout"
                    >
                    Log Out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}