 import React, { useRef, useState } from 'react'
import Button from '../components/button'
import { UseUserAuth } from '../../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

 function Signup() {

  
  const passwordref = useRef(null)
  const confirmPasswordRef =useRef(null)
  
  const [email , setemail]=useState("")
  const [password, setpassword]=useState("")
const [error, seterror] = useState("")

const navigate = useNavigate()


const {signup} = UseUserAuth()

  async function handleSubmit(e){

    e.preventDefault()
if(passwordref.current.value !== confirmPasswordRef.current.value){
return seterror("Password do not match ")
}

try {
  await signup(email,password)
  navigate("/login")
} catch (error) {
  seterror(error.message)
}

  }


  return (
    <>
      <div className="flex h-full w-full justify-between px-5 items-center flex-wrap">
        <div>
          <h1 className="font-extrabold text-5xl mb-4 text-center mt-4 lg:mt-0">
            Welcome to <span className="text-yellow-500">foldery</span>
          </h1>
          <p className="text-center text-xl">
            the best place to store and organize your documents, video, and
            music
          </p>
        </div>
        <div className="w-100 h-[100vh] bg-white flex flex-col">
          <div className="w-full border border-gray-300 mt-10 px-5 py-5">
            <h2 className="font-bold text-7xl px-5 text-center text-yellow-500">
              Sign Up
            </h2>
            <p className="text-center capitalize text-sm font-semibold py-5">
              since this is a fun project, kindly use test12 as the username and
              1234 as the password
            </p>
            {error && <div className="bg-red-400 p-3 rounded ">{error}</div>}
            <form className="flex flex-col" onSubmit={handleSubmit}>
              <label htmlFor="email" className="capitalize font-bold mb-3">
                email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email "
                className="border w-full rounded border-gray-400 px-6 py-2 mb-5 outline-yellow-500"
                onChange={(e) => setemail(e.target.value)}
              />

              <label htmlFor="password" className="capitalize font-bold mb-3 ">
                password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter Your Password"
                className="border w-full rounded border-gray-400 px-6 py-2 mb-5"
                ref={passwordref}
                onChange={(e) => setpassword(e.target.value)}
              />

              <label
                htmlFor="passwordCont"
                className="capitalize font-bold mb-3 "
              >
                password confirmation
              </label>
              <input
                type="password"
                name="passwordCont"
                placeholder="Enter Password Again"
                className="border w-full rounded border-gray-400 px-6 py-2 mb-5"
                ref={confirmPasswordRef}
              />
              <Button text="Sign-Up" />
            </form>
          </div>
          <p>
            Already have an account?<Link to="/login">Log in</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Signup