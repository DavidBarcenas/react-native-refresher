import React, { createContext, useReducer } from "react";
import { darkTheme, lightTheme } from "../../theme/appTheme";
import { ThemeState, themeReducer } from './themeReducer';

interface ThemeProviderProps {
    children: JSX.Element;
}

interface ThemeContextProps {
    theme: ThemeState;
    setDarkTheme: () => void
    setLightTheme: () => void
}

export const ThemeContext = createContext({} as ThemeContextProps)

export const ThemeProvider = ({children}: ThemeProviderProps) => {
    const [theme, dispatch] = useReducer(themeReducer, lightTheme)
    
    const setDarkTheme  = () => dispatch({type: 'set_dark_theme', payload: darkTheme})
    const setLightTheme = () => dispatch({type: 'set_light_theme', payload: lightTheme})

    return (
        <ThemeContext.Provider value={{
            setDarkTheme,
            setLightTheme,
            theme
        }}>
            {children}
        </ThemeContext.Provider>
    )
}