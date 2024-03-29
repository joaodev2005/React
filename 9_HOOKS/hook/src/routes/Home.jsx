import HookUseEffect from "../components/HookUseEffect"
import HookUseReducer from "../components/HookUseReducer"
import HookUseState from "../components/HookUseState"
import HookUseRef from "../components/HookUseRef"
import HookUseCallback from "../components/HookUseCallback"
import HookUseMemo from "../components/HookUseMemo"
import HookUseLayoutEffect from "../components/HookUseLayoutEffect"
import HookUseImperativeHandle from "../components/HookUseImperativeHandle"
import HookUseCustom from "../components/HookUseCustom"

import { useContext } from "react"
import { SomeContext } from "../components/HookUseContext"


const Home = () => {

    const { contextValue } = useContext(SomeContext)

    return (
        <>
            <div>
                <h1>Home</h1>
                <HookUseState />
                <HookUseReducer />
                <HookUseEffect />
                <h2>useContext</h2>
                <p>{contextValue}</p>
                <HookUseRef />
                <HookUseCallback />
                <HookUseMemo />
                <HookUseLayoutEffect />
                <HookUseImperativeHandle />
                <HookUseCustom />
            </div>
        </>
    )
}

export default Home