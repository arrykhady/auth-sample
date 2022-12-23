import React, { createContext, useContext, useEffect, useState } from 'react'

import AsyncStorage from '@react-native-async-storage/async-storage';


const AuthContext = createContext(null)

const DEFAULT_AUTH = { user: null, token: "", authentified: false }


export const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useState(DEFAULT_AUTH)

    const setAuthentification = ({ user, token }) => {
        try {
            setAuth(() => ({
                user, token, authentified: (user && token && (token.trim() !== ""))
            }))
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <AuthContext.Provider value={{ ...auth, setAuthentification }}>
            {children}
        </AuthContext.Provider>
    )

}

export const useAuth = () => useContext(AuthContext)