import React, { createContext } from "react"

export interface AuthState {
    isLoggedIn: boolean;
    usernaame?: string;
    favoriteIcon?: string;
}

export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
}

export const authInitialState: AuthState = {
    isLoggedIn: false
}

export const AuthContext = createContext({} as AuthContextProps)

export const AuthProvider = ({children} : {children: JSX.Element}) => {
    return (
        <AuthContext.Provider value={{
            authState: authInitialState,
            signIn: () => {}
        }}>
            {children}
        </AuthContext.Provider>
    )
}