import { useForm } from '../hooks/useForm';

export const Forms = () => {
    const {email, password, onChange} = useForm({
        email: 'test@mail.com',
        password: '123456'
    })

    return (
        <>
            <h3>Forms</h3>

            <form>
                <input 
                    type="text" 
                    className="form-control"
                    placeholder="Email"
                    value={email}
                    onChange={({target: {value}}) => onChange(value, 'email')}
                />
                <input 
                    type="text" 
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={({target: {value}}) => onChange(value, 'password')}
                />
            </form>
            <code>
                <pre>
                    {JSON.stringify({email, password}, null, 4)}
                </pre>
            </code>
        </>
    )
}
