import React, { useContext, useEffect, useState } from 'react'
import { createContext } from 'react'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword,signOut,onAuthStateChanged, GoogleAuthProvider, signInWithPopup, GithubAuthProvider} from "firebase/auth"
import {auth} from "../firebase"

const userAuthContext = createContext();


export function AuthContext({children}) {

const [user, setuser]=useState(null)
    function signup(email, password){
return createUserWithEmailAndPassword(auth,email,password)
    }
    function login(email, password){
return signInWithEmailAndPassword(auth,email,password)
    }
    function logout(){
        return signOut(auth)
    }
    function googlesignin(){
        const GoogleAuthProvider= new GithubAuthProvider()
        return signInWithPopup(auth, GoogleAuthProvider)
    }
    useEffect(()=>{
       const unsubscribe= onAuthStateChanged(auth, (currentuser)=>{
setuser(currentuser)
        })
        return()=>{
            unsubscribe()
        }
    },[])
    return (
      <userAuthContext.Provider
        value={{ user, signup, login, logout, googlesignin }}
      >
        {children}
      </userAuthContext.Provider>
    );
  
}

export function UseUserAuth(){
    return useContext(userAuthContext)
}

