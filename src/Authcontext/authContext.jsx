import React, { createContext, useContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebase';

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
}
export function AuthProvider ({ children }) {
    const [currentUser, setCurrentUser] = useState('');

    const signUp = (email, password) => {
        try {
            return createUserWithEmailAndPassword(auth, email, password);
        } catch (e) {
            return e;
        }
    };
    const logout = () => {
        try {
            return signOut(auth);
        } catch (e) {
            return e;
        }
    };
    const logIn = (email, password) => {
        try {
            const response = signInWithEmailAndPassword(auth, email, password);
            return response;
        } catch (e) {
            return e;
        }
    };
    useEffect(() => {
        return () => {
            auth.onAuthStateChanged(user => {
                setCurrentUser(user);
            });
        }
    })
    let value = {
        currentUser,
        signUp,
        logIn,
        logout,
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
