import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/firebase.config';
export const authcontext=createContext();
const Authprovider = ({children}) => {
    const [user,setuser]=useState(null);
    const creatuser=(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentuser=>{
            setuser(currentuser);
        }))
        return ()=>{
            unsubscribe();
        }
    },[])
    const login=(email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logout=()=>{
        return signOut(auth)
    }
const authinfo={
  creatuser,
  login,
  logout,
  user,
}
    return (
       <authcontext.Provider value={authinfo}>
        {children}
       </authcontext.Provider>
    );
};

export default Authprovider;