import { useContext } from "react"
import { CounterContext } from "../context/CounterContext"

import ChangeCounter from "../components/ChangeCounter"

const Home = () => {

    const { counter } = useContext(CounterContext)


    return (
        <>
            <div>Home</div>
            <p>Counter: {counter}</p>
            <ChangeCounter />
        </>
    )
}

export default Home