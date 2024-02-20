import { useContext } from "react"
import { CounterContext } from "../context/CounterContext"

const Contact = () => {

    const { counter } = useContext(CounterContext)

    return (
        <>
            <div>Contact</div>
            <p>Counter: {counter}</p>
        </>
    )
}

export default Contact