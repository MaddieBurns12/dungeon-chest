import React from 'react'

export default function Login() {
  const [menuOpen, setMenuOpen] = React.useState(true);
  return (
   
    <div className="w-fit h-fit bg- shadow-lg rounded-lg overflow-hidden my-4 bg-silver align-middle">
      <div className="py-4 px-6">
        <h2 className="text-center">Login</h2>
        <div className="flex justify-evenly ">

          <input type="text" 
              name="name" 
              className=" px-4 py-2 border-b-2 border-gray-400 rounded-lg mr-1"
              label="Character Name"
              value = "Username"
              required >
          </input>
          <input type="text" 
              name="name" 
              className=" px-4 py-2 border-b-2 border-gray-400 rounded-lg mr-1"
              label="Character Name"

              value = "Password"
              required >
          </input>

          <button
                  className="bg-alert-bad cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded  block lg:hidden outline-none focus:outline-none"
                  type="button">
                    Log In
          </button>

          <button
                  className="bg-alert-bad cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded  block lg:hidden outline-none focus:outline-none"
                  type="button"
                  >
                    Sign Up
          </button>
         
 

      <div className="grid grid-cols-3 gap-1">
      </div>

   

    </div>
    
    </div>
    </div>
  )
}


