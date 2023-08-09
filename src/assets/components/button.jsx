import React, {useState} from 'react'
import { UseUserAuth } from '../../context/AuthContext';

function Button({text}) {
  const [error, seterror] = useState("");
  const {googlesignin}=UseUserAuth()

async function handleGooglesignin(e){

  e.preventDefault()
  try {
    await googlesignin()
  } catch (error) {
    seterror(error.message);
  }
}
  
  return (
    <>
      <button className="btn w-full bg-yellow-500 text-white hover:bg-yellow-600">{text}</button>
      <button className="btn w-full bg-yellow-500 text-white hover:bg-yellow-600" onClick={handleGooglesignin}>Sign-in Using Google</button>
    </>
  );
}

export default Button