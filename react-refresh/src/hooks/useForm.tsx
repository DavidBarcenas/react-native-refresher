import { useState } from "react"

export const useForm = <T extends Object>(formValues: T) => {
    const [state, setState] = useState(formValues)

    const onChange = (value: string, field: keyof T) => {
        setState({
            ...state,
            [field]: value
        })
    }

    return {...state, onChange}
}
