// import { useContext } from "react"
// import { CounterContext } from "../context/CounterContext"


import ChangeCounter from "../components/ChangeCounter"

import { useCounterContext } from "../hooks/useCounterContext"

const Contact = () => {

    // const { counter } = useContext(CounterContext)

    const { counter } = useCounterContext()

    return (
        <>
            <div>Contact</div>
            <p>Counter: {counter}</p>
        </>
    )
}

export default Contact