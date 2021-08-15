import { ThemeState } from "../context/theme/themeReducer"

export const lightTheme: ThemeState = {
    currentTheme: 'light',
    dark: false,
    colors: {
        primary: '#3f51b5',
        background: '#fff',
        card: '#fff',
        text: '#424242',
        border: '#e0e0e0',
        notification: '#757de8',
    }
}

export const darkTheme: ThemeState = {
    currentTheme: 'dark',
    dark: true,
    colors: {
        primary: '#e91e63',
        background: '#212121',
        card: '#212121',
        text: '#fff',
        border: '#e0e0e0',
        notification: '#ff6090',
    }
}