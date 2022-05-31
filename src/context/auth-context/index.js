import React, { createContext, useState } from 'react'

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [state, setState] = useState({
        user: "",
        token: "",
        isLoggedIn: false,
    });

    const setUser = (data) => {
        setState({
            user: data.user,
            token: data.jwt,
            isLoggedIn: true
        })
        localStorage.setItem("token", data.jwt);
    }

    const injectValues = {
        ...state,
        setUser
    }

    return (
        <AuthContext.Provider value={injectValues}>
            {children}
        </AuthContext.Provider>
    )
}
