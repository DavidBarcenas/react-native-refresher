import { useCounter } from "../hooks/useCounter"

export const CounterHook = () => {
    const {value, acc} = useCounter(20)
    
    return (
        <>
            <h3>Counter Hook: <b>{value}</b></h3>
            <button onClick={() => acc(1)} className="btn btn-success mx-2">+1</button>
            <button onClick={() => acc(-1)} className="btn btn-primary">-1</button>
        </>
    )
}
