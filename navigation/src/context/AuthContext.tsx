import React, { createContext, useReducer } from "react"
import { authReducer } from './authReducer';

export interface AuthState {
    isLoggedIn: boolean;
    usernaame?: string;
    favoriteIcon?: string;
}

export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
    signOut: () => void;
    addFavoriteIcon: (iconName: string) => void;
    changeUsername: (username: string) => void;
}

export const authInitialState: AuthState = {
    isLoggedIn: false
}

export const AuthContext = createContext({} as AuthContextProps)

export const AuthProvider = ({children} : {children: JSX.Element}) => {
    const [authState, dispatch] = useReducer(authReducer, authInitialState)
    
    const signIn = () => dispatch({type: 'signIn'})
    const signOut = () => dispatch({type: 'signOut'})

    const addFavoriteIcon = (iconName: string) => {
        dispatch({
            type: 'addFavoriteIcon', 
            payload: iconName
        })
    }
    
    const changeUsername = (iconName: string) => {
        dispatch({
            type: 'changeUsername', 
            payload: iconName
        })
    }
    
    return (
        <AuthContext.Provider value={{
            authState, 
            signIn, 
            signOut, 
            addFavoriteIcon,
            changeUsername
        }}>
            {children}
        </AuthContext.Provider>
    )
}