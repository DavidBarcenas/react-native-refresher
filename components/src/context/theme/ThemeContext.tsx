import React, { createContext } from "react";

interface ThemeProviderProps {
    children: JSX.Element;
}

interface ThemeContextProps {
    theme: any;
    setDarkTheme: () => void
    setLightTheme: () => void
}

export const ThemeContext = createContext({} as ThemeContextProps)

export const ThemeProvider = ({children}: ThemeProviderProps) => {
    const theme = {}
    const setDarkTheme  = () => {}
    const setLightTheme = () => {}

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