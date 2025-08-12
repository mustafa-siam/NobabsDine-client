import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/firebase.config';
import axios from 'axios';

export const authcontext = createContext();

const Authprovider = ({ children }) => {
    const [user, setuser] = useState(null);
    const [loading, setloading] = useState(true);

    const creatuser = (email, password) => {
        setloading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const userprofile = (name, photourl) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photourl,
        }).then(() => {
            setuser({ ...auth.currentUser });
        });
    };

    const login = (email, password) => {
        setloading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logout = () => {
        setloading(true);
        return signOut(auth);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
            setuser(currentuser);
            if (currentuser?.email) {
                axios.post('http://localhost:5000/jwt', { email: currentuser.email }, { withCredentials: true })
                    .then((res) => {
                        console.log('login', res.data);
                        setloading(false);
                    });
            } else {
                axios.post('http://localhost:5000/logout', {}, { withCredentials: true })
                    .then((res) => {
                        console.log('logout', res.data);
                        setloading(false);
                    });
            }
        });
        return () => unsubscribe();
    }, []);

    const authinfo = {
        creatuser,
        login,
        logout,
        user,
        loading,
        userprofile,
    };

    return (
        <authcontext.Provider value={authinfo}>
            {children}
        </authcontext.Provider>
    );
};

export default Authprovider;
