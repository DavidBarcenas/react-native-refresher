import { useEffect, useReducer } from "react"

interface AuthState {
    validating: boolean;
    username: string | null;
    name: string | null;
    token: string | null;
}

type AuthAction = {
    type: AuthActions.logout
}

enum AuthActions {
    logout,
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
            <div className="alert alert-danger">
                <span>Not Authenticated...</span>
            </div>
            <div className="alert alert-success">
                <span>Authenticated!!!</span>
            </div>

            <button className="btn btn-primary ms-0 mx-2">Login</button>
            <button className="btn btn-danger">Logout</button>
        </>
    )
}
