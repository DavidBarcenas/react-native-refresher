import { Theme } from "@react-navigation/native"
import { lightTheme } from "../../theme/appTheme"

export interface ThemeState extends Theme {
    currentTheme: 'light' | 'dark'
}

type ThemeAction =
    | { type: 'set_light_theme', payload: ThemeState }
    | { type: 'set_dark_theme', payload: ThemeState }

export const themeReducer = (state: ThemeState = lightTheme, action: ThemeAction): ThemeState => {
    switch (action.type) {
        case 'set_light_theme':
            return action.payload

        case 'set_dark_theme':
            return action.payload

        default:
            return state
    }
}