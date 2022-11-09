import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import app from '../firebase.init';


export const authContext = createContext(app)
const auth = getAuth();
const provider = new GoogleAuthProvider();

const ContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const handleSignUp = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const handleLogIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const handleLogOut = () => {
        return signOut(auth);
    }

    const handleGoogleLogIn = () => {
        return signInWithPopup(auth, provider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
        })
        return () => unsubscribe();
    }, [])


    const authInfo = { user, loading, handleSignUp, handleLogIn, handleLogOut, handleGoogleLogIn }
    return (
        <div>
            <authContext.Provider value={authInfo}>
                {children}
            </authContext.Provider>

        </div>
    );
};

export default ContextProvider;