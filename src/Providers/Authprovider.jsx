import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/firebase.config';
export const authcontext=createContext();
const Authprovider = ({children}) => {
    const [user,setuser]=useState(null);
    const [loading,setloading]=useState(true)
    const creatuser=(email,password)=>{
        setloading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const userprofile=(name,photourl)=>{
        return updateProfile(auth.currentUser,{
            displayName:name,
            photoURL:photourl
        })
        .then(()=>{
            setuser({...auth.currentUser})
        })
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentuser=>{
            setuser(currentuser);
            setloading(false)
        }))
        return ()=>{
            unsubscribe();
        }
    },[])
    const login=(email,password)=>{
        setloading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logout=()=>{
        setloading(true)
        return signOut(auth)
    }
const authinfo={
  creatuser,
  login,
  logout,
  user,
  loading,
  userprofile,
}
    return (
       <authcontext.Provider value={authinfo}>
        {children}
       </authcontext.Provider>
    );
};

export default Authprovider;