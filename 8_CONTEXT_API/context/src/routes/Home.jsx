// import { useContext } from "react"
// import { CounterContext } from "../context/CounterContext"


import ChangeCounter from "../components/ChangeCounter"

import { useCounterContext } from "../hooks/useCounterContext"

const Home = () => {

    // const { counter } = useContext(CounterContext)

    const { counter } = useCounterContext()


    return (
        <>
            <div>Home</div>
            <p>Counter: {counter}</p>
            <ChangeCounter />
        </>
    )
}

export default Home