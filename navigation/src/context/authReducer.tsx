import { AuthState } from './AuthContext';

type AuthAction = 
    | {type: 'signIn'}
    | {type: 'signOut'}
    | {type: 'addFavoriteIcon', payload: string;}
    | {type: 'changeUsername', payload: string;}

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'signIn':
            return {
                ...state, 
                isLoggedIn: true, 
                usernaame: 'Daveepro'
            }
        case 'signOut':
            return {
                isLoggedIn: false,
                usernaame: undefined,
                favoriteIcon: undefined
            }
        case 'addFavoriteIcon':
            return {
                ...state, 
                favoriteIcon: action.payload
            }
        case 'changeUsername':
            return {
                ...state, 
                usernaame: action.payload
            }
        default:
            return state
    }
}