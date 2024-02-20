// import { useContext } from "react"
// import { CounterContext } from "../context/CounterContext"


import ChangeCounter from "../components/ChangeCounter"

import { useCounterContext } from "../hooks/useCounterContext"

import { useTitleColorContext } from "../hooks/useTitleColorContext"

const Contact = () => {

    // const { counter } = useContext(CounterContext)

    const { counter } = useCounterContext()

    const { color } = useTitleColorContext()

    return (
        <>
            <h1 style={{ color: color }}>Contact</h1>
            <p>Counter: {counter}</p>
        </>
    )
}

export default Contact