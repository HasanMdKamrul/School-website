import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';


export const AuthContext = createContext();

const auth = getAuth(app)

const UserContext = ({children}) => {

    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    const createUser = (email,password)=> {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    };

    // ** google signin

    const googleProvider = new GoogleAuthProvider();

    const googleSignIn = ()=> signInWithPopup(auth,googleProvider);

    const logIn = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password);
    }

    const logOut = ()=> {
        setLoading(true)
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false);
        });

        // ** clean up subscription

        return ()=> unsubscribe();

    },[])

    const authInfo = {user, createUser, logIn, logOut, loading, googleSignIn};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;