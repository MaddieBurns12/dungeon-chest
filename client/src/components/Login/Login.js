import React from 'react';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER, LOGIN } from '../../utils/mutations'
import Auth from '../../utils/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [addUser, { error: addUserError }] = useMutation(ADD_USER);
  const [login, {error: loginError}] = useMutation(LOGIN);

  const [logMenuOpen, setLogMenuOpen] = React.useState(true);
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleLoginInput = (event) => {
    const { value, name } = event.target;

    setLoginData({
      ...loginData,
      [name]: value
    });
  };

  const handleRegisterInput = (event) => {
    const { value, name } = event.target;

    setRegisterData({
      ...registerData,
      [name]: value
    });
  };

  const handleRegister = async (event) => {
    if (!registerData.username || !registerData.password || !registerData.email) return;
    try {
      const newUserData = await addUser({
        variables: {
          email: registerData.email,
          password: registerData.password,
          username: registerData.username,
        }
      });

      console.log(newUserData);

      Auth.login(newUserData.data.addUser.token);
      navigate('/Creation')

    } catch (err) {
      console.log(err);
      console.log(addUserError)
    }
  };

  const handleLogin = async (event) => {
    if (!loginData.password || !loginData.email) return;

    try {
      const user = await login({
        variables: {
          email: loginData.email,
          password: loginData.password,
        }
      });

      console.log(user);

      Auth.login(user.data.login.token);
      navigate('/Card')

    } catch (err) {
      console.log(err);
      console.log(addUserError)
    }
  };


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
                    name="email" 
                    className={" px-4 py-2 border-b-2 border-gray-400 rounded-lg m-1 " +  (logMenuOpen ? " flex" : " hidden")}
                    label="Character Name"
                    placeholder='Email'
                    onChange={handleLoginInput}
                    value={loginData.email}
                    required >
                </input>
                <input type="password" 
                    name="password" 
                    className={" px-4 py-2 border-b-2 border-gray-400 rounded-lg m-1 " +  (logMenuOpen ? " flex" : " hidden")}
                    label="Character Name"
                    placeholder = "Password"
                    onChange={handleLoginInput}
                    value={loginData.password}
                    required >
                </input> 
                <button
                        className={"bg-alert-good cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded  block  outline-none focus:outline-none " }
                        type="button"
                        onClick={handleLogin}
                        >
                          Proceed Adventurer
                </button>
              </>
            ) :
            (
                <>
                  <input type="text" 
                  name="username" 
                  className=" px-4 py-2 border-b-2 border-gray-400 rounded-lg m-1 "
                  label="Character Name"
                  placeholder='New Username'
                  value={registerData.username}
                  onChange={handleRegisterInput}
                  required >
              </input>
              <input type="text" 
                  name="email" 
                  className=" px-4 py-2 border-b-2 border-gray-400 rounded-lg m-1 "
                  label="Character Name"
                  placeholder='Email'
                  value={registerData.email}
                  onChange={handleRegisterInput}
                  required >
              </input>
              <input type="password" 
                  name="password" 
                  className=" px-4 py-2 border-b-2 border-gray-400 rounded-lg m-1 "
                  label="Character Name"
                  placeholder = "New Password"
                  value={registerData.password}
                  onChange={handleRegisterInput}
                  required >
              </input>
              <button
                className="bg-alert-good cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded  block  outline-none focus:outline-none " 
                type="button"
                onClick={handleRegister}
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
