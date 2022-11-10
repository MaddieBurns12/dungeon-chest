import React from 'react'

const Login = () => {
  const [logMenuOpen, setLogMenuOpen] = React.useState(true);

  return (
   
    <div className="w-fit h-fit shadow-lg rounded-lg my-4 bg-silver align-middle">
      <div className="py-4 px-6 align-items-">
        <h2 className="text-center">{logMenuOpen ? 'Login' : 'Sign Up'}</h2>

        <div className="flex justify-evenly ">
      
          <button
                  className="bg-alert-bad cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded  block  outline-none focus:outline-none m-1"
                  type="button"
                  onClick={() => setLogMenuOpen(true)}>
                    Log In
          </button>

          <button
                  className="bg-alert-bad cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded  block  outline-none focus:outline-none m-1"
                  type="button"
                  onClick={() => setLogMenuOpen(false)}
                  >
                    Sign Up
          </button>
          </div>


{/* LOG IN FORM */}
<div className="grid col-auto">
          {logMenuOpen ?
            (
              <>
                <input type="text" 
                    name="name" 
                    className={" px-4 py-2 border-b-2 border-gray-400 rounded-lg m-1 " +  (logMenuOpen ? " flex" : " hidden")}
                    label="Character Name"
                    placeholder='Username'
                    required >
                </input>
                <input type="text" 
                    name="name" 
                    className={" px-4 py-2 border-b-2 border-gray-400 rounded-lg m-1 " +  (logMenuOpen ? " flex" : " hidden")}
                    label="Character Name"
                    placeholder = "Password"
                    required >
                </input> 
                <button
                        className={"bg-alert-good cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded  block  outline-none focus:outline-none " }
                        type="button"
                        >
                          Proceed Adventurer
                </button>
              </>
            ) :
            (
                <>
                  <input type="text" 
                  name="name" 
                  className=" px-4 py-2 border-b-2 border-gray-400 rounded-lg m-1 "
                  label="Character Name"
                  placeholder='New Username'
                  required >
              </input>
              <input type="text" 
                  name="name" 
                  className=" px-4 py-2 border-b-2 border-gray-400 rounded-lg m-1 "
                  label="Character Name"
                  placeholder = "New Password"
                  required >
              </input>
              <button
                        className="bg-alert-good cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded  block  outline-none focus:outline-none " 
                        type="button"
                        >
                          Proceed Adventurer
                </button>
              </>
            )
          }
          </div>
      </div>
</div>

  )
}

export default Login;
