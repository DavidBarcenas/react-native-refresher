import { useState } from "react"

export const Counter = () => {
    const [value, setValue] = useState(0)

    const acc = (num: number) => {
        setValue(value + num)
    }

    return (
        <>
            <h3>Counter: <b>{value}</b></h3>
            <button onClick={() => acc(1)} className="btn btn-success mx-2">+1</button>
            <button onClick={() => acc(-1)} className="btn btn-primary">-1</button>
        </>
    )
}
