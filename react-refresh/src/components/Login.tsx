import { useEffect, useReducer } from "react"

interface AuthState {
    validating: boolean;
    username: string | null;
    name: string | null;
    token: string | null;
}

type LoginPayload = {
    username: string;
    name: string;
}

type AuthAction = 
    | { type: AuthActions.logout } 
    | { type: AuthActions.login, payload: LoginPayload}

enum AuthActions {
    logout,
    login
}

const initialState: AuthState = {
    validating: true,
    username: null,
    name: null,
    token: null,
}

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case AuthActions.logout:
            return {
                validating: false,
                token: null,
                username: null,
                name: null
            }
        case AuthActions.login:
            return {
                validating: false,
                token: 'my-token-123',
                username: action.payload.username,
                name: action.payload.name
            }
    
        default:
            return state;
    }
}

export const Login = () => {
    const [state, dispatch] = useReducer(authReducer, initialState)
    
    useEffect(() => {
        setTimeout(() => {
            dispatch({type: AuthActions.logout})
        }, 1500);
    }, [])

    const login = () => {
        dispatch({
            type: AuthActions.login,
            payload: {
                name: 'David',
                username: 'Daveepro'
            }
        })
    }

    const logout = () => dispatch({type: AuthActions.logout})

    if(state.validating) {
        return (
            <>
                <h3>Login</h3>
                <div className="alert alert-info">
                    <span>Validating...</span>
                </div>
            </>
        )
    }
    
    return (
        <>
            <h3>Login</h3>
            {
                state.token ? 
                <div className="alert alert-success">
                    <span>Authenticated, {state.name}!!!</span>
                </div> :
                <div className="alert alert-danger">
                    <span>Not Authenticated...</span>
                </div>
            }
            {
                state.token ? 
                <button onClick={logout} className="btn btn-danger">Logout</button> :
                <button onClick={login} className="btn btn-primary ms-0 mx-2">Login</button>
            }

        </>
    )
}
