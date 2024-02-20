// import { useContext } from "react"
// import { CounterContext } from "../context/CounterContext"


import ChangeCounter from "../components/ChangeCounter"

import { useCounterContext } from "../hooks/useCounterContext"

import { useTitleColorContext } from "../hooks/useTitleColorContext"

const Home = () => {

    // const { counter } = useContext(CounterContext)

    const { counter } = useCounterContext()

    const { color, dispatch } = useTitleColorContext()


    return (
        <>
            <h1 style={{ color: color }}>Home</h1>
            <p>Counter: {counter}</p>
            <ChangeCounter />
            <div>
                <button onClick={() => dispatch({ type: 'RED' })}>Red</button>
                <button onClick={() => dispatch({ type: 'BLUE' })}>Blue</button>
            </div>
        </>
    )
}

export default Home